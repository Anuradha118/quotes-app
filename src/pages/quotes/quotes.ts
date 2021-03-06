import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuoteService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup:{category: string , quotes: Quote[], icon: string};
  constructor(private navParams:NavParams,
              private alertCtrl:AlertController,
              private quoteService:QuoteService){}

  // ionViewDidLoad(){
  //   this.quoteGroup=this.navParams.data;
  // Add elvis operator (?) in the template for this approach
  // }

  ngOnInit(){
    this.quoteGroup=this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote){
    const alert= this.alertCtrl.create({
      title:'Add Title',
      subTitle:'Are you sure?',
      message:'Are you sure you want to add the quote?',
      buttons:[
        {
          text: 'Yes go ahead',
          handler:()=>{
            console.log('Ok');
            this.quoteService.addQuoteToFavorite(selectedQuote);
          }  
        },
        {
          text:'No, I chnaged my mind!',
          role:'cancel',
          handler:()=>{
            console.log('Cancelled');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote:Quote){
    this.quoteService.removeQuoteFromFavorite(quote);
  }

  isFavorite(quote:Quote){
    return this.quoteService.isQuoteFavorite(quote);
  }
}
