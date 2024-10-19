// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  modules: [
    "@nuxt/content",
    'nuxt-icon',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [400, 500, 600, 700, 800, 900],
        },
      },
    ],
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {},
});
