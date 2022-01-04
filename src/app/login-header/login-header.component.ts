import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss']
})
export class LoginHeaderComponent implements OnInit {

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    ) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  signUpWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
