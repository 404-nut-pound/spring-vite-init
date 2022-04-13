import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const devServer = 'http://localhost:8080';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // node 서버 설정
    origin: devServer,
    port: 8081,
    proxy: {
      '/api': {
        target: `${devServer}/api`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    disableHostCheck: true,
    open: true, // npm run 실행 시 자동으로 웹 페이지 열기
  },
  build: {
    emptyOutDir: true, // build 실행 시 outDir 내용을 삭제
    outDir: '../resources/static/', // build 실행 시 결과물을 이동 시킬 디렉토리, 기본 값 './dist'
  },
});
