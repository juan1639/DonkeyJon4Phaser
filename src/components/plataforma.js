export class Plataforma {

    static sueloSize = 800 * 2;
    static tileXY = [64, 64];
    
    static array_plataformas = [
        [608, 150, 6, 0.7],
        [196, 270, 4, 0.7],
        [400, 530, Plataforma.sueloSize * 3, 0.7]
    ];

    // ------------------------------------------------------------
    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.plataforma = this.relatedScene.physics.add.staticGroup();

        for (let plataf of Plataforma.array_plataformas) {

            const x = plataf[0];
            const y = plataf[1];
            const ancho = plataf[2];
            const alto = plataf[3];

            this.plataforma.create(x, y, 'plataforma').setScale(ancho, alto).refreshBody();

            let calculo = x - (Plataforma.tileXY[0] * ancho) / 2;
            const xBordeIz = calculo - Plataforma.tileXY[0] / 2;
            this.plataforma.create(xBordeIz, y, 'plataformaIz').setScale(1, alto).refreshBody();
            
            calculo = x + (Plataforma.tileXY[0] * ancho) / 2;
            const xBordeDe = calculo + Plataforma.tileXY[0] / 2;
            this.plataforma.create(xBordeDe, y, 'plataformaDe').setScale(1, alto).refreshBody();
        }

        console.log(this.plataforma);
    }

    get() {
        return this.plataforma;
    }
}

