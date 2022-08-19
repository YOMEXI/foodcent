import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginTopbarComponent } from './components/login-topbar/login-topbar.component';
import { LoginMainComponent } from './components/login-main/login-main.component';

import { DashboardComponent } from './dashboard/view/dashboard.component';
import { LandingPageComponent } from './login/view/landing-page/landing-page.component';
import { LoginFormComponent } from './login/view/login-form/login-form.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { NotpermitedPageComponent } from './pages/notpermited-page/notpermited-page.component';
import { UserRegistrationComponent } from './login/view/user-registration/user-registration.component';
import { NationalProjectDirectoryComponent } from './ui/npd/national-project-directory/national-project-directory.component';
import { PublicDirectoryComponent } from './login/view/public-directory/public-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,

    DashboardComponent,
    LoaderComponent,
    LoginTopbarComponent,
    LoginMainComponent,
    LandingPageComponent,
    LoginFormComponent,
    NotfoundPageComponent,
    NotpermitedPageComponent,
    UserRegistrationComponent,
    NationalProjectDirectoryComponent,
    PublicDirectoryComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    CarouselModule,
    BrowserAnimationsModule,
    DividerModule,
    StyleClassModule,
    ReactiveFormsModule,
    ChartModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
