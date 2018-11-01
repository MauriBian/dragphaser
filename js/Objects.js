class Objects extends Phaser.Scene {
    constructor() {
        super({key: "Objects",active:true});
       // var game = Phaser.Game(config)
    }

    preload(){
        this.load.image('Book1','assets/images/objects/book1.png');

    }

    create(){
        var canDrag = false;


        var image = this.add.image(1000,500,'Book1');
        image.scaleY = 0.5;
        image.scaleX = 0.5;

     /*   this.input.on('pointerdown', function (event) {
            canDrag = true;
        }, this);

        this.input.on('pointermove', function (event) {
            if (canDrag) {
                this.image.x = event.x;
                this.image.y = event.y;
            }
        }, this);

        this.input.on('pointerup', function (event) {
            canDrag = false;
        }, this);

    */


        this.input.setDraggable(image)
    }

    update() {



    }

}
