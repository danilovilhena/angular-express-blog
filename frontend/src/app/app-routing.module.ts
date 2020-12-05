import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './views/about/about.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AdminPostsComponent } from './views/admin-posts/admin-posts.component';
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { ArticleComponent } from './views/article/article.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileEditComponent } from './views/profile-edit/profile-edit.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';
import { TopicsComponent } from './views/topics/topics.component';
import { WritePostComponent } from './views/write-post/write-post.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "sobre", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "forgot_password", component: ForgotPasswordComponent},
  {path: "assuntos", component: TopicsComponent},
  {path: "artigo", component: ArticleComponent},
  {path: "write_post", component: WritePostComponent},
  {path: "profile", component: ProfileComponent},
  {path: "profile/edit", component: ProfileEditComponent},
  {path: "admin/home", component: AdminHomeComponent},
  {path: "admin/usuarios", component: AdminUsersComponent},
  {path: "admin/posts", component: AdminPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
