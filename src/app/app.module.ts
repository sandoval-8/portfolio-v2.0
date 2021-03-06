import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './view/nav/nav.component';
import { CardsComponent } from './components/cards/cards.component';
import { BodyComponent } from './components/body/body.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { BodyTestComponent } from './components/body-test/body-test.component';
import { TestComponent } from './components/test/test.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './service/config/config.service';

const appInitializerFn = (configService: ConfigService) => {
  return () => {
    return configService.setConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardsComponent,
    BodyComponent,
    FormContactComponent,
    BodyTestComponent,
    TestComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
