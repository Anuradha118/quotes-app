import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
// import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person:string;
  text:string;
  // quote:Quote;
  constructor(private viewCtrl:ViewController,
              private navParams:NavParams){}

  ionViewDidLoad(){
    this.person=this.navParams.get('person');
    this.text=this.navParams.get('text');
  }
  onClose(remove=false){
    this.viewCtrl.dismiss(remove);
  }
}
