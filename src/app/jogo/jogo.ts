import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-jogo',
  imports: [FormsModule],
  templateUrl: './jogo.html',
  styleUrls: ['./jogo.css'],
  standalone: true,
})
export class Jogo {
  Resultado: string = "";
  Inserir_Numero!: number;
  Nivel_Facil!: number;
  Nivel_Medio!: number;
  Nivel_Dificil!: number;
  Nivel_Muito_Dificil!: number;
  Nivel_Impossivel!: number;
  Situacao_Partida: string = "";
  Nivel_Atual: string = "";

  constructor(public Titulo: Title) {
    this.Titulo.setTitle('Jogo da Adivinhação');
  }
  
  // Jogo no Nível Fácil
  Jogo_Nivel_Facil() {
    this.Nivel_Atual = 'Facil';
    this.Nivel_Facil = Math.floor(Math.random() * 10) + 1;
    this.Resultado = 'Iniciando o Jogo...';

    setTimeout(() => {
      this.Resultado = 'Vai começar em:';
    }, 2000);

    setTimeout(() => {
      this.Resultado = '3';
    }, 3000);

    setTimeout(() => {
      this.Resultado = '2';
    }, 4000);

    setTimeout(() => {
      this.Resultado = '1';
    }, 5000);

    setTimeout(() => {
      this.Resultado = 'Começou!';
    }, 6000);

    setTimeout(() => {
      this.Resultado = '';
      this.Situacao_Partida = 'Esse modo de jogo irá gerar 10 números';
    }, 7000);
  }

  //Analisará o número inserido no modo Facil
  Resultado_Jogo_Nivel_Facil() {
    if (this.Nivel_Facil === undefined) {
      this.Resultado = 'Inicie o jogo primeiro';
      return;
    }

    if (this.Inserir_Numero === this.Nivel_Facil) {
      this.Resultado = 'Você Acertou!!!';
      console.log('O usuario acertou o nivel facil');
      this.Situacao_Partida = '';
    } else if (this.Inserir_Numero < this.Nivel_Facil) {
      this.Resultado = 'Você Errou';
      this.Situacao_Partida = 'O numero que voce digitou é abaixo do numero correto';
    } else if (this.Inserir_Numero > this.Nivel_Facil) {
      this.Resultado = 'Você Errou';
      this.Situacao_Partida = 'O numero que voce digitou é acima do numero correto';
    }
  }

  // Jogo no Nível Médio
  Jogo_Nivel_Medio() {
    this.Nivel_Atual = 'Medio';
    this.Nivel_Medio = Math.floor(Math.random() * 100) + 1;
    this.Resultado = 'Iniciando o Jogo...';

    setTimeout(() => {
      this.Resultado = 'Vai começar em:';
    }, 2000);

    setTimeout(() => {
      this.Resultado = '3';
    }, 3000);

    setTimeout(() => {
      this.Resultado = '2';
    }, 4000);

    setTimeout(() => {
      this.Resultado = '1';
    }, 5000);

    setTimeout(() => {
      this.Resultado = 'Começou!';
    }, 6000);

    setTimeout(() => {
      this.Resultado = '';
      this.Situacao_Partida = 'Esse modo de jogo irá gerar 100 números';
    }, 7000);
  }

  //Analisará o número inserido no modo Médio
  Resultado_Jogo_Nivel_Medio() {
    if (this.Nivel_Medio === undefined) {
      this.Resultado = 'Inicie o jogo primeiro';
      return;
    }
    if (this.Inserir_Numero === this.Nivel_Medio) {
      this.Resultado = 'Você Acertou!!!';
      console.log('O usuario acertou o nivel medio');
      this.Situacao_Partida = '';
    } else if (this.Inserir_Numero < this.Nivel_Medio) {
      this.Resultado = 'Você Errou';
      this.Situacao_Partida = 'O numero que voce digitou é abaixo do numero correto';
    } else if (this.Inserir_Numero > this.Nivel_Medio) {
      this.Resultado = 'Você Errou';
      this.Situacao_Partida = 'O numero que voce digitou é acima do numero correto';
    }
  }

  // Jogo no Nível Difícil
  Jogo_Nivel_Dificil() {
    this.Nivel_Atual = 'Dificil';
    this.Nivel_Dificil = Math.floor(Math.random() * 1000) + 1;
    this.Resultado = 'Iniciando o Jogo...';

    setTimeout(() => {
      this.Resultado = 'Vai começar em:';
    }, 2000);

    setTimeout(() => {
      this.Resultado = '3';
    }, 3000);

    setTimeout(() => {
      this.Resultado = '2';
    }, 4000);

    setTimeout(() => {
      this.Resultado = '1';
    }, 5000);

    setTimeout(() => {
      this.Resultado = 'Começou!';
    }, 6000);

    setTimeout(() => {
      this.Resultado = '';
      this.Situacao_Partida = 'Esse modo de jogo irá gerar 1.000 números';
    }, 7000);
  }

  //Analisará o número inserido no modo Difícil
  Resultado_Jogo_Nivel_Dificil() {
    if (this.Nivel_Dificil === undefined) {
      this.Resultado = 'Inicie o jogo primeiro';
      return;
    }
    if (this.Inserir_Numero === this.Nivel_Dificil) {
      this.Resultado = 'Você Acertou!!!';
      console.log('O usuario acertou o nivel Dificil');
      this.Situacao_Partida = '';
    } else if (this.Inserir_Numero < this.Nivel_Dificil) {
      this.Resultado = 'Você Errou';
      this.Situacao_Partida = 'O numero que voce digitou é abaixo do numero correto';
    } else if (this.Inserir_Numero > this.Nivel_Dificil) {
      this.Resultado = 'Você Errou';
      this.Situacao_Partida = 'O numero que voce digitou é acima do numero correto';
    }
  }

  // Jogo no Nível Muito Difícil
  Jogo_Nivel_MuitoDificil() {
    this.Nivel_Atual = 'Muito Dificil';
    this.Nivel_Muito_Dificil = Math.floor(Math.random() * 10000) + 1;
    this.Resultado = 'Iniciando o Jogo...';

    setTimeout(() => {
      this.Resultado = 'Vai começar em:';
    }, 2000);

    setTimeout(() => {
      this.Resultado = '3';
    }, 3000);

    setTimeout(() => {
      this.Resultado = '2';
    }, 4000);

    setTimeout(() => {
      this.Resultado = '1';
    }, 5000);

    setTimeout(() => {
      this.Resultado = 'Começou!';
    }, 6000);

    setTimeout(() => {
      this.Resultado = '';
      this.Situacao_Partida = 'Esse modo de jogo irá gerar 10.000 números';
    }, 7000);
  }

  //Analisará o número inserido no modo Muito Difícil
  Resultado_Jogo_Nivel_MuitoDificil() {
    if (this.Nivel_Muito_Dificil === undefined) {
      this.Resultado = 'Inicie o jogo primeiro';
      return;
    }
    if (this.Inserir_Numero === this.Nivel_Muito_Dificil) {
      this.Resultado = 'Você Acertou!!!';
      console.log('O usuario acertou o nivel Muito Dificil');
      this.Situacao_Partida = '';
      this.Resultado = '';
    } else if (this.Inserir_Numero < this.Nivel_Muito_Dificil) {
      this.Resultado = 'Você Errou';
      this.Situacao_Partida = 'O numero que voce digitou é abaixo do numero correto';
    } else if (this.Inserir_Numero > this.Nivel_Muito_Dificil) {
      this.Resultado = 'Você Errou';
      this.Situacao_Partida = 'O numero que voce digitou é acima do numero correto';
    }
  }

  // Jogo no Nível Impossível
  Jogo_Nivel_Impossivel() {
    this.Nivel_Atual = 'Impossivel';
    this.Nivel_Impossivel = Math.floor(Math.random() * 100000) + 1;
    this.Resultado = 'Iniciando o Jogo...';

    setTimeout(() => {
      this.Resultado = 'Vai começar em:';
    }, 2000);

    setTimeout(() => {
      this.Resultado = '3';
    }, 3000);

    setTimeout(() => {
      this.Resultado = '2';
    }, 4000);

    setTimeout(() => {
      this.Resultado = '1';
    }, 5000);

    setTimeout(() => {
      this.Resultado = 'Começou!';
    }, 6000);

    setTimeout(() => {
      this.Resultado = '';
      this.Situacao_Partida = 'Esse modo de jogo irá gerar 100.000 números';
    }, 7000);
  }

  //Analisará o número inserido no modo Impossível
  Resultado_Jogo_Nivel_Impossivel() {
    if (this.Nivel_Impossivel === undefined) {
      this.Resultado = 'Inicie o jogo primeiro';
      return;
    }

    if (this.Inserir_Numero === this.Nivel_Impossivel) {
      this.Resultado = 'Acertou!!!';
      console.log('O usuario acertou o nivel Impossível');
      this.Situacao_Partida = '';
    } else if (this.Inserir_Numero < this.Nivel_Impossivel) {
      this.Resultado = 'Errou';
      this.Situacao_Partida = 'O numero que voce digitou é abaixo do numero correto';
    } else if (this.Inserir_Numero > this.Nivel_Impossivel) {
      this.Resultado = 'Errou';
      this.Situacao_Partida = 'O numero que voce digitou é acima do numero correto';
    }
  }
  //Disponibilizará a finalização do jogo, onde irá limpar as informações e fechará o jogo
  Finalizar_Jogo() {
    this.Resultado = 'Jogo finalizado';
    this.Situacao_Partida = 'Até a próxima!';

    setTimeout(() => {
      this.Inserir_Numero = 0;
      this.Resultado = '';
      this.Situacao_Partida = '';
    }, 2000);
  }

  //Fará uma comparação dos números inseridos, onde mostrará o resultado final
  Enviar_Jogo() {
    switch (this.Nivel_Atual) {

      case 'Facil':
        this.Resultado_Jogo_Nivel_Facil();
        break;

      case 'Medio':
        this.Resultado_Jogo_Nivel_Medio();
        break;

      case 'Dificil':
        this.Resultado_Jogo_Nivel_Dificil();
        break;

      case 'Muito Dificil':
        this.Resultado_Jogo_Nivel_MuitoDificil();
        break;

      case 'Impossivel':
        this.Resultado_Jogo_Nivel_Impossivel();
        break;
    }
  }

  //Permitirá começar mais uma partida com base do último nível
  Reiniciar_Jogo() {
    this.Resultado = "Jogo Reiniciado";
    setTimeout(() => {
      switch(this.Nivel_Atual){
        case "Facil":
          this.Jogo_Nivel_Facil();
          break;
        
        case "Medio":
          this.Jogo_Nivel_Medio();
          break;
        
        case "Dificil":
          this.Jogo_Nivel_Dificil();
          break;
        
        case "Muito Dificil":
          this.Jogo_Nivel_MuitoDificil();
          break;
        
        case "Impossivel":
          this.Jogo_Nivel_Impossivel();
          break;
        
        default:
          this.Resultado = "Comece uma partida antes";
          this.Situacao_Partida = "Você nao pode reiniciar o jogo porque voce nao iniciou uma partida antes";

          setTimeout(() => {
            this.Resultado = "";
            this.Situacao_Partida = "";
          },2000)
      }
    },1000)
  }
}