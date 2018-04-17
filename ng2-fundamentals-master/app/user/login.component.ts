import {Component} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({

    moduleId: module.id,
    templateUrl:'./login.component.html',
    styles: [`em {float:right; color:#E05c65;padding-left: 10px}`]
})
export class LoginComponent {

    constructor(private authService:AuthService){

    }
    userName;
    password;
    mouseoverLogin;

    login(formValues) {
        this.authService.loginUser(formValues.userName,formValues.password);
    }
}