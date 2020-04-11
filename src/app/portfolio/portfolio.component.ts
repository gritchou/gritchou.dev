import { Component } from '@angular/core';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { description, projects } from '../../assets/portfolio/projects.json';

import { Project } from './project';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
	description = description;
	projects = projects;
	faGithub = faGithub;
	faYoutube = faYoutube;
	faExternalLinkAlt = faExternalLinkAlt;

	openCode(project: Project) {
		window.open('http://' + project.code, '_blank');
	}

	openDemo(project: Project) {
		window.open('http://' + project.demo, '_blank');
	}
}
