import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InitService } from './core/services/init.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, CoreModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => InitService.initializeApp,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
