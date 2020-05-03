import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  hasil = 0;
  bil1 : number; bil2 : number;
  pola : String[];
  baris : String;
  i : number; j : number;
  check() {
    this.hasil = Math.pow(this.bil1,this.bil2);
    if(this.hasil %2==0){
      this.pola = [];
      for (this.j=0; this.j<=this.hasil-this.bil2; this.j++){
        this.baris = "";
        for (this.i=0; this.i<parseInt(this.j)+parseInt(this.bil2); this.i++){
            this.baris = this.baris + "*";
        }
        this.pola.push(this.baris);
      }
    }else{
      this.pola = [];
      for (this.j=0; this.j<this.bil2;this.j++){
        this.baris = "";
        for(this.i=0; this.i<parseInt(this.bil2) - parseInt(this.j); this.j++){
          this.baris = this.baris + "*";
        }
        if(this.j<this.bil1){
          for(this.i=0; this.i<=parseInt(this.j); this.i++){
            this.baris = this.baris + "o";
          }
        }
        this.pola.push(this.baris);
      }
    }
  }
}
