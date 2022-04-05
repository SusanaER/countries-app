import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  errorMessage !:string;

  constructor(private router: Router, 
    private authService: AuthService, 
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.minLength(6), Validators.required]]
    });
  }

  login(): void{
    if(this.authService.login(this.loginForm.getRawValue().email, 
      this.loginForm.getRawValue().password)){
      this.router.navigateByUrl("/countries");
    }else{
      alert("Credenciales incorretas");
    }
  }

  loginFirebase(): void {
    this.errorMessage ="";
    this.authService.loginWithFirebase(this.loginForm.getRawValue()).then(
      (credentials) => {
        this.authService.storeToken(credentials.user.uid);
        this.router.navigateByUrl("/countries");
      }
    ).catch(
      (error) => {
        this.errorMessage = this.getErrorMessage(error.code);
      }
    );
  }

  getErrorMessage(code: string): string{
    switch(code){
      case "auth/invalid-email":
        return "Correo Invalido";
      case "auth/wrong-password":
        return "Contraseña Invalida";
      case "auth/user-disabled":
        return "Usuario inactivo";
      default:
        return "Error desconocido";
    }
  }
}
