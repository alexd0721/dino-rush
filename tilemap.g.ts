// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010202010101020201010101010101010b04010101010102010101010101010103030401010101010101010101040401040304070707070707070a0704040707040403030707070707070a0404040707050404030305050505050a040504040405040404030303030e030303050505050506060404040404040404040404040506040404080202020204040905050505060408080802020402040409050505050604050804040404020104030304040406040508080804040201040303040404060405080404040202040403030303030605050505040c06060405050505050506050404040404040404050505050505060501010101010101010d0502020202`, img`
. . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . 2 2 . 
2 . 2 . . . . . . . . . 2 2 . . 
2 2 . . . . . . . . . 2 2 2 . . 
. 2 2 . . . . . . . . 2 . 2 2 2 
. 2 2 2 . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 . . . . . 2 2 . . . . . 
. 2 . . . . . 2 . 2 2 . . . . . 
. 2 . . 2 2 2 2 . . 2 . . 2 2 2 
. 2 . . . . 2 2 . . 2 . . 2 2 2 
. 2 . . 2 2 2 . . 2 2 . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.swamp.swampTile3,sprites.dungeon.collectibleRedCrystal,sprites.builtin.forestTiles1,sprites.builtin.forestTiles7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
