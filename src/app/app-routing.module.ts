import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './stages/menu/menu.component';
import { HelpComponent } from './stages/help/help.component';
import { GameComponent } from './stages/game/game.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
