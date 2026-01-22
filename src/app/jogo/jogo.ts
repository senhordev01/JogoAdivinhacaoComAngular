import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jogo',
  imports: [FormsModule, NgClass],
  templateUrl: './jogo.html',
  styleUrls: ['./jogo.css'],
  standalone:true
})
export class Jogo {
  Resultado:String = "";
  Inserir_Numero:Number = 0;
  constructor(public Titulo:Title){
    this.Titulo.setTitle("Jogo da Adivinhação");
  }
  Jogo(){
    let Nivel_Facil = (Math.random()*10);
    let Nivel_Medio = (Math.random()*100);
    let Nivel_Dificil = (Math.random()*1000);
    let Nivel_Muito_Dificil = (Math.random()*1000);
    let Nivel_Impossível = (Math.random()*9999);

    let escolher_modo:Number = 0;
    if(escolher_modo === 0){

    }

  }
}
