import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  { path: 'game', component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
