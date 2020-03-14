import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { Experience } from "../resume";

@Component({
    selector: "app-experience",
    templateUrl: "./experience.component.html",
    styleUrls: ["./experience.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {
    @Input() experience: Experience;
    constructor() {}

    ngOnInit(): void {}

    getSrc(): string {
        return "./assets/" + this.experience.image;
    }
}
