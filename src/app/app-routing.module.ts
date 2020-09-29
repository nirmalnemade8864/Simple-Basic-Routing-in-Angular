import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { UserdetailsComponent } from './userdetails/userdetails.component'
import { DemoComponent } from './demo/demo.component' 
import { InfoComponent } from './info/info.component'


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: "userdetails",
    component: UserdetailsComponent
  },
  {
    path: "demo",
    component: DemoComponent
  },
  {
    path: "info",
    component: InfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
