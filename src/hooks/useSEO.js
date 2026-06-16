import { useEffect } from 'react';

const BASE_URL = 'https://prisciconstructions.github.io';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

function setMeta(selector, value, attr = 'content') {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, attrName, attrValue] = selector.match(/\[([^\]=]+)="([^"]+)"\]/);
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export function useSEO({ title, description, path = '/' }) {
  useEffect(() => {
    const url = BASE_URL + path;

    document.title = title;
    setMeta('meta[name="description"]', description);
    setCanonical(url);

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:image"]', DEFAULT_IMAGE);

    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', DEFAULT_IMAGE);
  }, [title, description, path]);
}
