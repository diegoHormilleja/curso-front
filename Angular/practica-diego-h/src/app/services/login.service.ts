import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(email:string, password: string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  registro(email:string, password: string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  logOut(){
    return this.angularFireAuth.signOut();
  }

  comprobar(){
    return this.angularFireAuth.authState;
  }

}
