const URLS: Record<string, string> = {
	twitter: 'https://twitter.com/gritchou',
	github: 'https://github.com/gritchou',
	linkedin: 'https://www.linkedin.com/in/jfgrand/',
	resume: 'assets/resume/jfgrand.pdf',
};

const openLink = (target: string) => {
	window.open(URLS[target], '_blank');
};

const sendMail = () => {
	const link = document.createElement('a');
	link.setAttribute('href', 'mailto:jfr.grand@gmail.com');
	link.click();
};

export { openLink, sendMail };
