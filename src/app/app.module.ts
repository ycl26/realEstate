import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TrendingPropertiesComponent } from './trending-properties/trending-properties.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { ShowPropertiesComponent } from './show-properties/show-properties.component';
import { OrderByPipePipe } from './order-by-pipe.pipe';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    TrendingPropertiesComponent,
    ViewPropertyComponent,
    ShowPropertiesComponent,
    OrderByPipePipe,
    SubmitPropertyComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
