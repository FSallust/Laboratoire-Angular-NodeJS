import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserLogin } from  'src/app/_models/user-login';
import { User } from  'src/app/_models/user';
import { JwtResponse } from  'src/app/_models/jwt-response';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER = "http://127.0.0.1:5400";
  authSubject  =  new  BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  //permet d'inscrire un nouveau utilisateur
  register(user: User):Observable<User> {
    return this.httpClient.post<User>(`${this.AUTH_SERVER}/api/user`, user);
  }

  getAll() {
    return this.httpClient.get<User[]>(`${this.AUTH_SERVER}/api/user`);
  }

  //permet la connection d'un utilisateur
  singIn(user: UserLogin) {
    
  }

  //permet la disconnection de l'utilisateur
  signOut() {
    
  }

  //Returning the authSubject as Observable
  isAuthenticated() {

  }
}