import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { shareRouters } from './app-routing.module';

@NgModule({
  imports: [
    RouterModule.forChild(shareRouters)
  ],
  exports: [
  ]
})
export class ShareModule { }
