import { Component, OnInit } from "@angular/core";
import { Experience } from "./resume";

@Component({
    selector: "app-resume",
    templateUrl: "./resume.component.html",
    styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
    experiences = [
        {
            startDate: "Apr 2016",
            endDate: "Sep 2019",
            jobTitle: "Frontend Developer",
            company: "Oodrive",
            image: "oodrive.png",
            location: "Paris",
            achievements: [
                "Built <em>responsive single page</em> web applications",
                "Migrated the two main applications from <em>AngularJS</em> to <em>Angular</em>",
                "Developed reusable <em>components</em> and <em>libraries</em> with Angular",
                "<em>Lead frontend</em> development of a project with three frontend developers",
                "Wrote <em>REST API specifications</em> to define contract for new features",
                "Automatized <em>build</em> and <em>deployment</em> with GitLab CI/CD, Docker, Kubernetes",
                "Created handlebars <em>email templates</em> and helpers",
                "Gave two <em>public talks</em> and a <em>training</em> on Browser Extensions",
                "Attended <em>professional trainings</em>: Angular (Sfeir School), Node.js (Human Coders)"
            ]
        },
        {
            startDate: "Jan 2013",
            endDate: "Apr 2016",
            jobTitle: "Fullstack Developer and Founder",
            company: "Try Hard Go Pro",
            image: "tryhardgopro.png",
            location: "Nancy",
            achievements: [
                "Created a website for League of Legends players using Riot Games API",
                "Developed responsive frontend with Backbone.js and Bootstrap",
                "Integrated Google Analytics to get insight on the product’s usage",
                "Built backend in Java EE and rewrote it in Node.js",
                "In charge of Branding, business model, and partners development"
            ]
        }
    ] as Experience[];
    constructor() {}

    ngOnInit(): void {}
}
