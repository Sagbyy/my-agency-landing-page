import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  // Only auto-redirect from the root English path
  if (pathname !== "/") return next();

  // Respect an explicit user preference cookie
  const langPref = context.cookies.get("lang-pref")?.value;
  if (langPref === "fr") return context.redirect("/fr/", 302);
  if (langPref === "en") return next();

  // First visit: detect from Accept-Language header, fallback to English
  const acceptLang = context.request.headers.get("accept-language") ?? "";
  const langs = acceptLang
    .split(",")
    .map((l) => l.split(";")[0].trim().toLowerCase());
  const prefersFr = langs.some((l) => l === "fr" || l.startsWith("fr-"));

  if (prefersFr) return context.redirect("/fr/", 302);

  return next();
});
