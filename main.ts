controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
})
scene.setBackgroundColor(5)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`heroWalkFront1`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
	
})
