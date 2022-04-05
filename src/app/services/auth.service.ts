import { Injectable } from '@angular/core';
import { UserModel } from '../common/models/user.model';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static USER: string = "susana.esparza12@gmail.com";
  private static PWD: string = "123456";

  isLoggedSubject : BehaviorSubject<boolean> = new BehaviorSubject(this.existToken());

  constructor() { }

  public isLoggedIn(): Observable<boolean>{
    return this.isLoggedSubject.asObservable();
  }

  public login(user: string, pwd: string): boolean{
    return user == AuthService.USER && pwd === AuthService.PWD;
  }

  public loginWithFirebase(user: UserModel){
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, user.email, user.password);
  }

  public storeToken(token: string): void{
    localStorage.setItem("token", token);
    this.isLoggedSubject.next(true);
  }

  public logout(): void{
    localStorage.removeItem("token");
    this.isLoggedSubject.next(false);
  }

  private existToken(): boolean{
    return !!localStorage.getItem("token");
  }
}
