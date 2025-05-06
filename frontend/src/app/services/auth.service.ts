import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  login(cpfOuEmail: string, senha: string) {
    return this.http.post(this.apiUrl, { cpfOuEmail, senha }, { responseType: 'text' });
  }
}
