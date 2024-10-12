import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	base: "nexus_pwa",
	define: {
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
	},
	plugins: [
		react(),
		svgr({
			include: "**/*.svg?react",
		}),
		VitePWA({
			workbox: {
				globPatterns: ["**/*"],
			},
			manifest: {
				theme_color: "#d47322",
				background_color: "#f6f3e7",
				display: "standalone",
				scope: "/nexus_pwa",
				start_url: "/nexus_pwa",
				name: "Nexus",
				short_name: "Nexus",
				description: "Aplicativo para narradores e jogadores de Nexus",
				icons: [
					{
						src: "pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "maskable-icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
		}),
	],
});
