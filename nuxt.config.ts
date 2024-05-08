// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //add new model
  modules: ["@nuxtjs/tailwindcss", '@vite-pwa/nuxt'],
  
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },
  //add pwa manifest
  pwa: {
    manifest: {
      name: "Carbix",
      short_name: "Carbix",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "carbon.png",
          sizes: "512x512",
          type: "image/png"
        },
      ]
    },
    devOptions: {
      enabled: true,
    }
  }
})
