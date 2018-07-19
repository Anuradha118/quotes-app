export class SettingsService{
    private altBackground= false;

    setBackground(isAlt:boolean){
        this.altBackground=isAlt;
    }

    isAltbackground(){
        return this.altBackground;
    }
}