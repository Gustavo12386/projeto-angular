import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { FormsModule } from '@angular/forms'; 
import {LoginService} from '../../resources/services/login.service'
import { AlertService } from '../../resources/services/alert.service';
import { Router } from '@angular/router';

library.add(faCar);

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ButtonModule, FontAwesomeModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  faCar = faCar;

  public requestLogin: RequestLogin;

  constructor (private loginService: LoginService, private alertService: AlertService, private router: Router) {
    this.requestLogin = new RequestLogin();
  }

  ngOnInit(): void {}

  public doLogin() :void{
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      this.router.navigate(['dashboard']);
    },
    httpError => {
      this.alertService.error(httpError.error.message);      
    } );
  }
}
