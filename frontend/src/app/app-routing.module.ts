import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Users
import { AboutComponent } from './views/about/about.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AdminUsersComponent } from './views/admin-users/admin-users.component';
import { ArticleComponent } from './views/article/article.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TopicsComponent } from './views/topics/topics.component';
// Admin

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "sobre", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "forgot_password", component: ForgotPasswordComponent},
  {path: "assuntos", component: TopicsComponent},
  {path: "artigo", component: ArticleComponent},
  {path: "admin/home", component: AdminHomeComponent},
  {path: "admin/usuarios", component: AdminUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
