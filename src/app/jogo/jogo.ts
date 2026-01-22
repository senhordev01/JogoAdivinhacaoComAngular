import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-jogo',
  imports: [],
  templateUrl: './jogo.html',
  styleUrls: ['./jogo.css'],
  standalone:true
})
export class Jogo {
  Resultado:string = "";
  Inserir_Numero:number = 0;
  constructor(public Titulo:Title){
    this.Titulo.setTitle("Jogo da Adivinhação");
  }

  Resultado_Nivel_Facil(){
    const Nivel_Facil = (Math.random()*10);
    if(this.Inserir_Numero === Nivel_Facil){
      this.Resultado = "Acertou!!!";
      console.log("O usuario acertou o nivel facil");
    }else if(this.Inserir_Numero < Nivel_Facil){
      this.Resultado = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > Nivel_Facil){
      this.Resultado = "O numero que voce digitou é acima do numero correto";
    }
  }
  Resultado_Nivel_Medio(){
    const Nivel_Medio = (Math.random()*100);
    if(this.Inserir_Numero === Nivel_Medio){
      this.Resultado = "Acertou!!!";
      console.log("O usuario acertou o nivel medio");
    }else if(this.Inserir_Numero < Nivel_Medio){
      this.Resultado = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > Nivel_Medio){
      this.Resultado = "O numero que voce digitou é acima do numero correto";
    }
  }
  Resultado_Nivel_Dificil(){
    const Nivel_Dificil = (Math.random()*1000);
    if(this.Inserir_Numero === Nivel_Dificil){
      this.Resultado = "Acertou!!!";
      console.log("O usuario acertou o nivel Dificil");
    }else if(this.Inserir_Numero < Nivel_Dificil){
      this.Resultado = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > Nivel_Dificil){
      this.Resultado = "O numero que voce digitou é acima do numero correto";
    }
  }
  Resultado_Nivel_MuitoDificil(){
    const Nivel_Muito_Dificil = (Math.random()*10000);
    if(this.Inserir_Numero === Nivel_Muito_Dificil){
      this.Resultado = "Acertou!!!";
      console.log("O usuario acertou o nivel Muito Dificil");
    }else if(this.Inserir_Numero < Nivel_Muito_Dificil){
      this.Resultado = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > Nivel_Muito_Dificil){
      this.Resultado = "O numero que voce digitou é acima do numero correto";
    }
  }
  Jogo_Nivel_Impossivel(){
    const Nivel_Impossível = (Math.random()*100000);
    if(this.Inserir_Numero === Nivel_Impossível){
      this.Resultado = "Acertou!!!";
      console.log("O usuario acertou o nivel Impossível");
    }else if(this.Inserir_Numero < Nivel_Impossível){
      this.Resultado = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > Nivel_Impossível){
      this.Resultado = "O numero que voce digitou é acima do numero correto";
    }
  }
}
