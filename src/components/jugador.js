export class Jugador {

    static XY_INI = [100, 100];
    static gravedadY = 700;
    static velX = 160;
    static velSalto = 700;

    // ------------------------------------------------------------
    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.jugador = this.relatedScene.physics.add.sprite(Jugador.XY_INI[0], Jugador.XY_INI[1], 'jugador');

        this.jugador.setCollideWorldBounds(true);
        this.jugador.setBounce(0.2);
        this.jugador.body.setGravityY(Jugador.gravedadY);

        this.relatedScene.anims.create({
            key: 'left',
            frames: this.relatedScene.anims.generateFrameNumbers('jugador', {start: 9, end: 10}),
            frameRate: 10,
            repeat: -1
        });
    
        this.relatedScene.anims.create({
            key: 'right',
            frames: this.relatedScene.anims.generateFrameNumbers('jugador', {start: 9, end: 10}),
            frameRate: 10,
            repeat: -1
        });
    
        this.relatedScene.anims.create({
            key: 'turn',
            frames: [{key: 'jugador', frame: 0}],
            frameRate: 20,
        });

        this.controles = this.relatedScene.input.keyboard.createCursorKeys();

        console.log(this.jugador);
    }

    update() {

        if (this.controles.left.isDown) {
            this.jugador.setFlipX(true);
            this.jugador.setVelocityX(-Jugador.velX);
            this.jugador.anims.play('left', true);
            
        } else if (this.controles.right.isDown) {
            this.jugador.setFlipX(false);
            this.jugador.setVelocityX(Jugador.velX);
            this.jugador.anims.play('right', true);
            
        } else {
            this.jugador.setVelocityX(0);
            this.jugador.anims.play('turn');
        }
        
        if (this.controles.up.isDown && this.jugador.body.touching.down) {
            this.jugador.setVelocityY(-Jugador.velSalto);
        }
    }

    get() {
        return this.jugador;
    }
}

