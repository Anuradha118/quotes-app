import { Quote } from "../data/quote.interface";

export class QuoteService{
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorite(quote:Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorite(quote:Quote){
        const index= this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(index, 1);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote:Quote){
        return this.favoriteQuotes.find((quoteEl:Quote)=>{
            return quoteEl.id==quote.id;
        })
    }
}