ServerEvents.recipes( nadien => {


   //nether star block 1x
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": 'extendedcrafting:nether_star_block'
      }
    },
    "result": {
      "id": "allthecompressed:nether_star_block_1x",
      "count": 1
    }
  
  }).id('ultimate_utilities:nether_star_block_1x')


       

  //nether star block 2x
  nadien.remove({output:'allthecompressed:nether_star_block_2x'})
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": "allthecompressed:nether_star_block_1x"
      }
    },
    "result": {
      "id": "allthecompressed:nether_star_block_2x",
      "count": 1
    },

  }).id('ultimate_utilities:nether_star_block_2x')


  //nether star block 3x
  nadien.remove({output:'allthecompressed:nether_star_block_3x'})
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": "allthecompressed:nether_star_block_2x"
      }
    },
    "result": {
      "id": "allthecompressed:nether_star_block_3x",
      "count": 1
    },
}).id('ultimate_utilities:nether_star_block_3x')



//nether star block 4x
nadien.remove({output:'allthecompressed:nether_star_block_4x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_3x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_4x",
    "count": 1
  },
}).id('ultimate_utilities:nether_star_block_4x')


//nether star block 5x
nadien.remove({output:'allthecompressed:nether_star_block_5x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_4x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_5x",
    "count": 1
  },
}).id('ultimate_utilities:nether_star_block_5x')




//nether star block 6x
nadien.remove({output:'allthecompressed:nether_star_block_6x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_5x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_6x",
    "count": 1
  },
}
).id('ultimate_utilities:nether_star_block_6x')





//nether star block 7x
nadien.remove({output:'allthecompressed:nether_star_block_7x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_6x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_7x",
    "count": 1
  },

}).id('ultimate_utilities:nether_star_block_7x')




//nether star block 8x
nadien.remove({output:'allthecompressed:nether_star_block_8x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_7x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_8x",
    "count": 1
  },
}).id('ultimate_utilities:nether_star_block_8x')

   //modium upgrade
   nadien.shaped(Item.of('allthemodium:allthemodium_upgrade_smithing_template', 2), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'allthemodium:allthemodium_ingot',
        U: 'minecraft:ender_eye',
        N: 'minecraft:netherrack'
    }).id('nadien_tweaks:modium_smithigng_upgrade')

    //vibranium
      nadien.shaped(Item.of('allthemodium:vibranium_upgrade_smithing_template', 2), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'allthemodium:vibranium_ingot',
        U: 'minecraft:ender_eye',
        N: 'minecraft:netherrack'
    }).id('nadien_tweaks:vibranium_smithigng_upgrade')

    //unobtainium
        nadien.shaped(Item.of('allthemodium:unobtainium_upgrade_smithing_template', 2), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'allthemodium:unobtainium_ingot',
        U: 'minecraft:ender_eye',
        N: 'minecraft:netherrack'
    }).id('nadien_tweaks:unobtainium_smithigng_upgrade')


    //allthemodium vibranium
    nadien.recipes.oritech
        .atomic_forge()
        .itemInputs(['allthemodium:allthemodium_ingot', 'allthemodium:vibranium_ingot'])
        .itemOutputs("allthemodium:vibranium_allthemodium_alloy_ingot")

    //allthemodium unobtanio
     nadien.recipes.oritech
        .atomic_forge()
        .itemInputs(['allthemodium:allthemodium_ingot', 'allthemodium:unobtainium_ingot'])
        .itemOutputs("allthemodium:unobtainium_allthemodium_alloy_ingot")

    //unobtanium vibranium 
     nadien.recipes.oritech
        .atomic_forge()
        .itemInputs(['allthemodium:unobtainium_ingot', 'allthemodium:vibranium_ingot'])
        .itemOutputs("allthemodium:unobtainium_vibranium_alloy_ingot")

  



nadien.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "allthemodium:unobtainium_sword"
  },
  "ingredients": [
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:allthemodium_sword"},
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:vibranium_sword"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:unobtainium_ingot"},
    {"item": "allthemodium:unobtainium_sword"},
    {"item": "allthemodium:unobtainium_ingot"}
  ],
  "result": {"id": "allthemodium:alloy_sword"}
}).id('nadien_tweaks:pedistal/allthemodium/alloy_sword')

nadien.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "allthemodium:unobtainium_pickaxe"
  },
  "ingredients": [
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:allthemodium_pickaxe"},
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:vibranium_pickaxe"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:unobtainium_ingot"},
    {"item": "allthemodium:unobtainium_pickaxe"},
    {"item": "allthemodium:unobtainium_ingot"}
  ],
  "result": {"id": "allthemodium:alloy_pick"}
}).id('nadien_tweaks:pedistal/allthemodium/alloy_pick')

nadien.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "allthemodium:unobtainium_axe"
  },
  "ingredients": [
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:allthemodium_axe"},
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:vibranium_axe"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:unobtainium_ingot"},
    {"item": "allthemodium:unobtainium_axe"},
    {"item": "allthemodium:unobtainium_ingot"}
  ],
  "result": {"id": "allthemodium:alloy_axe"}
}).id('nadien_tweaks:pedistal/allthemodium/alloy_axe')

nadien.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "allthemodium:unobtainium_shovel"
  },
  "ingredients": [
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:allthemodium_shovel"},
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:vibranium_shovel"},
    {"item": "allthemodium:vibranium_ingot"}, 
    {"item": "allthemodium:unobtainium_ingot"},
    {"item": "allthemodium:unobtainium_shovel"},
    {"item": "allthemodium:unobtainium_ingot"}
  ],
  "result": {"id": "allthemodium:alloy_shovel"}
}).id('nadien_tweaks:pedistal/allthemodium/alloy_shovel')

nadien.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "crafting_time": 240,
  "pattern": ["UOV","PNA","HSR"],
  "key": {
    "U": {"tag": "c:plates/unobtainium"},
    "O": {"item": "mekanismtools:refined_obsidian_paxel"},
    "V": {"tag": "c:plates/vibranium"},
    "P": {"item": "allthemodium:alloy_pick"},
    "N": {"item": "mekanismtools:netherite_paxel"},
    "A": {"item": "allthemodium:alloy_axe"},
    "H": {"item": "allthemodium:piglich_heart"},
    "S": {"item": "allthemodium:alloy_shovel"},
    "R": {"tag": "c:rods/allthemodium"},
  },
  "result": {"id": "allthemodium:alloy_paxel"}
}).id('nadien_tweaks:ender/allthemodium/alloy_paxel')

  nadien.shapeless(' 9x allthemodium:piglich_heart', ['allthemodium:piglich_heart_block']).id('nadien_tweaks:allthemodium/heart_decompression')


  // allthemodium capacitor
nadien.remove({output: 'capacitoradditions:allthemodium_capacitor[enderio:capacitor_data={base:4.0f,specializations:{}}]'})
nadien.shaped('capacitoradditions:allthemodium_capacitor[enderio:capacitor_data={base:4.0f,specializations:{}}]', [
  ' ac',
  'aba',
  'ca '
], {
  a: 'allthemodium:allthemodium_block',
  b: 'enderio:octadic_capacitor',
  c: 'enderio:grains_of_infinity',
}).id('nadien_tweaks:allthemodium_capacitor')

 // vibranium capacitor
nadien.remove({output: 'capacitoradditions:vibranium_capacitor[enderio:capacitor_data={base:5.0f,specializations:{}}]'})
nadien.shaped('capacitoradditions:vibranium_capacitor[enderio:capacitor_data={base:5.0f,specializations:{}}]', [
  ' ac',
  'aba',
  'ca '
], {
  a: 'allthemodium:vibranium_block',
  b: 'capacitoradditions:allthemodium_capacitor[enderio:capacitor_data={base:4.0f,specializations:{}}]',
  c: 'enderio:grains_of_infinity',
}).id('nadien_tweaks:vibranium_capacitor')

// unobtainium capacitor
nadien.remove({output: 'capacitoradditions:unobtainium_capacitor[enderio:capacitor_data={base:6.0f,specializations:{}}]'})
nadien.shaped('capacitoradditions:unobtainium_capacitor[enderio:capacitor_data={base:6.0f,specializations:{}}]', [
  ' ac',
  'aba',
  'ca '
], {
  a: 'allthemodium:unobtainium_block',
  b: 'capacitoradditions:vibranium_capacitor[enderio:capacitor_data={base:5.0f,specializations:{}}]',
  c: 'enderio:grains_of_infinity',
}).id('nadien_tweaks:unobtainium_capacitor')

})
