import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private historyService: HistoryService
  ) { }

  public pageContent = {
    header: {
      title: 'Create New Account',
      strapline: ''
    },
    sidebar: ''
  }

  public formError: string = '';

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  public onRegisterSubmit(): void {
    this.formError = '';
    if (!this.credentials.name || !this.credentials.email || !this.credentials.password)
      this.formError = 'All fields are required, please try again';
    else {
      this.doRegister();
    }
  }

  private doRegister(): void {
    this.authenticationService.register(this.credentials)
      .then(() => this.router.navigateByUrl(this.historyService.getLastNonLoginUrl()))
      .catch((message) => this.formError = message);
  }

  ngOnInit(): void {
  }

}
