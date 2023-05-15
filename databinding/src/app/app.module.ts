import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddserversComponent } from './addservers/addservers.component';
import { NewserverComponent } from './newserver/newserver.component';

@NgModule({
  declarations: [AppComponent, AddserversComponent, NewserverComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
