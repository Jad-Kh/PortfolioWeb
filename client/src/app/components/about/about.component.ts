import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { SectionService } from "src/app/services/section.service";
import { AuthService } from "src/app/services/auth.service";

import { Section } from "src/app/models/Section";
import { User } from "src/app/models/User";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  sections$!: Observable<Section[]>;
  userId!: Pick<User, "id">;

  constructor(
    private sectionService: SectionService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.sections$ = this.fetchForUser();
    this.userId = this.authService.userId;
  }

  fetchForUser(): Observable<Section[]> {
    return this.sectionService.fetchForUser()
      .pipe (
        map(sections => 
            sections.filter(section => section.title.toLowerCase() === "about"))
      );
  }

}
