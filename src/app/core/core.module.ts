import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, NavbarComponent, PageNotFoundComponent]
})
export class CoreModule {}
