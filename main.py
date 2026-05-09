def on_overlap_tile(sprite, location):
    game.game_over(False)
    game.set_game_over_effect(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
        """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    game.game_over(True)
    game.set_game_over_effect(True, effects.smiles)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile2)

def on_a_pressed():
    if cat.vy == 0:
        cat.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile3(sprite3, location3):
    game.splash("WOW !")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
        """),
    on_overlap_tile3)

cat: Sprite = None
game.splash("WELCOME TO PLATFORM RUNNER",
    "MAKE THE CAT ESCAPE FROM LAVA")
music.play(music.create_song(hex("""
        0078000408020300001c00010a006400f4016400000400000000000000000000000000050000040a0030003400051e2225292c05001c000f0a006400f4010a00000400000000000000000000000000000000021e0000000400051e2225292c10001400051e2225292c20002400051e2225292c06001c00010a006400f4016400000400000000000000000000000000000000021e0008000c00051e2225292c18001c00051e2225292c28002c00051e2225292c
        """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
scene.set_background_color(9)
cat = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(cat, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1
    """))
cat.ay = 200
scene.camera_follow_sprite(cat)