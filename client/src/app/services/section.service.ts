import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";

import { Section } from "../models/Section";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root",
})
export class SectionService {

    private url = "http://localhost:3000/api/sections";
    userId!: Pick<User, "id">;

    httpOptions : { headers: HttpHeaders } = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(
        private http: HttpClient,
        private errorHandlerService: ErrorHandlerService,
        private authService: AuthService
    ) {}

    fetchForUser(): Observable<Section[]> {
        this.userId = this.authService.userId;
        return this.http
        .get<Section[]>(`${this.url}/${this.userId}`, { responseType: "json" })
        .pipe(
            catchError(this.errorHandlerService.handleError<Section[]>("fetchForUser", []))
        );
    }
}