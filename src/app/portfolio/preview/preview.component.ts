import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
	@Input() name!: string;
	@Input() title!: string;
	@Input() image!: string;

	getSrc() {
		return `./assets/portfolio/previews/${this.image}`;
	}
}
