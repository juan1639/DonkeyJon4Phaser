export function loader(scene) {

  scene.load.image('fondo', './src/img/fondo_cielo101.png');
  scene.load.image('gameover', './src/img/gameover.png');
  scene.load.image('plataforma', './src/img/tile1.png');
  scene.load.image('plataformaIz', './src/img/tile2.png');
  scene.load.image('plataformaDe', './src/img/tile3.png');
  scene.load.spritesheet('jugador', './src/img/player_vector.svg', {frameWidth: 80, frameHeight: 110});
}
