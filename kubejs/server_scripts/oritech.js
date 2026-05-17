ServerEvents.recipes(nadien => {
   

   //mekanism compat remove
    nadien.remove({id: 'oritech:foundry/alloy/compat/mekanism/infused_alloy'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/mekanism/refined_obsidian_dust'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/mekanism/reinforced_alloy'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/mekanism/atomic_alloy'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/mekanism/bronze'})


    //immersive engineering compat remove
    nadien.remove({id: 'oritech:foundry/alloy/compat/immersiveengineering/constantan'})

    

    //enderio compat remove
    nadien.remove({id: 'oritech:foundry/alloy/compat/enderio/copperalloy'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/enderio/darksteel'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/enderio/energeticalloy'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/enderio/pulsatingalloy'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/enderio/redstonealloy'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/enderio/soularium'})
    nadien.remove({id: 'oritech:foundry/alloy/compat/enderio/vibrantalloy'})

    //create compat remove
    nadien.remove({id: 'oritech:foundry/alloy/compat/create/brass'})


   //crafting table recipes remove
   nadien.remove({id: 'oritech:crafting/alloy/steel'})
   nadien.remove({id: 'oritech:crafting/alloy/electrum'})
   nadien.remove({id: 'oritech:crafting/alloy/adamant'})


   //wrench replacement
   nadien.remove({output: 'oritech:wrench' })
   nadien.shaped('oritech:wrench', [
    " a ",
    " ba",
    "a  "
  ], {
    a: '#c:ingots/steel',
    b: 'mekanism:ingot_refined_obsidian'
  }).id('nadien_tweaks:oritech_wrench')

  
//   function addRecipeFoundry(output, count, fluidInput, fluidamount, ingredient1, ingredient2) {
//   nadien.custom({  "type": "oritech:foundry",
//   "fluidInput": {
//     "amount": fluidamount,
//     "fluid": fluidInput
//   },
//   "fluidOutputs": [],
//   "ingredients": [
//     {
//       "item": ingredient1
//     },
//     {
//       "item": ingredient2
//     }
//   ],
//   "results": [
//     {
//       "count": count,
//       "id": output
//     }
//   ],
//   "time": 120
// }).id(`nadien_tweaks:infusion/${output.replace(':', '/')}`)
//   }
//   addRecipeFoundry('mekanism:alloy_infused', 4, 'mekanism:oxygen', 1000, 'mekanism:ingot_steel', 'minecraft:redstone_block')
//   addRecipeFoundry('mekanism:alloy_reinforced', 4, 'mekanism:hydrogen', 1000, 'mekanism:ingot_refined_glowstone', 'minecraft:redstone_block')
//   addRecipeFoundry('mekanism:alloy_atomic', 4, 'mekanism:nutritional_paste', 1000, 'mekanism:ingot_refined_obsidian', 'minecraft:netherite_block')

//   nadien.recipes.oritech
//         .foundry()
//         .itemInputs(["#c:ingots", "minecraft:potato"])
//         .itemOutputs("4x cobblestone")

  //naphta
// nadien.custom({
//   "type": "oritech:refinery",
//   "fluidInput": {
//     "amount": 1000,
//     "fluid": "kubejs:crude_oil"
//   },
//   "fluidOutputs": [
//     {
//       "amount": 500,
//       "fluid": "oritech:still_naphtha"
//     },
//     {
//       "amount": 500,
//       "fluid": "immersiveengineering:biodiesel"
//     },
//     {
//       "amount": 500,
//       "fluid": "immersiveengineering:creosote"
//     }
//   ],
//   "ingredients": [
//     {
//       "item": "alltheores:netherite_plate"
//     }
//   ],
//   "results": [],
//   "time": 128
// }).id('nadien_tweaks:naphta')

})