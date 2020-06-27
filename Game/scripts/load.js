function preload(){
    imagemCenario = loadImage('imagens/cenario/floresta2.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/PersonagemCorrendo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');      
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemTelaInicial = loadImage('imagens/assets/telaInicial2.png');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    imagemVida = loadImage('imagens/assets/coracao.png');
  fita = loadJSON('fita/fita.json');
  
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somGameOver = loadSound('sons/game-over.mp3');
  
  
  // parallax
  
    imagemPiso = loadImage('imagens/cenario/pisoFloresta.png');
    imagemNuvens = loadImage('imagens/cenario/nuvens.png');
    imagemFloresta = loadImage('imagens/cenario/floresta3.png');
    imagemMontanha = loadImage('imagens/cenario/montanhas.png');
    imagemArvores = loadImage('imagens/cenario/arvoreFloresta.png');
    imagemCeu = loadImage('imagens/cenario/ceu.png');
    imagemGrama = loadImage('imagens/cenario/gramaFloresta.png');

 
}