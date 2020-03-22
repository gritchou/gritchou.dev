import { Component, HostBinding } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faIdCard } from '@fortawesome/free-solid-svg-icons';

const URLS: Record<string, string> = {
	twitter: 'https://twitter.com/gritchou',
	github: 'https://github.com/gritchou',
	linkedin: 'https://www.linkedin.com/in/jfgrand/',
	resume: 'assets/resume/jfgrand.pdf',
};

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
		window.open(URLS[target], '_blank');
	}

	sendMail() {
		const link = document.createElement('a');
		link.setAttribute('href', 'mailto:jfr.grand@gmail.com');
		link.click();
	}
}
