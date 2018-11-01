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

function preload(){
    this.load.image('Chest', 'assets/images/Chest.png');
    this.load.image('Book1','assets/images/objects/book1.png');
}

function create(){

    var chest = this.add.image(600,400,'Chest');
    chest.scaleX = 0.5;
    chest.scaleY = 0.5;

    var book1 = this.add.image(1000,500,'Book1').setInteractive();
    book1.scaleY = 0.5;
    book1.scaleX = 0.5;


    //  A drop zone
    var zone = this.add.zone(500, 300, 300, 300).setRectangleDropZone(300, 300);

    //  Just a visual display of the drop zone
    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    this.input.setDraggable(book1);

    this.input.on('drop',function(pointer,gameObject , zone){
    	graphics.clear();
    	graphics.lineStyle(2,0xaaaa00);
    	zone.scaleX = 0
		zone.scaleY = 0
    	graphics.strokeRect(zone.x - zone.input.hitArea.width/2,zone.y - zone.input.hitArea.height/2,zone.input.hitArea.width,zone.input.hitArea.height)
	});




    this.input.on('dragstart', function (pointer, gameObject) {

        gameObject.setTint(0xfff000);

    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragend', function (pointer, gameObject) {

        gameObject.clearTint();


    });

	function update(){

		zone.body.debugBodyColor  = zone.body.touching.none ? 0x00ffff : 0xffff00;
	}

}