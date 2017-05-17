import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  username : String;
  password : String;

  constructor(username: String,  password: String){
    this.username = username;
    this.password = password;
  }

}

@Injectable()
export class AuthService {

  user : User;

/*  public login(loginData) {
    if(loginData.username === null || loginData.password === null) {
      return Observable.throw("Please insert your username and password.");
    } else {
      // get-user.php => username check!!
      return Observable.create(observer => {
        this.http.get('')
          .map(res => res.json())
          .subscribe(data => );
      });
    }
  }*/


}
