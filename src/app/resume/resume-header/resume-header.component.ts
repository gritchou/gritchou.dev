import { Component, Input } from '@angular/core';


import { Header } from '../resume';

@Component({
	selector: 'app-resume-header',
	templateUrl: './resume-header.component.html',
	styleUrls: ['./resume-header.component.scss']
})
export class ResumeHeaderComponent {
	@Input() header!: Header;
}
