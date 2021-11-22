import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  constructor(private httpClient: HttpClient) { }

  getRecaptchaKey(): Observable<any> {
    return this.httpClient.get('/assets/recaptchaKey.json');
  }
}