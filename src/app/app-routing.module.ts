import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'about', component: AboutComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: 'projects', component: PortfolioComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
