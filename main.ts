sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . b b b . . . b b . . . . . 
        . . b 5 7 b . . b 5 b b . . . . 
        . b b 7 7 b . . b 7 7 b b . . . 
        b b 7 7 7 b b b b 7 7 7 7 b . . 
        b 7 6 6 7 7 b b 7 7 6 6 7 b . . 
        . b b b 6 7 7 7 7 6 b b b . . . 
        . . . . b b 7 7 b b . . . . . . 
        b b b b 7 7 7 7 7 7 b b b b . . 
        b 5 7 7 7 6 b b 6 7 7 7 5 b . . 
        b 7 7 7 6 b b 6 b 6 7 7 7 b . . 
        b b 7 7 b . b 6 b b 6 7 b b . . 
        . b b 6 b . b 6 . b b 6 b . . . 
        . . b b . . b b 6 . b b . . . . 
        . . . . . . . b 7 6 . . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
