import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AppRoutingModule } from './app-routing.module';
const routes: Routes=[
  {path:"**", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"contact", component: ContactComponent},
  {path:"skills", component: SkillsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
