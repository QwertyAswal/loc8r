import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { MostRecentFirstPipe } from './most-recent-first.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeListComponent,
    DistancePipe,
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    PageheaderComponent,
    SidebarComponent,
    HtmlLineBreaksPipe,
    LocationDetailsComponent,
    DetailsPageComponent,
    MostRecentFirstPipe,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
