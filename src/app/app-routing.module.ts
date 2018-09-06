import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {EventComponent} from './event/event.component';
import {UsersComponent} from './users/users.component';
import {DetailsComponent} from './details/details.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
  {
    path:'',
    component: UsersComponent
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'event',
    component: EventComponent
  },

  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
