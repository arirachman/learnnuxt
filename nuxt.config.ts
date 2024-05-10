// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //add remixicon
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: 
          "https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        }
      ]
    }
  },
  devtools: { enabled: true },
  //add new modul
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
