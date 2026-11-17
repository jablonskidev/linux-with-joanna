import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://linuxwithjoanna.com/",
    title: "Linux With Joanna",
    description: "How does Linux really work? Let's find out together.",
    author: "Joanna Jablonski",
    profile: "https://jojab.dev",
    ogImage: "og.png",
    lang: "en",
    timezone: "America/Vancouver",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/jablonskidev/linux-with-joanna/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "website", url: "https://jojab.dev", linkTitle: "Joanna Jablonski’s portfolio" },
    { name: "github", url: "https://github.com/jablonskidev" },
    { name: "linkedin", url: "https://linkedin.com/in/joanna-jablonski" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
