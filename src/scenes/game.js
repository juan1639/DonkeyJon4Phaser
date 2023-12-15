// =========================================================================================
//  D O N K E Y - J O N  4
// 
// -----------------------------------------------------------------------------------------
import { loader } from './loader.js';
import { Plataforma } from '../components/plataforma.js';
import { Jugador } from './../components/jugador.js';

const WIDTH = 800;
const HEIGHT = 550;

const WORLD_BOUNDS_X = WIDTH * 4;
const WORLD_BOUNDS_Y = HEIGHT * 2;

// --------------------------------------------------------------
export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.plataforma = new Plataforma(this);
    this.jugador = new Jugador(this);
  }

  preload() {
    loader(this);
  }

  create() {

    for (let i = 0; i < Math.floor(WORLD_BOUNDS_X / WIDTH); i ++) {
      const num = i.toString();

      this.add.image(WIDTH / 2 + WIDTH * i, HEIGHT / 2, 'fondo' + num + num);
      this.add.image(WIDTH / 2 + WIDTH * i, HEIGHT / 2 + HEIGHT, 'fondo' + num);

      this.add.image(WIDTH / 2 + WIDTH * i, HEIGHT / 2 + Math.floor(HEIGHT * 1.26), 'layout' + num);
    }
    
    // this.gameoverImage = this.add.image(400, 90, 'gameover');
    // this.gameoverImage.visible = false;
    
    this.cameras.main.setBounds(0, 0, WORLD_BOUNDS_X, WORLD_BOUNDS_Y);
    this.physics.world.setBounds(0, 0, WORLD_BOUNDS_X, WORLD_BOUNDS_Y);

    this.plataforma.create();
    this.jugador.create();

    this.cameras.main.startFollow(this.jugador.get());
    // this.cameras.main.followOffset.set(0, 0);

    // this.physics.add.collider(this.jugador.get(), this.plataforma.get(), this.platformaImpacto, null, this);
    this.physics.add.collider(this.jugador.get(), this.plataforma.get());
  }

  // ================================================================
  update() {

    this.jugador.update();
  }

  // ================================================================
  

  // ----------------------------------------------------------------
  
}

