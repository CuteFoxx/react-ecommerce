import { defineConfig } from 'vite'
// import react from
import react from '@vitejs/plugin-react';

const ReactCompilerConfig = {  target: '18' };
// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ["babel-plugin-react-compiler", ReactCompilerConfig],
      ],
    },
  })],
})
