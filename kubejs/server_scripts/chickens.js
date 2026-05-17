ServerEvents.recipes(nadien => {

//removals unnused
nadien.remove({output: ['chickens:henhouse', 'chickens:henhouse_spruce', 'chickens:henhouse_birch', 'chickens:henhouse_jungle', 'chickens:henhouse_acacia', 'chickens:henhouse_dark_oak']})


//roost
 nadien.remove({output: 'chickens:roost' })
    nadien.shaped('chickens:roost', [
      'ADA',
      'BFC',
      'AEA'
    ], {
      A: 'minecraft:torchflower_seeds',
      B: 'smallprogressions:steel_hoe',
      C: 'ultimatefoods:nadienite_hoe[enchantments={levels:{"minecraft:efficiency":10,"minecraft:fortune":10}}]',
      D: 'ultimatefoods:patricio',
      E: 'ultimatefoods:bob_esponja',
      F:'allthecompressed:hay_block_1x',
    }).id('nadien_tweaks:roost')

//collector
 nadien.remove({output: 'chickens:collector' })
    nadien.shaped('chickens:collector', [
      'ADA',
      'BFC',
      'AEA'
    ], {
      A: 'occultism:otherplanks',
      B: 'ultimatefoods:patricio',
      C: 'ultimatefoods:bob_esponja',
      D: 'chickens:roost',
      E: 'sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="cherry"]',
      F: 'utilitarian:fluid_hopper'
    }).id('nadien_tweaks:collector')

//collector
 nadien.remove({output: 'chickens:breeder' })
    nadien.shaped('chickens:breeder', [
      'GDG',
      'BFC',
      'AAA'
    ], {
      A: 'minecraft:torchflower_seeds',
      B: 'ultimatefoods:patricio',
      C: 'ultimatefoods:bob_esponja',
      D: 'farmingforblockheads:chicken_nest',
      F: 'actuallyadditions:ender_casing',
      G: 'kubejs:double_compressed_octadic_capacitor'
    }).id('nadien_tweaks:breeder')

//collector
 nadien.remove({output: 'chickens:catcher' })
    nadien.shaped('chickens:catcher', [
      ' A ',
      ' B ',
      ' C '
    ], {
      A: 'minecraft:dragon_egg',
      B: 'allthemodium:unobtainium_rod',
      C: 'occultism:awakened_feather',
    }).id('nadien_tweaks:catcher')














})