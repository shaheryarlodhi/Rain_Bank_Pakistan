import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Matches a package folder inside node_modules on both Windows and POSIX paths.
const pkg = (names) => new RegExp(`node_modules[/\\\\](${names})[/\\\\]`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'vendor-react', test: pkg('react|react-dom|scheduler'), priority: 40 },
            { name: 'vendor-gsap', test: pkg('gsap'), priority: 30 },
            { name: 'vendor-motion', test: pkg('motion|framer-motion|motion-dom|motion-utils'), priority: 20 },
            { name: 'vendor-lenis', test: pkg('lenis'), priority: 10 },
          ],
        },
      },
    },
  },
})
