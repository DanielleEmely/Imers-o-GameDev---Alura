class Jogo{
  constructor(){
    this.indice = 0;
    this.mapa = fita.mapa;
   
  }
  setup(){
    //cenario = new Cenario(imagemCenario, 3);
    
    //parallax
    cenarioPiso = new Cenario(imagemPiso, 4);
    cenarioNuvens = new Cenario(imagemNuvens, 2);
    cenarioFloresta = new Cenario(imagemFloresta, 2);
    cenarioMontanha = new Cenario(imagemMontanha, 1);
    cenarioArvores = new Cenario(imagemArvores, 3);
    cenarioCeu = new Cenario(imagemCeu, 3);
    cenarioGrama = new Cenario(imagemGrama, 3);
    
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem,             imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
    
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    
    
  }
  keyPressed(key){
    if(key == 'ArrowUp'){
      personagem.pula();
      somDoPulo.play();
    }
  }
  
  draw(){
  //cenario.exibe();
  //cenario.move();
  cenarioCeu.exibe();
  //cenarioCeu.move();
  cenarioNuvens.exibe();
  cenarioNuvens.move();
  cenarioMontanha.exibe();
  cenarioMontanha.move();
  cenarioFloresta.exibe();
  cenarioFloresta.move();
  cenarioGrama.exibe();
  cenarioArvores.exibe();
  cenarioArvores.move();
  cenarioGrama.move();
  cenarioPiso.exibe();
  cenarioPiso.move();
  vida.draw();
  pontuacao.exibe();
  pontuacao.adicionarPonto();
  personagem.exibe();
  personagem.aplicaGravidade();
  // a partir do array de inimigos, saber qual inimigo aparece   na tela
  const linhaAtual = this.mapa[this.indice];
  const inimigo = inimigos[linhaAtual.inimigo];
  // retorna verdadeiro ou falso para saber se a posição do       inimigo é menor que o negativo da largura, ver se já passou     inteiro
  const inimigoVisivel = inimigo.x < - inimigo.largura;
  
  inimigo.velocidade = linhaAtual.velocidade;
    
  inimigo.exibe();
  inimigo.move();
  
  if(inimigoVisivel){
    this.indice++;
    inimigo.aparece();
    if(this.indice > this.mapa.length - 1){
      this.indice = 0;
    }
  }
  
    if(personagem.estaColidindo(inimigo)){
      vida.perdeVida();
      personagem.tornarInvencivel();
      if(vida.vidas == 0){
        image(imagemGameOver, width / 2 - 200, height / 3);
        somGameOver.play();
        noLoop();
      }
    }
  
  }
}
