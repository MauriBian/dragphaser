var config = {
	type:Phaser.AUTO,
	width:1920,
	height:1080,
	physics: {
		default :'arcade',
		arcade : {
			gravity: {y : 200 }
		}
	},
	scene: [Chest, Objects ]
};

var game = new Phaser.Game(config);