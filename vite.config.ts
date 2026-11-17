import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const INITIAL_COVER_HASHES: Record<string, string> = {
  'academic-risk.png': 'E3956F7FBD906A7C9BB1D9D40157091E18E707E60EE6F5AF4D3F1E29BEB9D772',
  'cctv-anomaly.png': '46DF52A1F0B53DA6C31DE7A70573CA702BF8F01AF849AC67E1886EFECDB61DD3',
  'greenhouse-iot.png': '1145F8FA4B1F291B775BB2057CC14EBF67E9623B45BDE5B0510AF8307FDA277D',
  'landsales.png': '54BA6CE5A1496B256CB633472D281643C77C8C87A443823B12BA05B4DE8B8052',
  'medical-store.png': 'DF699DFD49A282E9EA00B51762C0EC0F63D66BDC32514860CDA13CCB19A12228',
  'restaurant-inventory.png': 'EC37EEE99AF2490E9924216A6D655BB30EA0019E3BCDBA128A2194A9AD5B45D8',
}

function getFileHash(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null
  const buf = fs.readFileSync(filePath)
  return crypto.createHash('sha256').update(buf).digest('hex').toUpperCase()
}

function syncResourcesFolder(rootDir: string) {
  const candidates = ['Resorces', 'resorces']
  const resDirName = candidates.find((c) => fs.existsSync(path.join(rootDir, c)))
  if (!resDirName) return

  const resDir = path.join(rootDir, resDirName)
  const pubProfileDir = path.join(rootDir, 'public', 'images', 'profile')
  const pubProjectsDir = path.join(rootDir, 'public', 'images', 'projects')

  fs.mkdirSync(pubProfileDir, { recursive: true })
  fs.mkdirSync(pubProjectsDir, { recursive: true })

  // Sync profile image from Resorces (preserving original in Resorces)
  const profileSource = path.join(resDir, 'Chamath Weerathunga.png')
  if (fs.existsSync(profileSource)) {
    fs.copyFileSync(profileSource, path.join(pubProfileDir, 'Chamath Weerathunga.png'))
    fs.copyFileSync(profileSource, path.join(pubProfileDir, 'chamath-profile.png'))
  }

  // Sync replaceable project cover images between Resorces/ and public/images/projects/
  for (const [fileName, initialHash] of Object.entries(INITIAL_COVER_HASHES)) {
    const resFile = path.join(resDir, fileName)
    const pubFile = path.join(pubProjectsDir, fileName)

    const resHash = getFileHash(resFile)
    const pubHash = getFileHash(pubFile)

    if (resHash && pubHash) {
      if (resHash === pubHash) continue
      // If Resorces copy was modified from initial placeholder, prioritize Resorces
      if (resHash !== initialHash && pubHash === initialHash) {
        fs.copyFileSync(resFile, pubFile)
      } else if (pubHash !== initialHash && resHash === initialHash) {
        // If public/images/projects copy was modified from initial placeholder, sync to Resorces
        fs.copyFileSync(pubFile, resFile)
      } else {
        // Both modified: copy newer file to the other location
        const resMtime = fs.statSync(resFile).mtimeMs
        const pubMtime = fs.statSync(pubFile).mtimeMs
        if (resMtime >= pubMtime) {
          fs.copyFileSync(resFile, pubFile)
        } else {
          fs.copyFileSync(pubFile, resFile)
        }
      }
    } else if (resHash && !pubHash) {
      fs.copyFileSync(resFile, pubFile)
    } else if (!resHash && pubHash) {
      fs.copyFileSync(pubFile, resFile)
    }
  }
}

function resourcesSyncPlugin(): Plugin {
  return {
    name: 'sync-resorces-assets',
    buildStart() {
      syncResourcesFolder(process.cwd())
    },
    configureServer(server) {
      syncResourcesFolder(process.cwd())
      const resPath = path.join(process.cwd(), 'Resorces')
      if (fs.existsSync(resPath)) {
        server.watcher.add(resPath)
        server.watcher.on('change', (changedPath) => {
          if (changedPath.toLowerCase().includes('resorces')) {
            syncResourcesFolder(process.cwd())
          }
        })
      }
    },
  }
}

export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE_PATH || (command === 'build' ? '/Portfolio/' : '/'),
  plugins: [react(), resourcesSyncPlugin()],
}))
