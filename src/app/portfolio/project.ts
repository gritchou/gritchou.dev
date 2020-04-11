export interface Projects {
	description: string;
	projects: Project[];
}

export interface Project {
	name: string;
	preview: string;
	description: string;
	demo: string;
	code: string;
}
