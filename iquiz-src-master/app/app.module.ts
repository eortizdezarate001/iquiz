import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { FriendsPage } from '../pages/friends/friends';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { RankingPage } from '../pages/ranking/ranking';
import { SelectCategoryPage } from '../pages/select-category/select-category';
import { QuestionPage } from '../pages/question/question';
import { AddQuestionPage } from '../pages/add-question/add-question';
import { FinishPage } from '../pages/finish/finish';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    SignUpPage,
    FriendsPage,
    RankingPage,
    SelectCategoryPage,
    QuestionPage,
    AddQuestionPage,
    FinishPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    SignUpPage,
    FriendsPage,
    RankingPage,
    SelectCategoryPage,
    QuestionPage,
    AddQuestionPage,
    FinishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
