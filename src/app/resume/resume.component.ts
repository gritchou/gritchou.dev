import { Component, OnInit } from '@angular/core';
import { Experience } from './resume';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

	experiences = [{
		startDate: "debut",
		endDate: "fin",
		jobTitle: "dev",
		company: "oo",
		location: "Paris",
		achievments: ["géré piip", "fait des pipes"],
	}] as Experience[];
	constructor() { }

	ngOnInit(): void {
	}

}
