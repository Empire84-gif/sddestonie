import { useEffect } from "react";

function setMetaByName(name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href) return;

  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function PageMeta({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = "https://www.sddestonie.com/og-sde.png",
  locale = "en_US",
}) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    setMetaByName("description", description);

    setMetaByProperty("og:title", ogTitle || title);
    setMetaByProperty("og:description", ogDescription || description);
    setMetaByProperty("og:url", ogUrl || canonical);
    setMetaByProperty("og:image", ogImage);
    setMetaByProperty("og:image:secure_url", ogImage);
    setMetaByProperty("og:locale", locale);

    setMetaByName("twitter:title", ogTitle || title);
    setMetaByName("twitter:description", ogDescription || description);
    setMetaByName("twitter:image", ogImage);

    setCanonical(canonical);
  }, [
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    locale,
  ]);

  return null;
}

export default PageMeta;