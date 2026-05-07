import { useEffect } from "react";

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
};

const siteUrl = "https://velare-hero.vercel.app";

function setMetaAttribute(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setCanonical(path: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = `${siteUrl}${path}`;
}

export function RouteMetadata({ meta }: { meta: RouteMeta }) {
  useEffect(() => {
    document.title = meta.title;
    setMetaAttribute("name", "description", meta.description);
    setMetaAttribute("property", "og:title", meta.title);
    setMetaAttribute("property", "og:description", meta.description);
    setMetaAttribute("property", "og:type", "website");
    setMetaAttribute("property", "og:url", `${siteUrl}${meta.path}`);
    setMetaAttribute("name", "twitter:card", "summary_large_image");
    setMetaAttribute("name", "twitter:title", meta.title);
    setMetaAttribute("name", "twitter:description", meta.description);
    setMetaAttribute("name", "robots", meta.noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(meta.path);
  }, [meta]);

  return null;
}
