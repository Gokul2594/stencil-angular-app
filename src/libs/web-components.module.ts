import { NgModule } from "@angular/core";

import { defineCustomElements } from '@web-components/loader';

import { MyComponent, MySpinner } from './stencil-generated/proxies'

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [MyComponent, MySpinner],
  declarations: [MyComponent, MySpinner]
})
export class WebComponentsModule {}
