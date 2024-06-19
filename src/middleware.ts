import createMiddleware from 'next-intl/middleware';
import {locales, /* ... */} from './config';
 
export default createMiddleware({
  locales,
  // ...
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*']
};