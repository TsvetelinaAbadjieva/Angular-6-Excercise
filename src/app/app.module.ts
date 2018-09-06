import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService} from './services/interceptor.service';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SubscribedEventsComponent } from './subscribed-events/subscribed-events.component';
import {ShareDataService} from './services/share-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EventsComponent,
    RegistrationComponent,
    UsersComponent,
    DetailsComponent,
    EventComponent,
    EventDetailsComponent,
    SubscribedEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    InterceptorService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorService, 
      multi:true
    },
    ShareDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
