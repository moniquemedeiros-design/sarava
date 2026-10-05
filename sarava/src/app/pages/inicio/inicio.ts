import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit, OnDestroy {

  indiceAtual: number = 0;

  private intervalo?: ReturnType<typeof setInterval>;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.intervalo = setInterval(() => {

      if (this.indiceAtual === 0) {
        this.indiceAtual = 1;
      } else {
        this.indiceAtual = 0;
      }

      this.cdr.detectChanges();

    }, 3000);

  }

  ngOnDestroy(): void {

    if (this.intervalo) {
      clearInterval(this.intervalo);
    }

  }

  proximo(): void {

    if (this.indiceAtual === 0) {
      this.indiceAtual = 1;
    } else {
      this.indiceAtual = 0;
    }

  }

  anterior(): void {

    if (this.indiceAtual === 0) {
      this.indiceAtual = 1;
    } else {
      this.indiceAtual = 0;
    }

  }

  irPara(indice: number): void {

    this.indiceAtual = indice;

  }

}