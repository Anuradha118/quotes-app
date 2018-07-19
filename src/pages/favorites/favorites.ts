import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuoteService } from '../../services/quotes';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes:Quote[];

  constructor(private quotesService:QuoteService,
              private modalCtrl:ModalController,
              private settingsService:SettingsService){}

  ionViewWillEnter(){
    this.quotes=this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(selectedQuote:Quote){
    const modal= this.modalCtrl.create(QuotePage, selectedQuote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
        this.onRemoveFromFavorites(selectedQuote);
      }
    });
  }

  onRemoveFromFavorites(quote:Quote){
    this.quotesService.removeQuoteFromFavorite(quote);
    this.quotes=this.quotesService.getFavoriteQuotes();
  }

  getBackground(){
    return this.settingsService.isAltbackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
