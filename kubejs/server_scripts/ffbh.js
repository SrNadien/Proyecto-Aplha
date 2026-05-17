ServerEvents.recipes(nadien => {
  nadien.replaceInput({id: 'farmingforblockheads:market'}, '#minecraft:planks', 'minecraft:emerald_block')


//                         =======> MARKET PRESETS  <========

//sell item
//  nadien.custom({
//   "type": "farmingforblockheads:market",
//   "category": "farmingforblockheads:other",
//   "preset": "minecraft:animal_eggs",
//   "result": {
//     "count": 1,
//     "item": 'cataclysm:ignis_spawn_egg'
//   }
// })

 nadien.custom({
  "type": "farmingforblockheads:market",
  "category": "farmingforblockheads:other",
  "preset": "minecraft:seeds",
  "result": {
    "count": 1,
    "item": 'mob_grinding_utils:golden_egg'
  }
})

 nadien.custom({
  "type": "farmingforblockheads:market",
  "category": "farmingforblockheads:other",
  "preset": "minecraft:seeds",
  "result": {
    "count": 1,
    "item": 'mob_grinding_utils:rotten_egg'
  }
})

//  nadien.custom({
//   "type": "farmingforblockheads:market",
//   "category": "farmingforblockheads:other",
//   "preset": "minecraft:animal_eggs",
//   "result": {
//     "count": 1,
//     "item": 'minecraft:shulker_spawn_egg'
//   }
//})
//  nadien.custom({
//   "type": "farmingforblockheads:market",
//   "category": "farmingforblockheads:other",
//   "preset": "minecraft:animal_eggs",
//   "result": {
//     "count": 1,
//     "item": 'botanypots:terracotta_hopper_botany_pot'
//   }
// })

 nadien.custom({
  "type": "farmingforblockheads:market",
  "category": "farmingforblockheads:other",
  "preset": "minecraft:seeds",
  "result": {
    "count": 1,
    "item": 'minecraft:farmland'
  }
})

 nadien.custom({
  "type": "farmingforblockheads:market",
  "category": "farmingforblockheads:other",
  "preset": "minecraft:seeds",
  "result": {
    "count": 1,
    "item": 'utilitarian:snad'
  }
})
 nadien.custom({
  "type": "farmingforblockheads:market",
  "category": "farmingforblockheads:other",
  "preset": "minecraft:seeds",
  "result": {
    "count": 1,
    "item": 'allthemodium:ancient_soulberries'
  }
})

 nadien.custom({
  "type": "farmingforblockheads:market",
  "category": "farmingforblockheads:other",
  "preset": "minecraft:seeds",
  "result": {
    "count": 1,
    "item": 'minecraft:nautilus_shell'
  }
})
    nadien.remove({output: 'minecraft:spawner' })
//  nadien.custom({
//   "type": "farmingforblockheads:market",
//   "category": "farmingforblockheads:other",
//   "preset": "minecraft:seeds",
//   "result": {
//     "count": 1,
//     "item": 'minecraft:spawner'
//   }
// })



//.id('nadien_tweaks:market_customized_sell_item')


//perfecto ciernes
 nadien.custom({
  "type": "ae2:transform",
  "ingredients": [
    {
      "item": "ae2:charged_certus_quartz_crystal"
    },
    {
      "item": "ae2:flawed_budding_quartz"
    }
  ],
  "result": {
    "count": 1,
    "id": "ae2:flawless_budding_quartz"
  }
}).id('nadien_tweaks:ciernesperfecto')



})
