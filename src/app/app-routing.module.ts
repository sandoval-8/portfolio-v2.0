import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsComponent} from "./components/cards/cards.component";
import {AppComponent} from "./app.component";

const routes: Routes = [{
  path: '', component: AppComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
