import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { SectionComponent } from './section/section.component';
import { EducationComponent } from './resume/education/education.component';
import { SkillComponent } from './resume/skill/skill.component';
import { HeaderComponent } from './resume/header/header.component';
import { PreviewComponent } from './portfolio/preview/preview.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		AboutComponent,
		ResumeComponent,
		PortfolioComponent,
		ExperienceComponent,
		EducationComponent,
		SkillComponent,
		SectionComponent,
		HeaderComponent,
		PreviewComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		FontAwesomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
