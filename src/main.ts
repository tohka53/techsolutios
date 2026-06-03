/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject as injectVercelAnalytics } from '@vercel/analytics';
import { AppModule } from './app/app.module';

// Vercel Web Analytics: registra visitas y vistas de página
injectVercelAnalytics();

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
