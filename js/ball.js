// mods by Patrick OReilly 
// Twitter: @pato_reilly Web: http://patricko.byethost9.com

var game = new Phaser.Game(200, 200, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('ball', '../assets/ball01.png');
    console.log('loaded')
}

var image;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    image = game.add.sprite(0, 0, 'ball');

    game.physics.enable(image, Phaser.Physics.ARCADE);
    
    //  This gets it moving
    image.body.velocity.setTo(200,200);
    
    //  This makes the game world bounce-able
    image.body.collideWorldBounds = true;
    
    //  This sets the image bounce energy for the horizontal 
    //  and vertical vectors. "1" is 100% energy return
    image.body.bounce.set(1);

}

function update () {

    //nothing required here
    
}

function render () {

    //debug helper
    game.debug.spriteInfo(image,32,32);

}