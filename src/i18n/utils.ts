import { defaultLang, ui, type Lang } from './ui';

export function isLang(value: string | undefined): value is Lang {
  return value === 'zh' || value === 'en';
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  return isLang(maybeLang) ? maybeLang : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function translate(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function localizedPath(lang: Lang, path = '/'): string {
  const cleanPath = path === '/' ? '' : `/${path.replace(/^\/|\/$/g, '')}`;
  return lang === defaultLang ? `${cleanPath || '/'}` : `/en${cleanPath || '/'}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'zh' ? 'en' : 'zh';
}
