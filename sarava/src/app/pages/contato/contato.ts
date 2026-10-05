import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {

  nome = '';
  email = '';
  mensagem = '';

  mensagemEnviada = false;

  private temporizador?: ReturnType<typeof setTimeout>;


  enviarMensagem(formulario: NgForm): void {

    if (formulario.invalid) {
      return;
    }

    /*
     * Aqui futuramente podemos ligar o formulário
     * a um banco de dados ou serviço de e-mail.
     */

    this.mensagemEnviada = true;


    // Limpa os campos depois do envio
    this.nome = '';
    this.email = '';
    this.mensagem = '';

    formulario.resetForm();


    // Remove a mensagem depois de alguns segundos
    if (this.temporizador) {
      clearTimeout(this.temporizador);
    }

    this.temporizador = setTimeout(() => {
      this.mensagemEnviada = false;
    }, 5000);
  }


  fecharMensagem(): void {

    this.mensagemEnviada = false;

    if (this.temporizador) {
      clearTimeout(this.temporizador);
      this.temporizador = undefined;
    }

  }
}
