import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from '../interfaces/album';
import { SearchFeature } from '../interfaces/search-feature';

@Injectable({
  providedIn: 'root'
})
export class BootsAndCatsService {
private authorizationKey = 'Bearer BQBGdZHxCYldq3JkTXPSEGt7ZzY9_StCxVi41OJgCO8kS_5iWKEJUepcoKU89ChneSi30jmSZHWlcSeXrUtSvcW3N2mV6TzYYqYOXHY-bKyeaB6jm8vYtklyr5maNoBCYBQKMY02pcoBeNfKaKESTGMwqlrNxkNcqT3ICysaUK8'

private httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': this.authorizationKey
  })
}
// dependency injection
  constructor(private httpClient: HttpClient) { }
}
