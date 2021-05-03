scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
    music.beamUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
game.showLongText("Hello player, your aim is to get the red pearl before the time runs out otherwise it will be the end of the world. Be careful, there are some monsters!", DialogLayout.Full)
info.startCountdown(90)
music.baDing.play()
let mySprite = sprites.create(assets.image`dino1`, SpriteKind.Player)
let enemy2 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
let enemy1 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile3)
tiles.placeOnRandomTile(enemy1, sprites.builtin.forestTiles7)
tiles.placeOnRandomTile(enemy2, sprites.builtin.forestTiles1)
controller.moveSprite(mySprite, 100, 100)
forever(function () {
    for (let index = 0; index < 10; index++) {
        enemy1.x += 5
        pause(100)
    }
    for (let index = 0; index < 10; index++) {
        enemy1.x += -5
        pause(100)
    }
})
forever(function () {
    for (let index = 0; index < 10; index++) {
        enemy2.vy += 5
        pause(100)
    }
    for (let index = 0; index < 10; index++) {
        enemy2.vy += -5
        pause(100)
    }
})
