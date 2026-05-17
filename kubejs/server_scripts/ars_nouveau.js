ServerEvents.recipes(nadien => {    
nadien.remove({id: 'ars_nouveau:imbuement_amethyst_block'})




  //gema fuente 
  nadien.remove({id: 'ars_nouveau:source_gem' })
  nadien.remove({id: 'ars_nouveau:source_gem' })
  nadien.remove({id: 'ars_nouveau:imbuement_lapis' })
  nadien.remove({id: 'ars_nouveau:imbuement_amethyst' })
  nadien.recipes.ars_nouveau.imbuement('kubejs:ingot_of_elevation', 'ars_nouveau:source_gem', 500, []).id('nadien_tweaks:imbuement_sand_from_tnt')


    //pedestal arcano
  nadien.remove({id: 'ars_nouveau:arcane_pedestal' })

  nadien.shaped('ars_nouveau:arcane_pedestal', [
    'xzx',
    'yxy',
    'yxy'
    ], {
    x: 'ars_nouveau:sourcestone',
    y: 'kubejs:ingot_of_elevation',
    z: 'ars_nouveau:source_gem'
  }).id('nadien_tweaks:arcane_pedestal')
 
    //brazero ritual
  nadien.remove({id: 'ars_nouveau:ritual_brazier' })
  nadien.shaped('ars_nouveau:ritual_brazier', [
    'xyx',
    'zzz',
    ' y '
    ], {
    x: 'ars_nouveau:arcane_pedestal',
    y: 'kubejs:ingot_of_elevation',
    z: '#c:gems/source'
  }).id('nadien_tweaks:ritual_brazier')


  //tabla de alteraciones
  nadien.remove({id: 'ars_nouveau:alteration_table' })
  nadien.shaped('ars_nouveau:alteration_table', [
    'cxc',
    'xyx',
    'cxc'
    ], {
    x: 'ars_nouveau:scribes_table',
    y: 'kubejs:ingot_of_elevation',
    c: 'ars_nouveau:magebloom_fiber'
  }).id('nadien_tweaks:alteration_table')
  
  //generador alquimico
  nadien.remove({id: 'ars_nouveau:alchemical_sourcelink' })
  nadien.shaped('ars_nouveau:alchemical_sourcelink', [
    ' s ',
    'gig',
    ' s '
    ], {
    g: '#c:ingots/gold',
    i: 'kubejs:ingot_of_elevation',
    s: '#c:gems/source'
  }).id('nadien_tweaks:alchemical_sourcelink')


  //fundidor de pociones
  nadien.remove({id: 'ars_nouveau:potion_melder' })
      nadien.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:sand', 'minecraft:sand', 'minecraft:sand', 'minecraft:sand'], // input items
        'minecraft:gunpowder', // reagent
        'minecraft:tnt', // output
        1000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )

    nadien.recipes.ars_nouveau.enchanting_apparatus(
      ['ars_nouveau:abjuration_essence', 'ars_nouveau:abjuration_essence', '#c:storage_blocks/gold', '#c:storage_blocks/gold', 'kubejs:ingot_of_elevation', 'kubejs:ingot_of_elevation', 'kubejs:ingot_of_elevation', 'kubejs:ingot_of_elevation'], 'ars_nouveau:potion_jar', 'ars_nouveau:potion_melder', 1000 ).id('nadien_tweaks:potion_melder')
  

      //camara de imbuir
  nadien.remove({output: 'ars_nouveau:imbuement_chamber' })
  nadien.shaped('ars_nouveau:imbuement_chamber', [
    'xyx',
    'x x',
    'xyx'
    ], {
    x: 'ars_nouveau:archwood_planks',
    y: 'kubejs:ingot_of_elevation'
  }).id('nadien_tweaks:imbuement_chamber')

   //jarra de fuente
  nadien.remove({output: 'ars_nouveau:source_jar' })
  nadien.shaped('ars_nouveau:source_jar', [
    'yyy',
    'x x',
    'yyy'
    ], {
    x: 'kubejs:ingot_of_elevation',
    y: 'ars_nouveau:archwood_slab'
  }).id('nadien_tweaks:source_jar')

  //libro tier 1
  nadien.remove({output: 'ars_nouveau:novice_spell_book' })
  nadien.custom( {
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": 'minecraft:diamond_axe'
    },
    {
      "item": 'minecraft:diamond_shovel'
    },
    {
      "item": 'minecraft:diamond_hoe'
    },
    {
      "item": 'minecraft:diamond_sword'
    },
    {
      "item": 'minecraft:diamond_pickaxe'
    },
    {
      "item": 'minecraft:writable_book'
    },
    {
      "item": 'advanced_ae:quantum_alloy_plate'
    },
    {
      "item": 'ae2:singularity'
    }
  ],
  "inputFluid": {
    "amount": 1000,
    "fluid": 'mob_grinding_utils:fluid_xp'
  },
  "output": {
    "count": 1,
    "id": "ars_nouveau:novice_spell_book"
  },
  "processingTime": 300
}).id('nadien_tweaks:novice_spell_book')







})