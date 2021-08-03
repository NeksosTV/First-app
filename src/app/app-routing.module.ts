import { PipesJsonComponent } from './components/pipes-json/pipes-json.component';
import { BindingTwoWayComponent } from './components/binding-two-way/binding-two-way.component';
import { HomeComponent } from './components/home/home.component';
import { CoucouComponent } from './exemple/components/coucou/coucou.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingEventComponent } from './components/binding-event/binding-event.component';
import { BindingAttributeComponent } from './components/binding-attribute/binding-attribute.component';

const routes: Routes = [
  {path:"home", component:HomeComponent , children:[
    {path:'coucou', component:CoucouComponent}
  ]},
  {path:"two-way", component:BindingTwoWayComponent},
  {path:"event", component:BindingEventComponent},
  {path:"attribute", component:BindingAttributeComponent},
  {path:"pipe-json", component:PipesJsonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
