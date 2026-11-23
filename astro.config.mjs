import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://merideladvisory.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'az'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', az: 'az' } },
    }),
  ],
});
