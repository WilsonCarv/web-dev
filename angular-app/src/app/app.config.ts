import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideExperimentalZonelessChangeDetection(),
		provideAnimationsAsync(),
		provideClientHydration(withIncrementalHydration())
	]
};
