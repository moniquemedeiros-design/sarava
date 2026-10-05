import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Loja } from './pages/loja/loja';
import { Produto } from './pages/produto/produto';
import { Sustentabilidade } from './pages/sustentabilidade/sustentabilidade';
import { Sobre } from './pages/sobre/sobre';
import { Contato } from './pages/contato/contato';
import { Carrinho } from './pages/carrinho/carrinho';
import { Checkout } from './pages/checkout/checkout';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: Inicio },
  { path: 'loja', component: Loja },
  { path: 'produto', component: Produto },
  { path: 'sustentabilidade', component: Sustentabilidade },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato },
  { path: 'carrinho', component: Carrinho },
  { path: 'checkout', component: Checkout }
];