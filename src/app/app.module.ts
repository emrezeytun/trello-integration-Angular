import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './pages/add-card/add-card.component';
import { AgGridModule } from 'ag-grid-angular';
import { CardsComponent } from './pages/cards/cards.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsComponent } from './pages/render/buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './pages/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    CardsComponent,
    HeaderComponent,
    ButtonsComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
