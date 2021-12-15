import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/views/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {
  cadastro = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  }
  
  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  createCadastro(): void {
    const data = {
      nome: this.cadastro.nome,
      sobrenome: this.cadastro.sobrenome,
      email: this.cadastro.email,
      senha: this.cadastro.senha
    };
    this.cadastroService.create(data).subscribe(response => {
      console.log(response);
    })
  }
  novoCadastro(): void {
    this.cadastro = {
      nome: '',
      sobrenome: '',
      email: '',
      senha: ''
    }
  }
}
