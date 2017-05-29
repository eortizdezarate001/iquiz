import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Login } from '../login/login';
import { SelectCategoryPage } from '../select-category/select-category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage, public menu: MenuController) {

  }

  ionViewDidLoad() {
    this.menu.swipeEnable(true,'menu'); 
    this.storage.get('auth').then((auth) => {
      if(auth === false)
        this.navCtrl.setRoot(Login);
    });
  }
  

  startPlaying(){
    this.navCtrl.setRoot(SelectCategoryPage);
  }


}
