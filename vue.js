var app = new Vue({
  el: '#app',
  data: {
    nomeEmpresaParte1: 'lhn',
    nomeEmpresaParte2: 'construtora',
    textoHome: 'home',
    textoHistoria: 'história',
    textoServicos: 'serviços',
    textoProjetos: 'projetos',
    textoContatos: 'contatos',
    fraseProjetosExclusivosParte1: 'nossos projetos são exclusivos',
    fraseProjetosExclusivosParte2: 'e nossa inspiração é você!',
    tituloHistoriaEmpresaPt1: 'quem',
    tituloHistoriaEmpresaPt2: 'somos',
    paragrafo1HistoriaEmpresa: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    paragrafo2HistoriaEmpresa: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'",
    textoBotaoContato: 'entre em contato',
    fraseFaleConosco: 'Precisa planejar, construir ou reformar? fale conosco.',
    tituloServicosEmpresaPt1: 'nossos',
    tituloServicosEmpresaPt2: 'serviços',
    textoParagrafoCardsServicos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    tituloDepoimentosClientesPt1: 'depoimentos de',
    tituloDepoimentosClientesPt2: 'clientes',
    tituloCard_analiseDeProjeto: 'Análise de Projeto',
    tituloCard_projeto: 'Projeto',
    tituloCard_construcao: 'Construção',
    tituloCard_reforma: 'Reforma',
    tituloCard_elaboracaoDeLaudoTecnico: 'Elaboração de laudo técnico',
    tituloCard_manutencao: 'Manutenção',
    textoCardDepoimentoCliente: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    nomeCliente1: 'Diego Silva',
    cargoCliente1: 'Gestor Predial',
    nomeCliente2: 'Marina Gomes',
    cargoCliente2: 'Gerente de manutenção',
    nomeCliente3: 'Sandro Guimarães',
    cargoCliente3: 'Empresário',
    tituloFormularioParte1: 'formulário de',
    tituloFormularioParte2: 'contato',
    tituloFaleConoscoParte1: 'fale',
    tituloFaleConoscoParte2: 'conosco',
    numeroTelefone: "(21) 0000-0000",
    numeroCelular: "(21) 9 0000-0000",
    enderecoContatoParte1: 'Rua',
    enderecoContatoParte2: 'Pereira Silveira,',
    enderecoContatoParte3: 'N°',
    enderecoContatoParte4: '123 -',
    enderecoContatoParte5: 'Rio de Janeiro',
    contatoEmailParte1: 'contato@',
    contatoEmailParte2: 'lhn.com.br',
    textoBotaoForm: 'enviar',
    tituloUltimosProjetosParte1: 'últimos',
    tituloUltimosProjetosParte2: 'projetos',
    tituloManutencaoEletrica: 'manutenção elétrica',
    tituloManutencaoPedrial: 'manutenção pedrial',
    tituloPinturaPedrial: 'pintura predial',
    tituloReformaPedreiroAlvenaria: 'reforma - pedreiro e alvenaria',
    tituloManutencaoPredial: 'manutenção predial',
    tituloReformaManutencao: 'reforma e manutenção',
    textoParagrafoCard_ultimosProjetos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    tituloLeiaMais: 'Leia Mais',
    tituloEntreEmContatoParte1: 'entre em',
    tituloEntreEmContatoParte2: 'contato',
    textoHorarioFuncionamento: 'Segunda-Sexta - 9:00am-17:00pm',
    textoEmail: 'contato@lhn.com.br',
    tituloMidiasSociaisParte1: 'mídias',
    tituloMidiasSociaisParte2: 'sociais',
    textoParagrafoMidiasSociaisParte1: 'Acesse nossas redes sociais e fique por dentro de todas as novidades da',
    textoParagrafoMidiasSociaisParte2: 'LHN CONSTRUTORA',
    textoRodapeCopyrightParte1: 'Copyright © 2024 - Todos os direitos reservados |',
    textoRodapeCopyrightParte2: 'site.com.br'
  },
  methods:{
    
  },
  mounted: function () {
		
	},
  template :
  `
  <div>

    <div id="principal">

      <main>

        <div class="div-bg-header">
          <!-- HEADER -->
          <header>
            <!-- MENU NAV -->
            <nav class="nav-menu">
              <!-- LOGO DA EMPRESA -->
              <div class="nav-menu-logo">
                <i class="fa-solid fa-trowel-bricks nav-menu-logo-icone"></i>
                <div class="nav-menu-nome-empresa">
                  <p class="nome-empresa-sigla">{{ nomeEmpresaParte1 }}</p>
                  <p class="nome-empresa-ramo">{{ nomeEmpresaParte2 }}</p>
                </div>
              </div>
              <!-- OPÇÕES DO MENU DE NAVEGAÇÃO -->
              <ul class="nav-menu-itens">
                <li class="nav-menu-item">
                  <a class="nav-menu-item-link" href="#">{{ textoHome }}</a>
                </li>

                <li class="nav-menu-item">
                  <a class="nav-menu-item-link" href="#">{{ textoHistoria }}</a>
                </li>

                <li class="nav-menu-item">
                  <a class="nav-menu-item-link" href="#">{{ textoServicos }}</a>
                </li>

                <li class="nav-menu-item">
                  <a class="nav-menu-item-link" href="#">{{ textoProjetos }}</a>
                </li>

                <li class="nav-menu-item">
                  <a class="nav-menu-item-link" href="#">{{ textoContatos }}</a>
                </li>
              </ul>
            </nav>

            <!-- DIV COM BG COM FRASE DE EFEITO NO TOPO DA PÁGINA-->

            <div class="div-frase-projetos-exclusivos">

              <h1 class="frase-projetos-exclusivos-parte1">
                {{ fraseProjetosExclusivosParte1 }}
              </h1>

              <h2 class="frase-projetos-exclusivos-parte2">
                {{ fraseProjetosExclusivosParte2 }}
              </h2>

            </div>
            
          </header>

        </div>

        <!-- HISTORIA EMPRESA -->
        <article class="article-historia-empresa">

          <div class="div-texto-historia-empresa">
            <h2 class="titulo-article-historia-empresa">
              <span>{{ tituloHistoriaEmpresaPt1 }}</span>
              <span class="destaque-negrito">{{ tituloHistoriaEmpresaPt2 }}</span>
            </h2>

            <p class="paragrafo-historia-empresa">
              {{ paragrafo1HistoriaEmpresa }}
            </p>

            <p class="paragrafo-historia-empresa">
              {{ paragrafo2HistoriaEmpresa }}
            </p>

            <button class="btn-historia-empresa">{{ textoBotaoContato }}</button>
          </div>

          <!-- IMAGEM -->
          <div class="div-img-historia-empresa">
            <img class="img-historia-empresa" src="imgs/hall-1929422_1280.jpg" alt="">
          </div>

        </article>

          <!-- IMAGEM 2° FRASE 'FALE CONOSCO' -->
        <div class="div-frase-contato">

          <h2 class="titulo-div-frase-contato">{{ fraseFaleConosco }}</h2>
          
        </div>

        <!-- SERVIÇOS EMPRESA -->
        <article class="div-servicos-empresa">
          <h2 class="titulo-div-servicos-empresa">
            {{ tituloServicosEmpresaPt1 }}
            <span class="destaque-negrito">{{ tituloServicosEmpresaPt2 }}</span>
          </h2>

          <div class="cards-div-servicos-empresa">
            <!-- 1° linha com 3 cards-->
            <div class="cards-linha1-servicos-empresa">

              <div class="card-servicos-empresa">
                <i class="icone-card-servicos-empresa fa-solid fa-chart-column"></i>

                <p class="titulo-card-servicos-empresa">{{ tituloCard_analiseDeProjeto }}</p>

                <p class="paragrafo-card-servicos-empresa">{{ textoParagrafoCardsServicos }}</p>
              </div>

              <div class="card-servicos-empresa">
                <i class="icone-card-servicos-empresa fa-regular fa-file-lines"></i>
                
                <p class="titulo-card-servicos-empresa">{{ tituloCard_projeto }}</p>
                
                <p class="paragrafo-card-servicos-empresa">{{ textoParagrafoCardsServicos }}</p>
              </div>

              <div class="card-servicos-empresa">
                <i class="icone-card-servicos-empresa fa-solid fa-wrench"></i>
                  
                <p class="titulo-card-servicos-empresa">{{ tituloCard_construcao }}</p>
                
                <p class="paragrafo-card-servicos-empresa">{{ textoParagrafoCardsServicos }}</p>
              </div>

            </div>

            <!-- 2° linha com 3 cards-->
            <div class="cards-linha2-servicos-empresa">
              <div class="card-servicos-empresa">
                <i class="icone-card-servicos-empresa fa-solid fa-gear"></i>
                    
                <p class="titulo-card-servicos-empresa">{{ tituloCard_reforma}}</p>
                
                <p class="paragrafo-card-servicos-empresa">{{ textoParagrafoCardsServicos }}</p>
              </div>

              <div class="card-servicos-empresa">
                <i class="icone-card-servicos-empresa fa-solid fa-list-check"></i>
                    
                <p class="titulo-card-servicos-empresa">{{ tituloCard_elaboracaoDeLaudoTecnico }}</p>
                
                <p class="paragrafo-card-servicos-empresa">{{ textoParagrafoCardsServicos }}</p>
              </div>

              <div class="card-servicos-empresa">
                
                <i class="icone-card-servicos-empresa fa-solid fa-gears"></i>
                    
                <p class="titulo-card-servicos-empresa">{{ tituloCard_manutencao }}</p>
                
                <p class="paragrafo-card-servicos-empresa">{{ textoParagrafoCardsServicos }}</p>
              </div>

            </div>
          </div>
        </article>

        <!-- DEPOIMENTOS CLIENTES -->
        <article class="article-depoimentos-clientes">
          <h2 class="titulo-article_depoimentos-clientes">
            {{ tituloDepoimentosClientesPt1 }}
            <span class="destaque-negrito">{{ tituloDepoimentosClientesPt2 }}</span>
          </h2>
          
          <!-- CARDS DEPOIMENTOS -->
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active carousel-indicators-design"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" class="carousel-indicators-design"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-block w-100">
                  <div class="div-cards-depoimentos">
                    <div class="card-depoimento">
                      <div class="card-parte-depoimento">
                        <img class="icone-aspas" src="imgs/quote-left-solid.svg" alt="">
                        <p class="card-paragrafo-depoimento">{{ textoCardDepoimentoCliente }}</p>
                        <img class="icone-aspas" src="imgs/quote-right-solid.svg" alt="">
                      </div>

                      <div class="card-parte-cliente">
                        <img class="img-cliente" src="imgs/1.jpg" alt="">
                        <div class="info-cliente">
                          <p class="info-nome-cliente">{{ nomeCliente1 }}</p>
                          <p class="info-cargo-cliente">{{ cargoCliente1 }}</p>
                        </div>
                      </div>
                    </div>

                    <div class="card-depoimento">

                      <div class="card-parte-depoimento">
                        <img class="icone-aspas" src="imgs/quote-left-solid.svg" alt="">
                        <p class="card-paragrafo-depoimento">{{ textoCardDepoimentoCliente }}</p>
                        <img class="icone-aspas" src="imgs/quote-right-solid.svg" alt="">
                      </div>

                      <div class="card-parte-cliente">
                        <img class="img-cliente" src="imgs/2.jpg" alt="">
                        <div class="info-cliente">
                          <p class="info-nome-cliente">{{ nomeCliente2 }}</p>
                          <p class="info-cargo-cliente">{{ cargoCliente2 }}</p>
                        </div>
                      </div>

                    </div>

                    <div class="card-depoimento">

                      <div class="card-parte-depoimento">
                        <img class="icone-aspas" src="imgs/quote-left-solid.svg" alt="">
                        <p class="card-paragrafo-depoimento">{{ textoCardDepoimentoCliente }}</p>
                        <img class="icone-aspas" src="imgs/quote-right-solid.svg" alt="">
                      </div>

                      <div class="card-parte-cliente">
                        <img class="img-cliente" src="imgs/3.jpg" alt="">
                        <div class="info-cliente">
                          <p class="info-nome-cliente">{{ nomeCliente3 }}</p>
                          <p class="info-cargo-cliente">{{ cargoCliente3 }}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="d-block w-100">
                  <div class="div-cards-depoimentos">
                    <div class="card-depoimento">
                      <div class="card-parte-depoimento">
                        <img class="icone-aspas" src="imgs/quote-left-solid.svg" alt="">
                        <p class="card-paragrafo-depoimento">{{ textoCardDepoimentoCliente }}</p>
                        <img class="icone-aspas" src="imgs/quote-right-solid.svg" alt="">
                      </div>

                      <div class="card-parte-cliente">
                        <img class="img-cliente" src="imgs/2.jpg" alt="">
                        <div class="info-cliente">
                          <p class="info-nome-cliente">{{ nomeCliente2 }}</p>
                          <p class="info-cargo-cliente">{{ cargoCliente2 }}</p>
                
                        </div>
                      </div>
                    </div>

                    <div class="card-depoimento">

                      <div class="card-parte-depoimento">
                        <img class="icone-aspas" src="imgs/quote-left-solid.svg" alt="">
                        <p class="card-paragrafo-depoimento">{{ textoCardDepoimentoCliente }}</p>
                        <img class="icone-aspas" src="imgs/quote-right-solid.svg" alt="">
                      </div>

                      <div class="card-parte-cliente">
                        <img class="img-cliente" src="imgs/3.jpg" alt="">
                        <div class="info-cliente">
                          <p class="info-nome-cliente">{{ nomeCliente3 }}</p>
                          <p class="info-cargo-cliente">{{ cargoCliente3 }}</p>
                        </div>
                      </div>

                    </div>

                    <div class="card-depoimento">

                      <div class="card-parte-depoimento">
                        <img class="icone-aspas" src="imgs/quote-left-solid.svg" alt="">
                        <p class="card-paragrafo-depoimento">{{ textoCardDepoimentoCliente }}</p>
                        <img class="icone-aspas" src="imgs/quote-right-solid.svg" alt="">
                      </div>

                      <div class="card-parte-cliente">
                        <img class="img-cliente" src="imgs/1.jpg" alt="">
                        <div class="info-cliente">
                          <p class="info-nome-cliente">{{ nomeCliente1 }}</p>
                          <p class="info-cargo-cliente">{{ cargoCliente1 }}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </article>

        <!-- FORMULARIO E CONTATO -->
        <section class="section-formulario-e-info-contato">
          <!-- FORMULÁRIO -->
          <div class="div-formulario">
            <h2 class="titulo-div-formulario">
              {{ tituloFormularioParte1 }}
              <span class="destaque-negrito">{{ tituloFormularioParte2 }}</span>
            </h2>

            <form class="formulario" action="#" method="#">
              <div class="grupo-input">
                <input class="grupo-input_campo-nome" type="text" placeholder="Entre com seu nome">

                <input class="grupo-input_campo-email" type="e-mail" placeholder="Entre com seu e-mail">
              </div>

              <input class="formulario-campo-assunto" type="text" maxlength="55" placeholder="Entre com o assunto">

              <textarea class="formulario-campo-mensagem" placeholder="Entre com a mensagem" rows="10" maxlength="570"></textarea>
              
            </form>

            <button class="formulario-botao" type="submit">{{ textoBotaoForm }}</button>
          </div>

          <!-- INFORMAÇÕES FALE CONOSCO -->
          <div class="div-fale-conosco">
            <h2 class="titulo-div-fale-conosco">
              {{ tituloFaleConoscoParte1 }}
              <span class="destaque-negrito">{{ tituloFaleConoscoParte2 }}</span>
            </h2>

            <p class="texto-div-fale-conosco">
              <img class="icone-contato" src="imgs/phone-solid.svg" alt="">
              {{ numeroTelefone }}
            </p>

            <p class="texto-div-fale-conosco">
              <img class="icone-contato" src="imgs/mobile-alt-solid.svg" alt="">
              {{ numeroCelular }}
            </p>

            <p class="texto-div-fale-conosco">
              <img class="icone-contato" src="imgs/map-marker-alt-solid.svg" alt="">
              <span class="destaque-negrito">{{ enderecoContatoParte1 }}</span>
              {{ enderecoContatoParte2 }}
              <span class="destaque-negrito">{{ enderecoContatoParte3 }}</span>
              {{ enderecoContatoParte4 }}
              <span class="destaque-negrito">{{ enderecoContatoParte5 }}</span>
            </p>

            <p class="texto-div-fale-conosco">
              <img class="icone-contato" src="imgs/envelope-regular.svg" alt="">
              {{ contatoEmailParte1 }}
              <span class="destaque-negrito detalhe-espacamento">{{ contatoEmailParte2 }}</span>
            </p>

            <div class="div-icones-redes-sociais">
              <a href="#">
                <img class="icone-contato" src="imgs/facebook-f-brands.svg" alt="ícone de um f, representando a logo do facebook">
              </a>

              <a href="#">
                <img class="icone-contato" src="imgs/instagram-brands.svg" alt="ícone de uma câmera fotográfica de frente, representando a logo do instagram">
              </a>

              <a href="#">
                <img class="icone-contato" src="imgs/whatsapp-brands.svg" alt="ícone de um telefone dentro de um balão de fala redondo, representado a logo do whatsapp">
              </a>
            </div>
            
          </div>
        </section>

        <!-- ULTIMOS PROJETOS -->
        <article class="article-ultimos-projetos">
          <h2 class="titulo-article-ultimos-projetos">
            {{ tituloUltimosProjetosParte1 }}
            <span class="destaque-negrito">{{ tituloUltimosProjetosParte2 }}</span>
          </h2>

          <!-- CARDS ULTIMOS PROJETOS -->
          <div class="div-linha1-cards-ultimos-projetos">
            <div class="card-ultimos-projetos img-hover-zoom">
              <img class="img-card-ultimos-projetos" src="imgs/architecture-768432_1280.jpg" alt="">
              <div class="texto-card-ultimos-projetos">
                <p class="titulo-card-ultimos-projetos">{{ tituloManutencaoEletrica }}</p>
                <p class="descricao-card-ultimos-projetos">{{ textoParagrafoCard_ultimosProjetos }}</p>
                <p class="paragrafo-leia-mais_card-ultimos-projetos"><a href="#" class="ancora-card-ultimos-projetos">{{ tituloLeiaMais }}</a></p> <!-- paragrafo-leia-mais_card-ultimos-projetos-- -->
              </div>
            </div>

            <div class="card-ultimos-projetos img-hover-zoom">
              <img class="img-card-ultimos-projetos" src="imgs/factory-1880261_1280.jpg" alt="">
              <div class="texto-card-ultimos-projetos">
                <p class="titulo-card-ultimos-projetos">{{ tituloManutencaoPedrial }}</p>
                <p class="descricao-card-ultimos-projetos">{{ textoParagrafoCard_ultimosProjetos }}</p>
                <p class="paragrafo-leia-mais_card-ultimos-projetos"><a href="#" class="ancora-card-ultimos-projetos">{{ tituloLeiaMais }}</a></p>
              </div>
            </div>

            <div class="card-ultimos-projetos img-hover-zoom">
              <img class="img-card-ultimos-projetos" src="imgs/hall-1929422_1280.jpg" alt="">
              <div class="texto-card-ultimos-projetos">
                <p class="titulo-card-ultimos-projetos">{{ tituloPinturaPedrial }}</p>
                <p class="descricao-card-ultimos-projetos">{{ textoParagrafoCard_ultimosProjetos }}</p>
                <p class="paragrafo-leia-mais_card-ultimos-projetos"><a href="#" class="ancora-card-ultimos-projetos">{{ tituloLeiaMais }}</a></p>
              </div>
            </div>
          </div>

          <div class="div-linha2-cards-ultimos-projetos">
            <div class="card-ultimos-projetos img-hover-zoom">
              <img class="img-card-ultimos-projetos" src="imgs/lost-places-3035877_1280.jpg" alt="">
              <div class="texto-card-ultimos-projetos">
                <p class="titulo-card-ultimos-projetos">{{ tituloReformaPedreiroAlvenaria }}</p>
                <p class="descricao-card-ultimos-projetos">{{ textoParagrafoCard_ultimosProjetos }}</p>
                <p class="paragrafo-leia-mais_card-ultimos-projetos"><a href="#" class="ancora-card-ultimos-projetos">{{ tituloLeiaMais }}</a></p>
              </div>
            </div>

            <div class="card-ultimos-projetos img-hover-zoom">
              <img class="img-card-ultimos-projetos" src="imgs/dilapidated-983952_1280.jpg" alt="">
              <div class="texto-card-ultimos-projetos">
                <p class="titulo-card-ultimos-projetos">{{ tituloManutencaoPredial }}</p>
                <p class="descricao-card-ultimos-projetos">{{ textoParagrafoCard_ultimosProjetos }}</p>
                <p class="paragrafo-leia-mais_card-ultimos-projetos"><a href="#" class="ancora-card-ultimos-projetos">{{ tituloLeiaMais }}</a></p>
              </div>
            </div>

            <div class="card-ultimos-projetos img-hover-zoom">
              <img class="img-card-ultimos-projetos" src="imgs/architecture-768432_1280.jpg" alt="">
              <div class="texto-card-ultimos-projetos">
                <p class="titulo-card-ultimos-projetos">{{ tituloReformaManutencao }}</p>
                <p class="descricao-card-ultimos-projetos">{{ textoParagrafoCard_ultimosProjetos }}</p>
                <p class="paragrafo-leia-mais_card-ultimos-projetos"><a href="#" class="ancora-card-ultimos-projetos">{{ tituloLeiaMais }}<a></p>
              </div>
            </div>
          </div>

        </article>

        <!-- FOOTER -->
        <footer class="rodape">

          <div class="rodape-informacoes-contato">

            <div class="rodape-entre-em-contato">
              <h5 class="titulo-rodape-entre-em-contato">
                {{ tituloEntreEmContatoParte1 }}
                <span class="destaque-negrito">{{ tituloEntreEmContatoParte2 }}</span>
              </h5>

              <p class="paragrafo-entre-em-contato">
                <img class="icone-contato" src="imgs/map-marker-alt-solid.svg" alt="">
                {{ textoHorarioFuncionamento }}
              </p>

              <p class="paragrafo-entre-em-contato">
                <img class="icone-contato" src="imgs/envelope-regular.svg" alt="">
                {{ textoEmail }}
              </p>

              <p class="paragrafo-entre-em-contato">
                <img class="icone-contato" src="imgs/mobile-alt-solid.svg" alt="">
                {{ numeroCelular }}
              </p>
            </div>

            <div class="rodape-midias-sociais">
              <h5 class="titulo-rodape-midias-sociais">
                {{ tituloMidiasSociaisParte1 }}
                <span class="destaque-negrito">{{ tituloMidiasSociaisParte2 }}</span>
              </h5>

              <p class="paragrafo-rodape-redes-sociais">
                {{ textoParagrafoMidiasSociaisParte1 }}
                <strong>{{ textoParagrafoMidiasSociaisParte2 }}</strong>
              </p>

              <div class="div-icones-redes-sociais">
                <a href="#">
                  <img class="icone-contato" src="imgs/facebook-f-brands.svg" alt="ícone de um f, representando a logo do facebook">
                </a>

                <a href="#">
                  <img class="icone-contato" src="imgs/instagram-brands.svg" alt="ícone de uma câmera fotográfica de frente, representando a logo do instagram">
                </a>

                <a href="#">
                  <img class="icone-contato" src="imgs/whatsapp-brands.svg" alt="ícone de um telefone dentro de um balão de fala redondo, representado a logo do whatsapp">
                </a>
              </div>

            </div>
          </div>

          <div class="div-rodape-copyright">
            <p class="texto-rodape-copyright">
              {{ textoRodapeCopyrightParte1 }}
              <strong>{{ textoRodapeCopyrightParte2 }}</strong>
            </p>
          </div>

        </footer>

      </main>
      
    </div>

  </div>
  `
});