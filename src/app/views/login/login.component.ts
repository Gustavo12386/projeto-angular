import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { FormsModule } from '@angular/forms'; 
import {LoginService} from '../../resources/services/login.service'

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

  constructor (private loginService: LoginService) {
    this.requestLogin = new RequestLogin();
  }

  ngOnInit(): void {}

  public doLogin() :void{
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      console.log(data);
    },
    error => {
      console.error(error);
    } );
  }
}
