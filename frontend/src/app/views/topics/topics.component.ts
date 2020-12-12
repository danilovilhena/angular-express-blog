import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: any;
  
  
  constructor() { }

  ngOnInit(): void {
    this.topics = ['Tecnologia','Mobile','Web','Redes Sociais', 'Filmes e Séries', 'Aplicativo', 'Jogos','Computadores', 'Hardware', 'Software','Frontend','Backend','Banco de dados','Testes','Servidores','Computação em Nuvem','Microserviços','Git','DevOps','Open Source','Aprendizado de máquina','Inteligência Artificial','Ciência de dados','Cibersegurança','Redes','Robótica','IoT','Computação Gráfica','Carreira','Mercado de trabalho', 'Programas', 'Mac', 'Windows', 'Linux']
  }

  filterTopics(event: any){
    console.log(event.target.value)
    document.getElementById('tags-area')?.querySelectorAll('div').forEach((e) => {
      if(e.textContent?.toLowerCase().includes(event.target.value.toLowerCase())){
        e.style.display = 'flex';
      } else {
        e.style.display = 'none'
      }
    })
  }

  slugify(str: string){
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeiiiioooouuuunc------";
  
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  
    return str;
  }

}
