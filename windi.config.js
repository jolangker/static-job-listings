import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        spartan: "'Spartan', sans-serif;",
      },
      colors: {
        primary: "hsl(180, 29%, 50%)",
        "lg-cyan-1": "hsl(180, 52%, 96%)",
        "lg-cyan-2": "hsl(180, 31%, 95%)",
        "dg-cyan": "hsl(180, 8%, 52%)",
        "vdg-cyan": "hsl(180, 14%, 20%)",
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  shortcuts: {
    pill: "px-2 py-2px rounded-full font-bold text-sm",
    "pill-primary": "pill bg-primary text-white",
    "pill-vdg-cyan": "pill bg-vdg-cyan text-white",
    tag: "py-1 px-2 font-bold rounded",
    "tag-primary": "tag bg-lg-cyan-2 text-primary",
  },
});
