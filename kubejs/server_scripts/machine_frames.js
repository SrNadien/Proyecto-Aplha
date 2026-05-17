ServerEvents.recipes(nadien => {
  
nadien.remove({output: 'create:copper_casing'})
 nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: "create:andesite_casing"
        },
        {
          tag: "c:ingots/copper"
        },
      ],
      results: [
        {
          id: "create:copper_casing",
        },
      ],
    }).id("nadien_tweaks:copper_cassing")

nadien.remove({output: 'create:brass_casing'})
 nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: "create:copper_casing"
        },
        {
          tag: "c:ingots/brass"
        },
      ],
      results: [
        {
          id: "create:brass_casing",
        },
      ],
    }).id("nadien_tweaks:brass_cassing")

 nadien.remove({output: 'create:railway_casing'})
 nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: "create:brass_casing"
        },
        {
          tag: "c:plates/obsidian"
        },
      ],
      results: [
        {
          id: "create:railway_casing",
        },
      ],
    }).id("nadien_tweaks:railway_cassing")

//revestidor radiante
nadien.remove({output: 'create:refined_radiance_casing'})
nadien.shaped('create:refined_radiance_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'oritech:adamant_ingot',
  b: 'extendedcrafting:luminessence',
  c: 'create:railway_casing'
}).id('nadien_tweaks:refined_radiance_casing')
nadien.recipes.create.deploying('create:refined_radiance_casing', ['create:railway_casing', 'oritech:adamant_ingot']).id('nadien_tweaks:radiance_casing_deployer')

nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: "create:railway_casing"
        },
        {
          item: "extendedcrafting:luminessence"
        },
      ],
      results: [
        {
          id: "create:refined_radiance_casing",
        },
      ],
    }).id("nadien_tweaks:refined_radiance_cassing")

//machine block extra utilities
nadien.remove({output: 'excessive_utilities:machine_block'})
nadien.shaped('excessive_utilities:machine_block', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'excessive_utilities:moon_stone',
  b: 'justdirethings:celestigem',
  c: 'create:refined_radiance_casing'
}).id('nadien_tweaks:refined_radiance_casing')
nadien.recipes.create.deploying('excessive_utilities:machine_block', ['excessive_utilities:moon_stone', 'create:refined_radiance_casing']).id('nadien_tweaks:machine_block_deployer')

nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: "create:refined_radiance_casing"
        },
        {
          item: 'excessive_utilities:moon_stone'
        },
      ],
      results: [
        {
          id: 'excessive_utilities:machine_block',
        },
      ],
    }).id("nadien_tweaks:machine_block_item_aplication")

//machine frame
nadien.remove({output: 'rftoolsbase:machine_base'})
nadien.shaped('rftoolsbase:machine_base', [
  'aca',
  'bnb',
  'aca'
], {
  a: 'oritech:duratium_ingot',
  b: 'createaddition:diamond_grit_sandpaper',
  c: 'bibliocraft:lock_and_key',
  n: 'excessive_utilities:machine_block'
}).id('nadien_tweaks:machine_frame')
nadien.recipes.create.deploying('rftoolsbase:machine_base', ['excessive_utilities:machine_block', 'oritech:duratium_ingot']).id('nadien_tweaks:machine_frame_deployer')

//carcasa de acero
nadien.remove({output: 'mekanism:steel_casing'})
nadien.shaped('mekanism:steel_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: '#c:rods/steel',
  b: 'kubejs:energized_osmium_ingot',
  c: 'rftoolsbase:machine_base'
}).id('nadien_tweaks:steel_casing')
nadien.recipes.create.deploying('mekanism:steel_casing', ['rftoolsbase:machine_base', 'kubejs:energized_osmium_ingot']).id('nadien_tweaks:steel_casing_deployer')

//void chassis
nadien.remove({output: 'enderio:void_chassis'})

nadien.shaped('enderio:void_chassis', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'enderio_endergy:crude_steel_ingot',
  b: 'kubejs:osmiridiumingot',
  c: 'mekanism:steel_casing' 
}).id('nadien_tweaks:void_chassis')
nadien.recipes.create.deploying('enderio:void_chassis', ['mekanism:steel_casing', 'enderio_endergy:crude_steel_ingot']).id('nadien_tweaks:void_chassis_deployer')

nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: 'mekanism:steel_casing'
        },
        {
          item: 'enderio_endergy:crude_steel_ingot'
        },
      ],
      results: [
        {
          id: "enderio:void_chassis",
        },
      ],
    }).id("nadien_tweaks:void_chassis_item_aplication")

//machine frame rftools
nadien.remove({output: 'rftoolsbase:machine_frame'})
nadien.shaped('rftoolsbase:machine_frame', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'gag:sacred_salve',
  b: 'advancednetherite:netherite_diamond_ingot',
  c: 'enderio:void_chassis'
}).id('nadien_tweaks:machine_frame_rftools')
nadien.recipes.create.deploying('rftoolsbase:machine_frame', ['enderio:void_chassis', 'advancednetherite:netherite_diamond_ingot']).id('nadien_tweaks:achine_frame_rftools_deployer')


//ensouled chassis
nadien.remove({output: 'enderio:ensouled_chassis'})
nadien.shaped('enderio:ensouled_chassis', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'kubejs:demonlord_ingot',
  b: 'enderio_endergy:crystalline_alloy_ingot',
  c: 'rftoolsbase:machine_frame' 
}).id('nadien_tweaks:ensouled_chassis')
nadien.recipes.create.deploying('enderio:ensouled_chassis', ['rftoolsbase:machine_frame', 'kubejs:demonlord_ingot']).id('nadien_tweaks:ensouled_chassis_deployer')

//iron cassing
nadien.remove({output: 'actuallyadditions:iron_casing'})
nadien.shaped('actuallyadditions:iron_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'ultimatefoods:nadienite_ingot',
  b: 'enderio_endergy:melodic_alloy_ingot',
  c: 'enderio:ensouled_chassis'
}).id('nadien_tweaks:iron_casing')
nadien.recipes.create.deploying('actuallyadditions:iron_casing', ['enderio:ensouled_chassis', 'ultimatefoods:nadienite_ingot']).id('nadien_tweaks:iron_cassing_deployer')

nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: 'enderio:ensouled_chassis'
        },
        {
          item: 'ultimatefoods:nadienite_ingot'
        },
      ],
      results: [
        {
          id: "actuallyadditions:iron_casing",
        },
      ],
    }).id("nadien_tweaks:iron_casing_item_aplication")

//lava factory cassing
nadien.remove({output: 'actuallyadditions:lava_factory_casing'})
nadien.shaped('actuallyadditions:lava_factory_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'extendedcrafting:enhanced_ender_ingot',
  b: 'enderio:soularium_ingot',
  c: 'actuallyadditions:iron_casing'
}).id('nadien_tweaks:lava_factory_casing')
nadien.recipes.create.deploying('actuallyadditions:lava_factory_casing', ['actuallyadditions:iron_casing', 'enderio:soularium_ingot']).id('nadien_tweaks:lava_factory_cassing_deployer')

nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: 'actuallyadditions:iron_casing'
        },
        {
          item: 'enderio:soularium_ingot'
        },
      ],
      results: [
        {
          id: "actuallyadditions:lava_factory_casing",
        },
      ],
    }).id("nadien_tweaks:lava_factory_casing_item_aplication")

//ender cassing
nadien.remove({output: 'actuallyadditions:ender_casing'})
nadien.shaped('actuallyadditions:ender_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'smallprogressions:reinforced_obsidian_ingot',
  b: 'mekanism:enriched_refined_obsidian',
  c: 'actuallyadditions:lava_factory_casing'
}).id('nadien_tweaks:ender_cassing')
nadien.recipes.create.deploying('actuallyadditions:ender_casing', ['actuallyadditions:lava_factory_casing', 'mekanism:enriched_refined_obsidian']).id('nadien_tweaks:ender_casing_deployer')

nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: 'actuallyadditions:lava_factory_casing'
        },
        {
          item: 'mekanism:enriched_refined_obsidian'
        },
      ],
      results: [
        {
          id: "actuallyadditions:ender_casing",
        },
      ],
    }).id("nadien_tweaks:ender_casing_item_aplication")

//marco de maquina pequeño
nadien.remove({output: 'industrialforegoing:machine_frame_pity'})
nadien.shaped('industrialforegoing:machine_frame_pity', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'pickletweaks:lime_cobblestone',
  b: 'chipped:natural_cherry_planks',
  c: 'industrialforegoing:pitiful_generator',
  n: 'actuallyadditions:ender_casing'
}).id('nadien_tweaks:machine_frame_pity')
nadien.recipes.create.deploying('industrialforegoing:machine_frame_pity', ['actuallyadditions:ender_casing', 'industrialforegoing:pitiful_generator']).id('nadien_tweaks:pity_machine_frame_deployer')
nadien.custom({
      type: "create:item_application",
      ingredients: [
        {
          item: "actuallyadditions:ender_casing"
        },
        {
          item: 'industrialforegoing:pitiful_generator'
        },
      ],
      results: [
        {
          id: "industrialforegoing:machine_frame_pity",
        },
      ],
    }).id("nadien_tweaks:machine_frame_pity_item_aplication")




//marco de maquina mystical 
nadien.remove({output: 'mysticalagriculture:machine_frame'})
nadien.shaped('mysticalagriculture:machine_frame', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'justdirethings:celestigem',
  b: 'mysticalagriculture:prosperity_ingot',
  c: 'irregular_implements:spectre_ingot',
  n: 'industrialforegoing:machine_frame_pity'
}).id('nadien_tweaks:machine_frame_mysticalagriculture')
nadien.recipes.create.deploying('mysticalagriculture:machine_frame', ['industrialforegoing:machine_frame_pity', 'mysticalagriculture:prosperity_ingot']).id('nadien_tweaks:pity_machine_frame_deployer')

// nadien.custom({
//       type: "create:item_application",
//       ingredients: [
//         {
//           item: 'industrialforegoing:machine_frame_pity'
//         },
//         {
//           item: 'mysticalagriculture:prosperity_ingot'
//         },
//       ],
//       results: [
//         {
//           id: "mysticalagriculture:machine_frame",
//         },
//       ],
//     }).id("nadien_tweaks:machine_frame_mystical_item_aplication")

// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')


// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')


// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')




})