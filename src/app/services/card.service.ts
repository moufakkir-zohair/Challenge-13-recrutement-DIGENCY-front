import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({
    providedIn: "root"
})

export class QrCodeGeneratorService {

    host = environment.host;

    constructor(private http: HttpClient) {
    }

    QrCodeGenerator(user: User): Observable<any> {
        return this.http.post<any>(this.host + "/genrateAndDownloadQRCode", user);
    }

    uploadPhotoUser(file: File): Observable<any> {
        let formdata: FormData = new FormData();
        formdata.append('file', file);
        return this.http.post<any>(this.host + "/uploadPhoto", formdata);
    }

    uploadPhotoUserWithInfo(file: File, user: User): Observable<any> {
        let formdata: FormData = new FormData();
        formdata.append('file', file);
        formdata.append(
            'user',
            new Blob([JSON.stringify(user)], { type: "application/json" })
        );
        return this.http.post<any>(this.host + "/uploadPhoto", formdata);
    }

}