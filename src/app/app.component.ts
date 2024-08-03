import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './views/login/login.component';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardModule, InputTextModule, LoginComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})
export class AppComponent {
  title = 'angular-course-carsales';
}