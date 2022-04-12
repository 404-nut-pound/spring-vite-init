import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // node 서버 설정
    port: 8081,
    proxy: 'http://localhost:8080',
    disableHostCheck: true,
  },
  build: {
    emptyOutDir: true, // build 실행 시 outDir 내용을 삭제
    outDir: '../resources/static/', // build 실행 시 결과물을 이동 시킬 디렉토리, 기본 값 'dist'
  },
});
