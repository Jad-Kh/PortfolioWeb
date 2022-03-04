import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { SectionService } from "src/app/services/section-service";
import { AuthService } from "src/app/services/auth-service";

import { Section } from "src/app/models/Section";
import { User } from "src/app/models/User";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  sections$!: Observable<Section[]>;
  username$!: Pick<User, "username">;
  userId!: Pick<User, "id">;

  constructor(
    private sectionService: SectionService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.sections$ = this.fetchForUser();
    this.userId = this.authService.userId;
    this.username$ = this.authService.username;
  }

  fetchForUser(): Observable<Section[]> {
    return this.sectionService.fetchForUser()
      .pipe (
        map(sections => 
            sections.filter(section => section.title.toLowerCase() === "personal"))
      );
  }
}
