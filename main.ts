controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(you, 130, 130)
})
function monster_chance () {
    if (randint(0, 50) == 1) {
        idfk = sprites.create(img`
            . . . . f f f . . . . . 
            . . . f f f f f . . . . 
            . . . f f f f f f . . . 
            . . . . f f f f f . . . 
            . . . f . f . . . . . . 
            . . . . f f . . . . . . 
            . . . f f f f f f . . . 
            . . . . f f f . f f . . 
            . . . f f . f . . f . . 
            . . . f . f f . f f f . 
            . . f f . . f f . . f . 
            . . f . . . f . . . f . 
            . f f . . . f . . . f f 
            . f . . . . f . . . . f 
            f f . . f f f f . . . f 
            . . . . f . . . f . . . 
            . . . f f . . . f . . . 
            . . . f . . . . f . . . 
            . . . f . . . . f f . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(idfk, assets.tile`myTile37`)
        idfk.setStayInScreen(true)
        idfk.follow(you, 130)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    glitch.destroy()
    if (randint(0, 100) == 1) {
        tiles.setCurrentTilemap(tilemap`level 1-1`)
    } else if (randint(0, 100) == 2) {
        tiles.setCurrentTilemap(tilemap`level 1-2`)
    } else if (randint(0, 100) == 3) {
        tiles.setCurrentTilemap(tilemap`level 1-3`)
    } else if (randint(0, 100) == 4) {
        tiles.setCurrentTilemap(tilemap`level 1-4`)
    } else if (randint(0, 100) == 5) {
        tiles.setCurrentTilemap(tilemap`level 1-5`)
    } else if (randint(0, 100) == 6) {
        tiles.setCurrentTilemap(tilemap`level 1-6`)
    } else if (randint(0, 100) == 7) {
        tiles.setCurrentTilemap(tilemap`level 1-7`)
    } else if (randint(0, 100) == 8) {
        tiles.setCurrentTilemap(tilemap`level 1-8`)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
    monster_chance()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    glitch = sprites.create(img`
        . 4 4 4 . . . . . . . . . . . . 
        . 4 . 4 4 4 1 1 . . . . . . . . 
        . 4 d 1 1 1 1 1 . . . . . . . . 
        . 4 1 1 1 1 1 . . . . . . . . . 
        . 4 1 1 d 1 1 . . . . . . . . . 
        . . d d d 1 . . . . 4 4 1 1 . . 
        . . d 1 1 . . . 1 1 1 4 4 1 1 . 
        . . . . . 1 1 1 1 1 1 1 4 1 1 1 
        . . . . . 1 1 1 d d 1 1 4 4 1 1 
        . . . . . . 4 1 d d d 1 1 1 . . 
        . 1 1 1 1 . 4 d d d d 1 1 1 . . 
        . 1 1 1 d 4 4 d . . . . . . . . 
        . 1 1 1 d 4 1 1 . . . . . . . . 
        . . 1 1 d 4 1 1 . . . . . . . . 
        . . . 1 1 1 1 d . . . . . . . . 
        . . . . 1 1 d d . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(glitch, tiles.getTileLocation(4, 1))
    tiles.placeOnTile(you, tiles.getTileLocation(4, 9))
    animation.runImageAnimation(
    glitch,
    [img`
        . 4 4 4 . . . . . . . . . . . . 
        . 4 . 4 4 4 1 1 . . . . . . . . 
        . 4 d 1 1 1 1 1 . . . . . . . . 
        . 4 1 1 1 1 1 . . . . . . . . . 
        . 4 1 1 d 1 1 . . . . . . . . . 
        . . d d d 1 . . . . 4 4 1 1 . . 
        . . d 1 1 . . . 1 1 1 4 4 1 1 . 
        . . . . . 1 1 1 1 1 1 1 4 1 1 1 
        . . . . . 1 1 1 d d 1 1 4 4 1 1 
        . . . . . . 4 1 d d d 1 1 1 . . 
        . 1 1 1 1 . 4 d d d d 1 1 1 . . 
        . 1 1 1 d 4 4 d . . . . . . . . 
        . 1 1 1 d 4 1 1 . . . . . . . . 
        . . 1 1 d 4 1 1 . . . . . . . . 
        . . . 1 1 1 1 d . . . . . . . . 
        . . . . 1 1 d d . . . . . . . . 
        `,img`
        . 4 4 4 . . . . 4 1 1 1 1 1 . . 
        . . . . . 4 1 1 4 1 d d 1 1 . . 
        . . . . . 4 4 4 4 d d d 1 1 . . 
        . . . . . 1 1 4 4 d d 1 1 1 . . 
        . . . . . . . 1 1 1 1 1 1 1 . . 
        1 1 1 d d 1 1 1 4 4 1 1 1 . . . 
        1 1 1 d d 1 1 1 1 1 d d 1 . . . 
        4 1 1 d d 1 1 1 1 1 1 d 1 . . . 
        4 . 1 1 1 1 d 1 d d d 1 1 1 . . 
        4 1 1 1 1 1 1 1 d d d 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 d 1 1 1 . . 
        . . . . . . . . 1 1 4 1 4 4 . . 
        . . . . . . . . 1 1 4 1 1 1 . . 
        . . . . . . . . d d 4 1 1 1 . . 
        . . . . . . . . d d d 1 . . . . 
        . . . . 1 1 d d d 1 1 . . . . . 
        `,img`
        . 4 4 4 . . . . . . . 1 1 1 1 1 
        . . . . . . . 1 . . . 1 1 1 1 1 
        . . . . . . . 4 1 1 . 1 d d 1 1 
        . . . . . . . 4 4 1 1 1 d d 1 1 
        . . . . . . . 1 4 1 1 1 . . . . 
        . . . . . . . 1 4 4 1 1 1 . . . 
        . 4 d d d 1 1 1 1 1 4 d 4 4 4 1 
        4 4 d d 1 1 1 1 1 1 4 1 1 1 4 4 
        4 1 1 1 1 1 1 1 d d 4 1 1 1 1 1 
        4 1 1 . . . . . . d 4 1 1 1 1 1 
        . 1 1 . . . . . . 1 4 1 d d 1 1 
        . 1 1 . . . . . . 1 1 1 1 1 . . 
        . 1 1 . . . . . . 1 1 1 1 . . . 
        . . 1 1 d d 1 1 d d d 1 1 . . . 
        . . . 1 1 1 1 d d d d 1 . . . . 
        . . . . 1 1 d d d 1 1 . . . . . 
        `],
    200,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(you, 70, 70)
})
let glitch: Sprite = null
let idfk: Sprite = null
let you: Sprite = null
you = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f f f f c f f f . 
    f f f f f f c c f f f c 
    f f f c f f f f f f f c 
    c c c f f f e e f f c c 
    f f f f f e e f f c c f 
    f f f b f e e f b f f f 
    . f 4 1 f 4 4 f 1 4 f . 
    . f e 4 4 4 4 4 4 e f . 
    . f f f e e e e f f f . 
    f e f b 7 7 7 7 b f e f 
    e 4 f 7 7 7 7 7 7 f 4 e 
    e e f 6 6 6 6 6 6 f e e 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(you, 70, 70)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(you)
