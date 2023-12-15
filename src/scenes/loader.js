export function loader(scene) {

  scene.load.image('fondo0', './src/img/fondo_cielo101.png');
  scene.load.image('fondo00', './src/img/fondo_cielo102.png');
  scene.load.image('fondo1', './src/img/fondo_cielo103.png');
  scene.load.image('fondo11', './src/img/fondo_cielo104.png');

  scene.load.image('fondo2', './src/img/fondo_cielo101.png');
  scene.load.image('fondo22', './src/img/fondo_cielo102.png');
  scene.load.image('fondo3', './src/img/fondo_cielo103.png');
  scene.load.image('fondo33', './src/img/fondo_cielo104.png');

  scene.load.image('layout0', './src/img/fondo_layout101.png');
  scene.load.image('layout1', './src/img/fondo_layout102.png');
  scene.load.image('layout2', './src/img/fondo_layout103.png');
  scene.load.image('layout3', './src/img/fondo_layout104.png');

  scene.load.image('gameover', './src/img/gameover.png');
  scene.load.image('plataforma', './src/img/tile1.png');
  scene.load.image('plataformaIz', './src/img/tile2.png');
  scene.load.image('plataformaDe', './src/img/tile3.png');
  scene.load.spritesheet('jugador', './src/img/player_vector.svg', {frameWidth: 80, frameHeight: 110});
}
