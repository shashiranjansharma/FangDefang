import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FangDefangComponent } from './fang-defang/fang-defang.component';

@NgModule({
  declarations: [
    AppComponent,
    FangDefangComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
