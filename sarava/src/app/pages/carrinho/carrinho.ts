import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Produto {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  imagem: string;
  preco?: number;
}

interface ItemCarrinho extends Produto {
  quantidade: number;
}

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho implements OnInit {

  itens: ItemCarrinho[] = [];


  ngOnInit(): void {
    this.carregarCarrinho();
  }


  /* ========================================
     CARREGAR CARRINHO
  ======================================== */

  carregarCarrinho(): void {

    const dados = localStorage.getItem('sarava-carrinho');

    if (dados) {

      try {

        this.itens = JSON.parse(dados);

      } catch (erro) {

        console.error(
          'Erro ao carregar o carrinho:',
          erro
        );

        this.itens = [];
      }

    } else {

      this.itens = [];

    }
  }


  /* ========================================
     SALVAR CARRINHO
  ======================================== */

  salvarCarrinho(): void {

    localStorage.setItem(
      'sarava-carrinho',
      JSON.stringify(this.itens)
    );

  }


  /* ========================================
     AUMENTAR QUANTIDADE
  ======================================== */

  aumentarQuantidade(id: string): void {

    const item = this.itens.find(
      produto => produto.id === id
    );

    if (item) {

      item.quantidade++;

      this.salvarCarrinho();

    }

  }


  /* ========================================
     DIMINUIR QUANTIDADE
  ======================================== */

  diminuirQuantidade(id: string): void {

    const item = this.itens.find(
      produto => produto.id === id
    );

    if (!item) {
      return;
    }

    if (item.quantidade > 1) {

      item.quantidade--;

    } else {

      this.removerItem(id);

      return;

    }

    this.salvarCarrinho();

  }


  /* ========================================
     REMOVER PRODUTO
  ======================================== */

  removerItem(id: string): void {

    this.itens = this.itens.filter(
      item => item.id !== id
    );

    this.salvarCarrinho();

  }

}
