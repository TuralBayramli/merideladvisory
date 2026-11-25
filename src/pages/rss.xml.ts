import { feed } from '../i18n/rss';
export const GET = (ctx: { site?: URL }) => feed('en', ctx.site);
