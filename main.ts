scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite2, location2) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.smiles)
})
let cat: Sprite = null
game.splash("WELCOME TO PLATFORM RUNNER", "MAKE THE CAT ESCAPE FROM LAVA")
scene.setBackgroundColor(9)
music.play(music.createSong(hex`0078000408010205001c000f0a006400f4010a00000400000000000000000000000000000000021c0008000c00091e2022242527292a2c18001c00091e2022242527292a2c06001c00010a006400f4016400000400000000000000000000000000000000021c0000000400091e2022242527292a2c10001400091e2022242527292a2c`), music.PlaybackMode.LoopingInBackground)
cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . . . . f f f f f f f f . . . 
    . . . . . f f f f f f f f . . . 
    . . . . . f . . . . f . f . . . 
    . . . . . f . . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(cat)
controller.moveSprite(cat, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
cat.ay = 200
