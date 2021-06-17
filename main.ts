controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
})
scene.setBackgroundColor(0)
tiles.setTilemap(tilemap`level3`)
let mySprite = sprites.create(assets.image`princessFront2`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
	
})
