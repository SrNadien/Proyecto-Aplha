
//priotity 99
ServerEvents.recipes(nadien => {
nadien.shaped('excessive_utilities:bedrockium_ingot', [
     'ABA',
     'BCB',
     'ABA'
    ], {
        A: 'excessive_utilities:compressed_cobblestone_3',
        B: 'excessive_utilities:compressed_cobblestone_4',
        C: 'actuallyadditions:empowered_diamatine_crystal_block'
    }).id('nadien_tweaks:bedrockium_ingot')
    nadien.shaped('excessive_utilities:bedrockium_ingot', [
     'ABA',
     'BCB',
     'ABA'
    ], {
        A: 'allthecompressed:cobblestone_3x',
        B: 'allthecompressed:cobblestone_4x',
        C: 'actuallyadditions:empowered_diamatine_crystal_block'
    }).id('nadien_tweaks:bedrockium_ingot_alt')
  })