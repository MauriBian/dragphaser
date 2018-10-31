class Chest extends Phaser.Scene {
    constructor() {
        super({key:"Chest",active: true});

    }

    preload() {
        this.load.image('Chest', 'assets/images/Chest.png');
    }

    create(){
        this.image = this.add.image(600,400,'Chest');
        this.image.scaleX = 0.5;
        this.image.scaleY = 0.5;
    }

}
