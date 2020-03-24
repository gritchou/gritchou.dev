export interface Header {
	name: string;
	jobTitle: string;
	description: string;
	quote: string;
}

export interface Experience {
	startDate: string;
	endDate: string;
	jobTitle: string;
	company: string;
	image: string;
	location: string;
	achievements: string[];
}

export interface Education {
	year: number;
	level: string;
	topic: string;
	school: string;
	location: string;
}

export interface Skill {
	category: string;
	values: string;
}
