namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile0, function (sprite, location) {
    game.over(false)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tiles.createTilemap(
            hex`14000800080909090909090909090909090909090909090a040f0f0f0f0f0f100f0f0f0f0f0f0f0f0f0f0f070b1010101010101010101010101010101010100c10101010101010101010101010101011101010101010101010101010101210101010101010101010101010111111101010101010111111101011101010101010101010101010101010101010101010100e0909090909090909090909090909090909090a`,
            img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 . . . . . . . . . . . . . . . . . . 2
                . . . . . . . . . . . . . . . 2 . . . .
                . . . . . . . . . 2 . . . . . . . . . .
                . . . 2 2 2 . . . . . . 2 2 2 . . 2 . .
                . . . . . . . . . . . . . . . . . . . .
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles7,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles14,sprites.builtin.forestTiles16,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.builtin.forestTiles12,sprites.builtin.forestTiles8,sprites.builtin.forestTiles17,sprites.builtin.forestTiles18],
            TileScale.Sixteen
        ))
