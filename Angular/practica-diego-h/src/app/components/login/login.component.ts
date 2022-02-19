import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { first, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  registro: boolean = true; // login o registro
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  // logado = false --> inicio sesion
  // logado = true ---> registro
  logado: boolean;
  alert: boolean;

  constructor(private elementRef: ElementRef, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eee';
  }

  login() {
    console.log("el email es: " + this.email);
    this.loginService.login(this.email, this.password).then((data) => {
      console.log("usuario autenticado");
      this.router.navigate(['']);
    }, (error) => {
      this.alert = true;
      console.log(error);
    });
  }

  functionOnWhichRedirectShouldHappen(){
    this.router.navigate(['/role']);
  }

  registrar() {
    if (this.password == this.confirmPassword) {
      this.loginService.registro(this.email, this.password).then((data) => {
        console.log("usuario registrado");
        this.logado = false;
      }, (error) => {
        console.log(error);
        this.alert = true;
      });
    } else {
      console.log("el password y la confirmación no coinciden");
      this.alert = true;
    }
  }

  change(){
    if (this.logado) {
      this.logado = false;
      this.alert = false;
    } else {
      this.logado = true;
      this.alert = false;
    }
  }

  logOut() {
    this.loginService.logOut();
    this.loginService.comprobar().pipe(first()).pipe(
      tap(user => {
        console.log(user);
        if (user) {
          this.logado = true;
        } else {
          this.logado = false;
        }
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';

  }

}
