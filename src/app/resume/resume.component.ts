import { Component } from '@angular/core';

import { header, experiences, educations, skills } from '../../assets/resume/jfgrand.json';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
	experiences = experiences;
	educations = educations;
	skills = skills;
	header = header;

	openPdf() {
		window.open('assets/resume/jfgrand.pdf', '_blank');
	}
}
