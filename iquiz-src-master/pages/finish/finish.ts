import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html',
})
export class FinishPage {

  unekoPuntuak: number = 0;
  puntuTotalak: number = 0;
  username: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage, public http: Http, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishPage');
    this.storage.set('quiz', null);

    this.storage.get('currentPoints').then((puntu) => {
      this.unekoPuntuak = puntu;
    });

    this.storage.get('loginPoints').then((puntu) => {
      this.storage.set('loginPoints', puntu + this.unekoPuntuak);
      this.puntuTotalak = puntu + this.unekoPuntuak;
    });

    this.storage.get('loginUsername').then((user) => {
      this.username = user;
    });

    this.http.get('http://iquiz.x10.bz/manage-user.php?key=updatePoints&user=' + this.username + '&newpoints=' + this.unekoPuntuak)
    .map(res => res.json())
    .subscribe(data => {
      if(data.length == 0){
        this.showError("Incorrect username or password.");
      } else{
         console.log('success');
      }
    }, error => this.showError('Unknown error.') );

  }

  exit(){
    this.navCtrl.setRoot(HomePage);
  }

  showError(text) {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: text,
    buttons: ['OK']
  });
  alert.present(prompt);
}

}
