import { StartModel } from './../model/start.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  gerador!: number;
  resposta!: string;

  startModel!: StartModel;
  startForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.startForm = this.formBuilder.group({
      entradaModel: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)],
      ],
    });
  }

  funcGerar(): void {
    this.gerador = Math.floor(Math.random() * 100)+ 1;
  }

  funcProcessa(): string {
    const zerado = this.startForm.getRawValue() as StartModel;

    this.funcGerar();

    if(zerado.entradaModel == this.gerador) {
      return (this.resposta = "You Win!!!");
    } else {
      return (this.resposta = "You Lose!!!, Try Again...");
    }
  }

  get entradaModel() {
    return this.startForm.get('entradamodel')!;
  }

}
