import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

	loading: Loading;
  	signData = {email: '', username: '', password:''};

	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

	}

	public  register(){
		this.showLoading();


	}

	showLoading() {
  	this.loading = this.loadingCtrl.create({
  			content: 'Please wait...',
  			dismissOnPageChange: true
  	});
  	this.loading.present();
	}

	showError(text) {
  	this.loading.dismiss();
  	let alert = this.alertCtrl.create({
  	  title: 'Error',
  	  subTitle: text,
  	  buttons: ['OK']
  	});
  	alert.present(prompt);
	}

}
