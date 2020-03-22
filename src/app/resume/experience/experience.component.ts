import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Experience } from '../resume';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent {
	@Input() experience!: Experience;

	getSrc(): string {
		return `./assets/${this.experience.image}`;
	}
}
