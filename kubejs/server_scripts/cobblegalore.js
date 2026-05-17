ServerEvents.recipes(nadien => {
    // Stone generator
    nadien.remove({ output: 'cobblestone_generator:stone_cobblegen'})
    nadien.shaped('cobblestone_generator:stone_cobblegen', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:smooth_stone',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'minecraft:lime_stained_glass'
    })

    // Copper Generator
    nadien.remove({ output: 'cobblestone_generator:copper_cobblegen' })
    nadien.shaped('cobblestone_generator:copper_cobblegen', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: '#c:plates/copper',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblestone_generator:stone_cobblegen'
    })

    // Iron Generator
    nadien.remove({ output: 'cobblestone_generator:iron_cobblegen' })
    nadien.shaped('cobblestone_generator:iron_cobblegen', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: '#c:plates/iron',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblestone_generator:copper_cobblegen'
    })

    // Gold Generator
    nadien.remove({ output: 'cobblestone_generator:gold_cobblegen'})
    nadien.shaped('cobblestone_generator:gold_cobblegen', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: '#c:plates/gold',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblestone_generator:iron_cobblegen'
    })

    // Diamond Generator
    nadien.remove({ output: 'cobblestone_generator:diamond_cobblegen'})
    nadien.shaped('cobblestone_generator:diamond_cobblegen', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: '#c:plates/diamond',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblestone_generator:gold_cobblegen'
    })

    // Emerald Generator
    nadien.remove({ output: 'cobblestone_generator:emerald_cobblegen'})
    nadien.shaped('cobblestone_generator:emerald_cobblegen', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'solarflux:emerald_glass',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblestone_generator:diamond_cobblegen'
    })

    // Netherite Generator
    nadien.remove({ output: 'cobblestone_generator:netherite_cobblegen'})
    nadien.shaped('cobblestone_generator:netherite_cobblegen', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: '#c:plates/netherite',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblestone_generator:emerald_cobblegen'
    })

})
