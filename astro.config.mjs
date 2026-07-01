// 中文: Astro 配置文件，当前使用静态输出以适配 Cloudflare Pages。
// EN: Astro config file; static output is used for Cloudflare Pages deployment.
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
});
