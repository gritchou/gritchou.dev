import { Component, Input } from '@angular/core';

import { Header } from '../resume';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() header!: Header;
}
