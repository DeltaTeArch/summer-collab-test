controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.siren.play()
})
scene.setBackgroundColor(5)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`heroWalkFront1`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`bigCake`, SpriteKind.Food)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    game.setDialogFrame(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `)
    game.showLongText("", DialogLayout.Bottom)
})
