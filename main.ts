scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.smiles)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -150
    }
})
let cat: Sprite = null
game.splash("WELCOME TO PLATFORM RUNNER", "MAKE THE CAT ESCAPE FROM LAVA")
music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000040a0030003400051e2225292c05001c000f0a006400f4010a00000400000000000000000000000000000000021e0000000400051e2225292c10001400051e2225292c20002400051e2225292c06001c00010a006400f4016400000400000000000000000000000000000000021e0008000c00051e2225292c18001c00051e2225292c28002c00051e2225292c`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(9)
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
controller.moveSprite(cat, 100, 0)
tiles.setCurrentTilemap(tilemap`level0`)
cat.ay = 200
scene.cameraFollowSprite(cat)
