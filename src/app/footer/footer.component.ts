import { Component, OnInit, HostBinding } from '@angular/core';

import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeSquare, faDownload, faFileDownload, faIdCard } from '@fortawesome/free-solid-svg-icons';

const URLS = {
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
export class FooterComponent implements OnInit {

	@HostBinding('class.mat-elevation-z6') elevation = true;
	faLinkedin = faLinkedin;
	faGithub = faGithub;
	faTwitter = faTwitter;
	faEnvelopeSquare = faEnvelopeSquare;
	faIdCard = faIdCard;

	constructor() { }

	ngOnInit(): void {
	}

	openLink(target) {
		window.open(URLS[target], '_blank');
	}

	sendMail() {
		const link = document.createElement('a');
		link.setAttribute('href', 'mailto:jfr.grand@gmail.com');
		link.click();
	}

}
