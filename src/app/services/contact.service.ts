import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  http = inject(HttpClient);
  API_URL = 'https//mailthis.to/alias';

  constructor() {};

  PostMessage(input: any): Observable<String>{
    return this.http.post<String>(this.API_URL, input, {responseType: 'text' as 'json'}).pipe(
      map(
        (response) => response,
        (error: any) => error
      )
    )
  };
}
