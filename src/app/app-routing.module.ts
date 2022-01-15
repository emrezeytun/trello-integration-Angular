import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './pages/add-card/add-card.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { CardsComponent } from './pages/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'add-card',
    component: AddCardComponent
  },
  {
    path: 'add-task',
    component: AddTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
