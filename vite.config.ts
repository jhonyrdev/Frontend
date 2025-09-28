import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
      find: '@components',
      replacement: path.resolve(path.join(__dirname, '/src/components')),
    },
      {
      find: '@pages',
      replacement: path.resolve(path.join(__dirname, '/src/pages')),
    },
      {
      find: '@layout',
      replacement: path.resolve(path.join(__dirname, '/src/layout')),
    },
    {
      find: '@routes',
      replacement: path.resolve(path.join(__dirname, '/src/routes')),
    },
    {
      find: '@utils',
      replacement: path.resolve(path.join(__dirname, '/src/utils')),
    },
  ],
  },
});
