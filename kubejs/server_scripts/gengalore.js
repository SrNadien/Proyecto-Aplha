ServerEvents.recipes(nadien => {

    // netherstar generator
    nadien.remove({ id: `generatorgalore:generators/netherstar_generator`})
    nadien.remove({ id: `generatorgalore:generators/magmatic_generator`})
    nadien.remove({ id: `generatorgalore:generators/iron_generator`})
    nadien.remove({ id: `generatorgalore:generators/enchantment_generator`})
    nadien.remove({ id: `generatorgalore:generators/culinary_generator`})
    nadien.remove({ id: `generatorgalore:generators/ender_generator`})


    nadien.shaped('generatorgalore:netherstar_generator', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'minecraft:wither_skeleton_skull',
        B: 'generatorgalore:netherite_generator',
        C: 'extendedcrafting:nether_star_block'
    })

    // culinary generator
    nadien.shaped('generatorgalore:culinary_generator', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: '#c:crops',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:hay_block'
    })

    // ender generator
    nadien.shaped('generatorgalore:ender_generator', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'minecraft:ender_pearl',
        B: `generatorgalore:iron_generator`,
        C: 'minecraft:redstone_block'
    })

    // iron generator
    nadien.shaped('generatorgalore:iron_generator', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:furnace',
        C: 'minecraft:redstone_block'
    })

    // magmatic generator
    nadien.shaped('generatorgalore:magmatic_generator', [
        'AAA',
        'DBD',
        'ACA'
    ], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:furnace',
        C: 'minecraft:redstone_block',
        D: 'minecraft:glass'
    })

    // enchantment generator
    nadien.shaped('generatorgalore:enchantment_generator', [
        'AAA',
        'ABA',
        'DCD'
    ], {
        A: 'minecraft:golden_carrot',
        B: 'generatorgalore:iron_generator',
        C: 'minecraft:bookshelf',
        D: 'minecraft:obsidian'
    })

    // enchantment generator
    nadien.shaped('generatorgalore:netherite_generator', [
        'AAA',
        'ABA',
        'DCD'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'generatorgalore:iron_generator',
        C: 'mekanism:block_charcoal',
        D: 'minecraft:obsidian'
    })

    nadien.replaceInput({ output: /generatorgalore:.*_generator_8x/ },
     'minecraft:echo_shard', 
     'alltheores:diamond_gear'
    )

    nadien.replaceInput({ output: /generatorgalore:.*_generator_64x/ },
     'minecraft:conduit', 
     'alltheores:netherite_gear'
    )

    })