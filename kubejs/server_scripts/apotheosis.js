ServerEvents.recipes(nadien => {


    // simple reforging table
    nadien.remove({ output: 'apotheosis:simple_reforging_table'})
    nadien.shaped('apotheosis:simple_reforging_table', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: '#c:plates/iron',
        B: 'apotheosis:gem_dust',
        C: 'apotheosis:ender_gem_case',
        D: 'minecraft:smooth_stone'
    }).id('nadien_tweaks:simple_reforging_table')

    // reforging table
    nadien.remove({ output: 'apotheosis:reforging_table'})
    nadien.shaped('apotheosis:reforging_table', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: '#c:plates/netherite',
        B: 'apotheosis:epic_material',
        C: 'apotheosis:simple_reforging_table',
        D: 'minecraft:nether_bricks'
    }).id('nadien_tweaks:reforging_table')

    // augmentation table
    nadien.remove({ output: 'apotheosis:augmenting_table'})
    nadien.shaped('apotheosis:augmenting_table', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: 'minecraft:nether_star',
        B: 'apotheosis:mythic_material',
        C: 'enchantinginfuser:advanced_enchanting_infuser',
        D: 'apotheosis:reforging_table'
    }).id('nadien_tweaks:augmenting_table')

    // gem cutting table
    nadien.remove({ output: 'apotheosis:gem_cutting_table'})
    nadien.shaped('apotheosis:gem_cutting_table', [
        'BCB',
        'ADA',
        'A A'
    ], {
        A: 'minecraft:cherry_wood',
        B: 'minecraft:smooth_stone',
        C: 'pickletweaks:flint_shears',
        D: 'apotheosis:gem_dust'
    }).id('nadien_tweaks:gem_cutting_table')

    // salvaging table
    nadien.remove({ output: 'apotheosis:salvaging_table'})
    nadien.shaped('apotheosis:salvaging_table', [
        'AAA',
        'BCD',
        'E E'
    ], {
        A: 'minecraft:cherry_wood',
        B: 'immersive_machinery:tunnel_digger',
        C: 'minecraft:smithing_table',
        D: 'immersive_machinery:iron_drill',
        E: 'apotheosis:gem_dust'
    }).id('nadien_tweaks:salvaging_table')



})
