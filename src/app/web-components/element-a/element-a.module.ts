import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementAComponent } from './element-a.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ElementARoutingModule } from './element-a-routing.module';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  declarations: [ElementAComponent, HomeComponent, ProfileComponent, PictureComponent],
  imports: [
    CommonModule,
    ElementARoutingModule
  ],
  entryComponents: [ElementAComponent]
})
export class ElementAModule {

  constructor(private injector: Injector) {
    const elementA = createCustomElement(ElementAComponent, { injector });
    customElements.define('element-a', elementA);
  }

  ngDoBootstrap() {}
}
