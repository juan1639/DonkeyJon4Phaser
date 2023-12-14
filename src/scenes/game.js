// =========================================================================================
//  D O N K E Y - J O N  4
// -----------------------------------------------------------------------------------------
import { Plataforma } from '../components/plataforma.js';
import { loader } from './loader.js';

const WIDTH = 800;
const HEIGHT = 550;

export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.plataforma = new Plataforma(this);
  }

  preload() {
    loader(this);
  }

  create() {

    this.add.image(WIDTH / 2, HEIGHT / 2, 'fondo');
    // this.gameoverImage = this.add.image(400, 90, 'gameover');
    // this.gameoverImage.visible = false;
    
    // this.cameras.main.setBounds(0, 0, 800 * 2, 550);
    // this.physics.world.setBounds(0, 0, 800 * 2, 550);

    this.plataforma.create();

    this.controles = this.input.keyboard.createCursorKeys();

    // this.cameras.main.startFollow(jugador);
    // this.cameras.main.followOffset.set(-200, 0);

    // this.physics.add.collider(this.jugador, this.plataforma.get(), this.platformaImpacto, null, this);
  }

  // ================================================================
  update() {

    // leer_teclado();
  }

  // ================================================================
  crea_jugador(esto) {

    jugador = esto.physics.add.sprite(config.jugador.xIni, config.jugador.yIni, 'jugador');
    jugador.setCollideWorldBounds(true);
    jugador.setBounce(0.2);
    jugador.body.setGravityY(300);

    esto.anims.create({
        key: 'left',
        frames: esto.anims.generateFrameNumbers('jugador', {start: 9, end: 10}),
        frameRate: 10,
        repeat: -1
    });

    esto.anims.create({
        key: 'right',
        frames: esto.anims.generateFrameNumbers('jugador', {start: 9, end: 10}),
        frameRate: 10,
        repeat: -1
    });

    esto.anims.create({
        key: 'turn',
        frames: [{key: 'jugador', frame: 0}],
        frameRate: 20,
    });
  }

  // ----------------------------------------------------------------
  crea_plataformas() {

    const sueloSize = dimensiones.columnas + 1;

    const array_plataformas = [
        [608, 150, 6, 0.7],
        [128, 270, 4, 0.7],
        [400, 530, sueloSize * 3, 0.7]
    ];

    for (let plataf of array_plataformas) {
        const x = plataf[0];
        const y = plataf[1];
        const ancho = plataf[2];
        const alto = plataf[3];

        plataforma.create(x, y, 'plataforma').setScale(ancho, alto).refreshBody();
    }
  }

  // ================================================================
  leer_teclado() {
    
    if (controles.left.isDown) {
        jugador.setFlipX(true);
        jugador.setVelocityX(-160);
        jugador.anims.play('left', true);
        
    } else if (controles.right.isDown) {
        jugador.setFlipX(false);
        jugador.setVelocityX(160);
        jugador.anims.play('right', true);
        
    } else {
        jugador.setVelocityX(0);
        jugador.anims.play('turn');
    }
    
    if (controles.up.isDown && jugador.body.touching.down) {
        jugador.setVelocityY(-500);
    }
  }
}

