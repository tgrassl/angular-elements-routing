import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementBComponent } from './element-b.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ElementBRoutingModule } from './element-b-routing.module';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  declarations: [ElementBComponent, HomeComponent, ProfileComponent, PictureComponent],
  imports: [
    CommonModule,
    ElementBRoutingModule
  ],
  entryComponents: [ElementBComponent]
})
export class ElementBModule {

  constructor(private injector: Injector) {
    const elementB = createCustomElement(ElementBComponent, { injector });
    customElements.define('element-b', elementB);
  }

  ngDoBootstrap() {}
}
