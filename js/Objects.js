class Objects extends Phaser.Scene {
    constructor() {
        super({key: "Objects",active:true});

    }

    preload(){
        this.load.image('Book1','assets/images/objects/book1.png');
    }

    create(){
        this.image = this.add.image(1000,500,'Book1');
        this.image.scaleY = 0.5;
        this.image.scaleX = 0.5;


    }

    update(){

        this.input.on('pointerover',function(event){
            this.image.x = event.x
            this.image.y = event.y
        },this);
    }
}
