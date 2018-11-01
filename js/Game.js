

var config = {
    type:Phaser.AUTO,
    width:1920,
    height:1080,
    physics:{
        default: 'arcade',
        arcade:{
            debug: true,
            gravity:{y: 200}
        }

    },
    scene:{
        preload:preload,
        create: create
    }
};
var zone;
var game = new Phaser.Game(config);

class DrageableItem {
    constructor(go, posX, posY) {
        this.go = go.setInteractive();
        this.posX = posX;
        this.posY = posY;
    }
}

var listItems = []

function preload(){
    this.load.image('Chest', 'assets/images/Chest.png');
    this.load.image('Book1','assets/images/objects/book1.png');
    this.load.image('ChestArea','assets/Areas/ChestArea.png');
    this.load.image('Book2','assets/images/objects/book2.png');

}

function create(){

    var chest = this.add.image(600,400,'Chest');
    chest.scaleX = 1;
    chest.scaleY = 1;

    //  A drop zone

    var poly;
    poly = new Phaser.Geom.Polygon();

//  And then populate it via setTo, using any combination of values as above
    poly.setTo([ new Phaser.Geom.Point(580, 510), new Phaser.Geom.Point(800, 380), new Phaser.Geom.Point(640, 290), new Phaser.Geom.Point(425, 415)]);


    var zone = this.add.image(600,400,'ChestArea').setInteractive(poly,function (hitArea, x, y, gameObject){

    },true);
    zone.input.dropZone = true;


    var Book1= new DrageableItem(this.add.image(1000,500,'Book1'),1000,500)
    this.input.setDraggable(Book1.go);
    listItems.push(Book1);

    var graphics = this.add.graphics();

    graphics.lineStyle(5, 0xFF00FF, 1.0);
    graphics.fillStyle(0xBBBBFF, 0.5);

    graphics.fillPoints(poly.points,true);
    graphics.lineStyle(10, 0xBBBB00);


   // graphics.beginFill(0xFF33ff);
   // graphics.drawPolygon(poly.points);
    //graphics.endFill();
    //graphics.beginFill
    //graphics.lineStyle(2, 0xffff00);
    //graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    this.input.on('drop',function(pointer,gameObject , zone){

        gameObject.x = zone.x;
        gameObject.y = zone.y;
        console.log(zone);

        //zone.scaleX = 0
        //zone.scaleY = 0
    });




    this.input.on('dragstart', function (pointer, gameObject) {

        gameObject.setTint(0xfff000);

    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragend', function (pointer, gameObject,dropped) {

        if (!dropped){
            var temp = searchXY(gameObject);
            //console.log(temp);
            gameObject.x = temp.posX;
            gameObject.y = temp.posY;
        }

    });

    function update(){

        zone.body.debugBodyColor  = zone.body.touching.none ? 0x00ffff : 0xffff00;
    }

    function searchXY (item){


        for ( i = 0 ; i < listItems.length; i++) {
            console.log(listItems[i].go);
            if (listItems[i].go == item){
                return listItems[i];
            }
        }
    }
}



