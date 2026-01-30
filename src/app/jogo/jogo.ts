import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-jogo',
  imports: [FormsModule],
  templateUrl: './jogo.html',
  styleUrls: ['./jogo.css'],
  standalone:true
})
export class Jogo {
  Resultado:string = "";
  Inserir_Numero:number = 0;
  Nivel_Facil!:number;
  Nivel_Medio!:number;
  Nivel_Dificil!:number;
  Nivel_Muito_Dificil!:number;
  Nivel_Impossivel!:number;
  Situacao_Partida:string = "";

  constructor(public Titulo:Title){
    this.Titulo.setTitle("Jogo da Adivinhação");
  }

  Jogo_Nivel_Facil(){
    this.Nivel_Facil = Math.floor(Math.random()*10)+1;
    this.Resultado = "Iniciando o Jogo...";

    setTimeout(() => {
      this.Resultado = "Vai começar em:";
    }, 2000);

    setTimeout(() => {
      this.Resultado = "3";
    }, 3000);

    setTimeout(() => {
      this.Resultado = "2";
    }, 4000);

    setTimeout(() => {
      this.Resultado = "1";
    }, 5000);

    setTimeout(() => {
      this.Resultado = "Começou!";
    }, 6000);

    setTimeout(() => {
      this.Resultado = "";
    }, 7000);
  }

  Resultado_Jogo_Nivel_Facil(){
    if (this.Nivel_Facil === undefined){
      this.Resultado = "Inicie o jogo primeiro";
      return;
    }

    if(this.Inserir_Numero === this.Nivel_Facil){
      this.Resultado = "Você Acertou!!!";
      console.log("O usuario acertou o nivel facil");
      this.Situacao_Partida = "";
    }else if(this.Inserir_Numero < this.Nivel_Facil){
      this.Resultado = "Você Errou";
      this.Situacao_Partida = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > this.Nivel_Facil){
      this.Resultado = "Você Errou";
      this.Situacao_Partida = "O numero que voce digitou é acima do numero correto";
    }
  }

  Jogo_Nivel_Medio(){
    this.Nivel_Medio = Math.floor(Math.random()*100)+1;
    this.Resultado = "Iniciando o Jogo...";

    setTimeout(() => {
      this.Resultado = "Vai começar em:";
    }, 2000);

    setTimeout(() => {
      this.Resultado = "3";
    }, 3000);

    setTimeout(() => {
      this.Resultado = "2";
    }, 4000);

    setTimeout(() => {
      this.Resultado = "1";
    }, 5000);

    setTimeout(() => {
      this.Resultado = "Começou!";
    }, 6000);

    setTimeout(() => {
      this.Resultado = "";
    }, 7000);
  }

  Resultado_Jogo_Nivel_Medio(){
    if (this.Nivel_Medio === undefined){
      this.Resultado = "Inicie o jogo primeiro";
      return;
    }
    if(this.Inserir_Numero === this.Nivel_Medio){
      this.Resultado = "Você Acertou!!!";
      console.log("O usuario acertou o nivel medio");
      this.Situacao_Partida = "";
    }else if(this.Inserir_Numero < this.Nivel_Medio){
      this.Resultado = "Você Errou";
      this.Situacao_Partida = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > this.Nivel_Medio){
      this.Resultado = "Você Errou";
      this.Situacao_Partida = "O numero que voce digitou é acima do numero correto";
    }
  }
  Jogo_Nivel_Dificil(){
    this.Nivel_Dificil = Math.floor(Math.random()*1000)+1;
    this.Resultado = "Iniciando o Jogo...";

    setTimeout(() => {
      this.Resultado = "Vai começar em:";
    }, 2000);

    setTimeout(() => {
      this.Resultado = "3";
    }, 3000);

    setTimeout(() => {
      this.Resultado = "2";
    }, 4000);

    setTimeout(() => {
      this.Resultado = "1";
    }, 5000);

    setTimeout(() => {
      this.Resultado = "Começou!";
    }, 6000);

    setTimeout(() => {
      this.Resultado = "";
    }, 7000);
  }

  Resultado_Jogo_Nivel_Dificil(){
    if (this.Nivel_Dificil === undefined){
      this.Resultado = "Inicie o jogo primeiro";
      return;
    }
    if(this.Inserir_Numero === this.Nivel_Dificil){
      this.Resultado = "Você Acertou!!!";
      console.log("O usuario acertou o nivel Dificil");
      this.Situacao_Partida = "";
    }else if(this.Inserir_Numero < this.Nivel_Dificil){
      this.Resultado = "Você Errou";
      this.Situacao_Partida = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > this.Nivel_Dificil){
      this.Resultado = "Você Errou";
      this.Situacao_Partida = "O numero que voce digitou é acima do numero correto";
    }
  }

  Jogo_Nivel_MuitoDificil(){
    this.Nivel_Muito_Dificil = Math.floor(Math.random()*10000)+1;
    this.Resultado = "Iniciando o Jogo...";

    setTimeout(() => {
      this.Resultado = "Vai começar em:";
    }, 2000);

    setTimeout(() => {
      this.Resultado = "3";
    }, 3000);

    setTimeout(() => {
      this.Resultado = "2";
    }, 4000);

    setTimeout(() => {
      this.Resultado = "1";
    }, 5000);

    setTimeout(() => {
      this.Resultado = "Começou!";
    }, 6000);

    setTimeout(() => {
      this.Resultado = "";
    }, 7000);
  }

  Resultado_Jogo_Nivel_MuitoDificil(){
    if (this.Nivel_Muito_Dificil=== undefined){
      this.Resultado = "Inicie o jogo primeiro";
      return;
    }
    if(this.Inserir_Numero === this.Nivel_Muito_Dificil){
      this.Resultado = "Você Acertou!!!";
      console.log("O usuario acertou o nivel Muito Dificil");
      this.Situacao_Partida = "";
      this.Resultado = "";
    }else if(this.Inserir_Numero < this.Nivel_Muito_Dificil){
      this.Resultado = "Você Errou";
      this.Situacao_Partida = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > this.Nivel_Muito_Dificil){
      this.Resultado = "Você Errou";
      this.Situacao_Partida = "O numero que voce digitou é acima do numero correto";
    }
  }

  Jogo_Nivel_Impossivel(){
    this.Nivel_Impossivel = Math.floor(Math.random()*100000)+1;
    this.Resultado = "Iniciando o Jogo...";

    setTimeout(() => {
      this.Resultado = "Vai começar em:";
    }, 2000);

    setTimeout(() => {
      this.Resultado = "3";
    }, 3000);

    setTimeout(() => {
      this.Resultado = "2";
    }, 4000);

    setTimeout(() => {
      this.Resultado = "1";
    }, 5000);

    setTimeout(() => {
      this.Resultado = "Começou!";
    }, 6000);

    setTimeout(() => {
      this.Resultado = "";
    }, 7000);
  }
  Resultado_Jogo_Nivel_Impossivel(){
    if (this.Nivel_Muito_Dificil=== undefined){
      this.Resultado = "Inicie o jogo primeiro";
      return;
    }
    if(this.Inserir_Numero === this.Nivel_Impossivel){
      this.Resultado = "Acertou!!!";
      console.log("O usuario acertou o nivel Impossível");
      this.Situacao_Partida = "";
    }else if(this.Inserir_Numero < this.Nivel_Impossivel){
      this.Resultado = "Errou";
      this.Situacao_Partida = "O numero que voce digitou é abaixo do numero correto";
    }else if(this.Inserir_Numero > this.Nivel_Impossivel){
      this.Resultado = "Errou";
      this.Situacao_Partida = "O numero que voce digitou é acima do numero correto";
    }
  }

  Limpar_Jogo(){
    this.Inserir_Numero = 0;
    this.Resultado = "Jogo finalizado";
    this.Situacao_Partida = "Até a próxima!";

    setTimeout(() => {
      this.Resultado = "";
      this.Situacao_Partida = "";
    }, 2000);
  }
}

