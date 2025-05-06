import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  cpfOuEmail = '';
  senha = '';
  mensagem = '';

  constructor(private authService: AuthService) {}

  fazerLogin() {
    this.authService.login(this.cpfOuEmail, this.senha).subscribe({
      next: res => this.mensagem = res,
      error: err => this.mensagem = 'Login falhou: ' + err.error
    });
  }
}
