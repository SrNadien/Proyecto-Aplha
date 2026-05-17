
//priotity 99
ServerEvents.recipes(nadien => {
//   nadien.remove({id: 'angelring:diamond_ring'})
//   nadien.shaped('angelring:diamond_ring', [
//      'DND',
//      'VEU',
//      'DAD'
//    ], {
//      D: '#c:storage_blocks/diamond',
//      N:'allthemodium:unobtainium_ingot',
//      V:'allthemodium:unobtainium_ingot',
//      U:'allthemodium:unobtainium_ingot',
//      A:'allthemodium:unobtainium_ingot',
//      E: 'minecraft:elytra'
//    }).id('nadien_tweaks:diamondring')
  nadien.remove({id: 'ultimateangelring:angel_ring'})
 nadien.recipes.extendedcrafting.shaped_table('ultimateangelring:angel_ring', [
        " ANA ",
        "A B A",
        "AC CA",
        "A B A",
        " AAA "
    ], {
        A: 'allthemodium:unobtainium_ingot',
        B: 'allthemodium:vibranium_ingot',
        C: 'mekanism:jetpack',
        N: 'minecraft:elytra'
    }).id('nadien_tweaks:angelring')
  })