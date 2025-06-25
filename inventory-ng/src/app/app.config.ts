import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

/**
 * Global configuration for the standalone app.
 * 
 * This file defines the main providers used throughout the app:
 * - EventCoalescing: Enables optimized zone change detection.
 * - Routes: Registers route definition.
 * - ProvideHttpClient: Allows making backend API calls. 
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient()
  ]
};
