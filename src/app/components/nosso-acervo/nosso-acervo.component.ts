import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-nosso-acervo',
  templateUrl: './nosso-acervo.component.html',
  styleUrls: ['./nosso-acervo.component.scss'],
})
export class NossoAcervoComponent implements OnInit, OnDestroy {
  termoPesquisa: string = '';
  resultados: any[] = [];
  categoriaSelecionada: string = '';
  livrosSugeridos: any[] = [];
  erroLivroNaoEncontrado: boolean = false;
  quantidadeExibida: number = 6; // Número de itens inicialmente exibidos
  incremento: number = 3; // Número de itens a serem carregados a cada vez
  carregandoMais: boolean = false;
  lastScrollPosition: number = 0;
  resultadosExibidos: any[] = [];

  @ViewChild(MatAutocomplete) autocomplete!: MatAutocomplete;

  constructor(
    private livroService: LivroService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarTodosLivros();
    window.addEventListener('scroll', this.onScroll, true);
    this.lastScrollPosition = window.pageYOffset;
    this.atualizarResultadosExibidos();
  }

  onScroll = () => {
    const scrollPosition = window.pageYOffset;

    // Verifica se o usuário está rolando para baixo comparando com a posição anterior
    if (scrollPosition > this.lastScrollPosition) {
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      // Verifica se o usuário está próximo ao final da página
      if (scrollPosition + windowSize >= bodyHeight - 500) {
        this.verMais();
      }
    }

    // Atualiza a posição anterior de rolagem
    this.lastScrollPosition = scrollPosition;
  };

  carregarTodosLivros() {
    this.livroService.todosOsLivros().subscribe(
      (resultados) => {
        this.resultados = resultados;
      },
      (error) => {
        console.error('Erro ao carregar todos os livros:', error);
        // Trate o erro conforme necessário
      }
    );
  }

  pesquisarLivros() {
    console.log('Termo de pesquisa:', this.termoPesquisa);

    const termoPesquisaLowerCase = this.termoPesquisa.toLowerCase(); // Converter para minúsculas

    if (termoPesquisaLowerCase.trim() !== '') {
      this.livroService.pesquisarLivros(termoPesquisaLowerCase).subscribe(
        (resultados) => {
          console.log('Resultados da pesquisa:', resultados);
          this.resultados = resultados;
          this.erroLivroNaoEncontrado = resultados.length === 0;
          console.log(
            'Erro livro não encontrado:',
            this.erroLivroNaoEncontrado
          );
        },
        (error) => {
          console.error('Erro ao pesquisar livros:', error);
          // Trate o erro conforme necessário
        }
      );
    } else {
      this.carregarTodosLivros();
    }
  }

  filtrarPorCategoria() {
    if (this.categoriaSelecionada.trim() !== '') {
      this.livroService.getLivrosByCategoria(this.categoriaSelecionada).subscribe(
        (resultados) => {
          this.resultados = resultados;
          this.erroLivroNaoEncontrado = resultados.length === 0;
        },
        (error) => {
          console.error('Erro ao filtrar livros por categoria:', error);
          // Trate o erro conforme necessário
        }
      );
    } else {
      this.carregarTodosLivros();
    }
  }

  onInputChange() {
    if (this.termoPesquisa.trim() === '') {
      this.carregarTodosLivros();
    }
  }

  acessarLivro(id: number) {
    // Redirecionar para a rota da página do livro com o ID do livro
    this.router.navigate(['livro', id]);
  }

  verMais() {
    if (
      !this.carregandoMais &&
      this.quantidadeExibida < this.resultados.length
    ) {
      this.carregandoMais = true;
      setTimeout(() => {
        this.quantidadeExibida += this.incremento;
        this.carregandoMais = false;
        this.atualizarResultadosExibidos();
      }, 1000); // Atraso de 2 segundos para simular o carregamento (ajuste conforme necessário)
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll, true);
  }

  atualizarResultadosExibidos() {
    this.resultadosExibidos = this.resultados.slice(0, this.quantidadeExibida);
  }

  exibirNomeLivro(livro: any): string {
    return livro && livro.nome ? livro.nome : '';
  }

  selecionarSugestao(event: any) {
    const livroSelecionado = event.option.value;
    this.termoPesquisa = livroSelecionado.nomeLivro; // Define o termo de pesquisa como o nome do livro selecionado
    this.pesquisarLivros(); // Realiza a pesquisa
  }

  categorias: string[] = ["Linguagens de Programação", "Segurança", "Banco de Dados", "Redes", "Hacking"];
  selecaoRealizada: boolean = false;

  exibirCategorias(): void {
    this.selecaoRealizada = true;
  }
}
