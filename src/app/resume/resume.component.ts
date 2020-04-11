import { Component } from '@angular/core';

import { header, experiences, educations, skills } from '../../assets/resume/jfgrand.json';

import { Header, Experience, Education, Skill } from './resume';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
	experiences: Experience[] = experiences;
	educations: Education[] = educations;
	skills: Skill[] = skills;
	header: Header = header;

	openPdf() {
		window.open('assets/resume/jfgrand.pdf', '_blank');
	}
}
