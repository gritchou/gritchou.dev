import { Component, Input } from '@angular/core';

import { Skill } from '../resume';

@Component({
	selector: 'app-skill',
	templateUrl: './skill.component.html',
	styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
	@Input() skill!: Skill;
}
