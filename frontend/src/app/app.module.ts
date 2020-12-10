import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { MainArticleComponent } from './components/main-article/main-article.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { TopicsComponent } from './views/topics/topics.component';
import { ArticleComponent } from './views/article/article.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { AdminPostsComponent } from './views/admin-posts/admin-posts.component';
import { WritePostComponent } from './views/write-post/write-post.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ProfileEditComponent } from './views/profile-edit/profile-edit.component';

import { BackendService } from './services/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    MainArticleComponent,
    AsideComponent,
    MainComponent,
    TopicsComponent,
    ArticleComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminUsersComponent,
    AdminPostsComponent,
    WritePostComponent,
    ProfileComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
