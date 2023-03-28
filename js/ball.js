var config = {
    type: Phaser.AUTO,
    width: 300,
    height: 200,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{

    this.load.image('ball', 'assets/ball01.png');
}

function create ()
{
    
    var logo = this.physics.add.image(400, 100, 'ball');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

}