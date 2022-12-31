# Rickandmorty3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.
## Tutorial
* https://www.tektutorialshub.com/angular/injection-token-in-angular/
### Ejemplo de injectionToken
Aquí tienes un ejemplo de cómo se puede utilizar una InjectionToken en una aplicación real de Angular:
```
import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  appName: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) { }

  get apiUrl(): string {
    return this.config.apiUrl;
  }

  get appName(): string {
    return this.config.appName;
  }
}

```
En este ejemplo, se define una interfaz AppConfig que describe la estructura de la configuración de la aplicación. Luego se crea una InjectionToken llamada APP_CONFIG con el tipo de datos AppConfig.

Se crea un servicio llamado AppConfigService que inyecta la dependencia con el token APP_CONFIG a través de la decoración @Inject. El servicio proporciona métodos para obtener la URL de la API y el nombre de la aplicación a partir de la configuración inyectada.

Para proporcionar la configuración en el módulo principal de la aplicación, puedes hacerlo de la siguiente manera:
```
import { NgModule } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app-config';

const config: AppConfig = {
  apiUrl: 'https://api.example.com',
  appName: 'Mi aplicación'
};

@NgModule({
  providers: [
    { provide: APP_CONFIG, useValue: config }
  ]
})
export class AppModule { }

```

En este ejemplo, se proporciona una instancia de APP_CONFIG en el módulo principal de la aplicación con un objeto de configuración que incluye la URL de la API y el nombre de la aplicación.

Espero que este ejemplo te ayude a entender cómo se puede utilizar una InjectionToken en una aplicación real de Angular. Si tienes más preguntas, no dudes en hacerlas.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# angular15-standalone-InjectionToken
