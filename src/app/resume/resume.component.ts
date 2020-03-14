import { Component, OnInit } from "@angular/core";
import { Experience } from "./resume";

import { experiences } from "../../assets/resume/jfgrand.json";

@Component({
    selector: "app-resume",
    templateUrl: "./resume.component.html",
    styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
    experiences = experiences;
    constructor() {}

    ngOnInit(): void {}
}
