import {
  Component,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';

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
  selector: 'app-loja',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loja.html',
  styleUrl: './loja.css'
})
export class Loja implements OnDestroy {

  produtos: Produto[] = [
    {
      id: 'brinco-1',
      nome: 'Brinco artesanal ',
      categoria: 'Brincos',
      descricao: 'Uma criação especial para completar seu estilo.',
      imagem: '/imagens/brinco-1.png'
    },
    {
      id: 'brinco-2',
      nome: 'Brinco artesanal ',
      categoria: 'Brincos',
      descricao: 'Criatividade e charme em uma peça única.',
      imagem: '/imagens/brinco-2.png'
    },
    {
      id: 'brinco-3',
      nome: 'Brinco artesanal ',
      categoria: 'Brincos',
      descricao: 'Um acessório feito para destacar sua personalidade.',
      imagem: '/imagens/brinco-3.png'
    },
    {
      id: 'chaveiro-1',
      nome: 'Chaveiro artesanal ',
      categoria: 'Chaveiros',
      descricao: 'Um pequeno detalhe para acompanhar você.',
      imagem: '/imagens/chaveiro-1.png'
    },
    {
      id: 'chaveiro-2',
      nome: 'Chaveiro artesanal ',
      categoria: 'Chaveiros',
      descricao: 'Uma criação artesanal cheia de personalidade.',
      imagem: '/imagens/chaveiro-2.png'
    },
    {
      id: 'chaveiro-3',
      nome: 'Chaveiro artesanal ',
      categoria: 'Chaveiros',
      descricao: 'Um detalhe especial para levar com você.',
      imagem: '/imagens/chaveiro-3.png'
    },
    {
      id: 'chaveiro-4',
      nome: 'Chaveiro artesanal ',
      categoria: 'Chaveiros',
      descricao: 'Criatividade e carinho em cada detalhe.',
      imagem: '/imagens/chaveiro-4.png'
    },
    {
      id: 'agua-viva',
      nome: 'Água-viva decorativa',
      categoria: 'Decoração',
      descricao: 'Uma criação decorativa inspirada no mar.',
      imagem: '/imagens/água-viva.png'
    },
    {
      id: 'saia',
      nome: 'Saia de praia artesanal',
      categoria: 'Moda',
      descricao: 'Uma peça para expressar sua criatividade.',
      imagem: '/imagens/saia.png.png'
    }
  ];

  mensagem = '';

  private temporizador?: ReturnType<typeof setTimeout>;

  adicionarAoCarrinho(produto: Produto): void {
    try {
      const dadosSalvos = localStorage.getItem('sarava-carrinho');

      const carrinho: ItemCarrinho[] = dadosSalvos
        ? JSON.parse(dadosSalvos)
        : [];

      const existente = carrinho.find(
        item => item.id === produto.id
      );

      if (existente) {
        existente.quantidade += 1;
      } else {
        carrinho.push({
          ...produto,
          quantidade: 1
        });
      }

      localStorage.setItem(
        'sarava-carrinho',
        JSON.stringify(carrinho)
      );

      this.mensagem = `${produto.nome} foi adicionado ao carrinho!`;

      if (this.temporizador) {
        clearTimeout(this.temporizador);
      }

      this.temporizador = setTimeout(() => {
        this.mensagem = '';
      }, 4000);

    } catch (erro) {
      console.error('Não foi possível atualizar o carrinho:', erro);
      this.mensagem =
        'Não conseguimos adicionar o produto agora. Tente novamente!';
    }
  }

  fecharMensagem(): void {
    this.mensagem = '';

    if (this.temporizador) {
      clearTimeout(this.temporizador);
      this.temporizador = undefined;
    }
  }

  ngOnDestroy(): void {
    if (this.temporizador) {
      clearTimeout(this.temporizador);
    }
  }
}

