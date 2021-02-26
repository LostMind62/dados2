import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  dadoizq ='../assets/img/dice1.png';
  dadoder ='../assets/img/dice4.png';
   numero1=1;
   numero2=2;

  dados(): void{
    this.numero1=Math.round( Math.random()*5)+1;
    this.numero2=Math.round( Math.random()*5)+1;
    
    this.dadoizq='../assets/img/dice' + this.numero1 + '.png';
    this.dadoizq='../assets/img/dice' + this.numero2 + '.png';

    

  }
  

}
