export class Plataforma {

    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {
        this.plataforma = this.relatedScene.physics.add.image(385, 430, 'plataforma').setImmovable().setScale(1);
    }

    get() {
        return this.plataforma;
      }
}

