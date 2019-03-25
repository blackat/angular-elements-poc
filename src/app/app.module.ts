import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GreeterComponent } from './greeter.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [GreeterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    // create an instante of the custom element
    const el = createCustomElement(GreeterComponent, { injector: this.injector });

    // use the custom element api which is a native browser api
    customElements.define('do-greet', el);
  }

  ngDoBootstrap() {
  }
}
