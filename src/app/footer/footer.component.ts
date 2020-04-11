import { Component, HostBinding } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faIdCard } from '@fortawesome/free-solid-svg-icons';

import { openLink, sendMail } from '../social';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	@HostBinding('class.mat-elevation-z6') elevation = true;
	faLinkedin = faLinkedin;
	faGithub = faGithub;
	faTwitter = faTwitter;
	faEnvelopeSquare = faEnvelopeSquare;
	faIdCard = faIdCard;

	openLink(target: string) {
		openLink(target);
	}

	sendMail() {
		sendMail();
	}
}
