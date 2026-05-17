ServerEvents.recipes((nadien) => {


  nadien.remove({id: ['extendedae:assembler/calculation_processor', 'extendedae:assembler/concurrent_processor',  'extendedae:assembler/engineering_processor',  'extendedae:assembler/accumulation_processor', 'extendedae:assembler/silicon_print', 'extendedae:assembler/logic_processor', 'extendedae:assembler/energy_processor', 'extendedae:inscriber\concurrent_print', 'extendedae:inscriber\concurrent_process', 'extendedae:aassembler\accumulation_processor', 'extendedae:aassembler\calculation_processor', 'extendedae:aassembler\energy_processor', 'extendedae:aassembler\engineering_processor', 'extendedae:aassembler\logic_processor', 'mekmm\recipe\compat\ae2\stamper\*', 'mekmm\recipe\compat\ae2\stamper\printed_calculation_processor', 'mekmm\recipe\compat\ae2\stamper\printed_engineering_processor', 'mekmm\recipe\compat\ae2\stamper\printed_logic_processor', 'mekmm\recipe\compat\ae2\stamper\printed_silicon', 'mekmm\recipe\compat\advanced_ae\stamper\printed_quantum_processor', 'mekmm\recipe\compat\extendedae\stamper\concurrent_processor_print', 'mekmm\recipe\compat\megacells\stamper\printed_accumulation_processor', 'advanced_ae:quantum_processor_print_eae', 'advanced_ae:quantum_processor_eae', 'extendedae:cutter/printed_calculation_processor', 'extendedae:cutter/printed_concurrent_processor', 'extendedae:cutter/printed_engineering_processor', 'extendedae:cutter/printed_logic_processor', 'extendedae:cutter/printed_accumulation_processor']})
  nadien.remove({id: /mekmm:compat\/appflux.*/})
  nadien.remove({id: /mekmm:compat\/advanced_ae.*/})
  nadien.remove({id: /mekmm:compat\/ae2.*/})
  nadien.remove({id: /mekmm:compat\/extendedae.*/})
  nadien.remove({id: /mekmm:compat\/megacells.*/})
  // --- Helpers --------------------------------------------------------------

  function addCircuitFabricatorRecipe(input, input_1, input_2, output) {
    nadien.recipes.custommachinery
      .custom_machine("custommachinery:circuit_fabricator", 140 /* Ticks */)
      .requireEnergyPerTick(40)
      // Slot IDs must match machine JSON
      .requireItem(input,   "input_1")
      .requireItem(input_1, "input_2")
      .requireItem(input_2, "input_3")
      .produceItem(output,  "item_output")
      .requireStructure(
        [
          ["aaa", "a a", "ama"],
          ["aba", "bcb", "a a"],
          ["aaa", "aaa", "a a"],
        ],
        {
          a: 'extendedcrafting:enhanced_redstone_ingot_block',
          b: "ae2:quartz_vibrant_glass",
          c: "ae2:fluix_block",
        }
      )
      .id(`custommachinery:circuit_fabricator/${output.split(":")[1]}`);

    console.log(`Adding Circuit Fabricator Recipe for: ${output.split(":")[1]}`);
  }

  function addSimpleDualInputFabricatorRecipe(input, input_1, output) {
    nadien.recipes.custommachinery
      .custom_machine("custommachinery:circuit_fabricator", 140 /* Ticks */)
      .requireEnergyPerTick(40)
      .requireItem(input,   "input_1")
      .requireItem(input_1, "input_2")
      .produceItem(output,  "item_output")
      .requireStructure(
        [
          ["aaa", "a a", "ama"],
          ["aba", "bcb", "a a"],
          ["aaa", "aaa", "a a"],
        ],
        {
          a: 'extendedcrafting:enhanced_redstone_ingot_block',
          b: "ae2:quartz_vibrant_glass",
          c: "ae2:fluix_block",
        }
      )
      .id(`custommachinery:circuit_fabricator_simple/${output.split(":")[1]}`);

    console.log(`Adding Simple dual input Fabricator Recipe for: ${output.split(":")[1]}`);
  }

  function addSimpleCircuitFabricatorRecipe(input, output) {
    nadien.recipes.custommachinery
      .custom_machine("custommachinery:circuit_fabricator", 140 /* Ticks */)
      .requireEnergyPerTick(40)
      .requireItem(input, "input_1")
      .produceItem(output, "item_output")
      .requireStructure(
        [
          ["aaa", "a a", "ama"],
          ["aba", "bcb", "a a"],
          ["aaa", "aaa", "a a"],
        ],
        {
          a: 'extendedcrafting:enhanced_redstone_ingot_block',
          b: "ae2:quartz_vibrant_glass",
          c: "ae2:fluix_block",
        }
      )
      .id(`custommachinery:circuit_fabricator_simple/${output.split(":")[1]}`);

    console.log(`Adding Simple Circuit Fabricator Recipe for: ${output.split(":")[1]}`);
  }

  // --- Data -----------------------------------------------------------------

  const circuit_fabricator_recipes = [
    // Printed Components
    { input: "ae2:certus_quartz_crystal", output: "ae2:printed_calculation_processor" },
    { input: "minecraft:gold_ingot",      output: "ae2:printed_logic_processor" },
    { input: "minecraft:diamond",         output: "ae2:printed_engineering_processor" },
    { input: "ae2:silicon",  output: "ae2:printed_silicon" },
    { input: "megacells:sky_steel_ingot", output: "megacells:printed_accumulation_processor" },
    { input: "advanced_ae:quantum_alloy", output: "advanced_ae:printed_quantum_processor" },
    { input: "extendedae:entro_crystal",  output: "extendedae:concurrent_processor_print" },
    { input: 'justdirethings:ferricore_ingot',  output: 'kubejs:printed_estimation_circuit' },
    { input: 'kubejs:osmiridiumingot',  output: 'kubejs:printed_methodolgy_circuit' },
    { input: 'justdirethings:blazegold_ingot', output: 'kubejs:printed_scheduling_circuit' },
    { input: 'kubejs:osglolapis' , output: 'kubejs:printed_clearance_circuit' },
    { input: 'justdirethings:eclipsealloy_ingot', output: 'kubejs:printed_operation_circuit' },

     //custom
    { input: 'kubejs:printed_estimation_circuit', input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: 'kubejs:estimation_processor' },
    { input: 'kubejs:printed_methodolgy_circuit', input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: 'kubejs:methodology_processor' },
    { input: 'kubejs:printed_scheduling_circuit', input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: 'kubejs:scheduling_processor' },
    { input: 'kubejs:printed_clearance_circuit', input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: 'kubejs:clearance_processor' },
    { input: 'kubejs:printed_operation_circuit', input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: 'kubejs:operation_processor' },

    // AE2 Processors (3-input)
    { input: "ae2:printed_calculation_processor", input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: "ae2:calculation_processor" },
    { input: "ae2:printed_logic_processor",       input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: "ae2:logic_processor" },
    { input: "ae2:printed_engineering_processor", input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: "ae2:engineering_processor" }, 

    // MegaCells
    { input: "megacells:printed_accumulation_processor", input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: "megacells:accumulation_processor" },

    // Advanced AE
    { input: "advanced_ae:printed_quantum_processor", input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: "advanced_ae:quantum_processor" },

    // Extended AE
    { input: "extendedae:concurrent_processor_print", input_1: "minecraft:redstone", input_2: "ae2:printed_silicon", output: "extendedae:concurrent_processor" },
  ];

  // --- Builder --------------------------------------------------------------

  circuit_fabricator_recipes.forEach((recipe) => {
    nadien.remove({ output: recipe.output, type: "ae2:inscriber" });

    if (recipe.input_1 && recipe.input_2) {
      addCircuitFabricatorRecipe(recipe.input, recipe.input_1, recipe.input_2, recipe.output);
    } else if (recipe.input_1) {
      addSimpleDualInputFabricatorRecipe(recipe.input, recipe.input_1, recipe.output);
    } else {
      addSimpleCircuitFabricatorRecipe(recipe.input, recipe.output);
    }
  });

    

  nadien.shaped(Item.of('custommachinery:custom_machine_item[custommachinery:machine="custommachinery:circuit_fabricator"]'), ["SDS", "IYN", "SDS"], {
      S: "ae2:silicon",
      I: "minecraft:diamond_block",
      Y: "ae2:inscriber",
      N: 'minecraft:gold_block',
      D: 'ae2:fluix_pearl'
    }).id('nadiendev:circuit_fabricator_ported')

    //controlador
nadien.remove({output: 'ae2:controller'})
nadien.shaped('ae2:controller', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'ae2:smooth_sky_stone_block',
  b: 'ae2:engineering_processor',
  c: 'ae2:fluix_crystal',
  n: 'kubejs:energized_certus_quartz_crystal'
}).id('nadien_tweaks:controlador')

nadien.shaped('ae2:controller', [
  'aca',
  'bnb',
  'aca'
], {
  a: 'ae2:smooth_sky_stone_block',
  b: 'ae2:engineering_processor',
  c: 'ae2:fluix_crystal',
  n: 'kubejs:energized_certus_quartz_crystal'
}).id('nadien_tweaks:controladordos')


//fluix glass cable
nadien.remove({output: 'ae2:fluix_glass_cable'})
nadien.shaped('6x ae2:fluix_glass_cable', [
  'aaa',
  'bbb',
  'aaa'
], {
  a: 'ae2:fluix_crystal',
  b: 'ae2:quartz_fiber'
}).id('nadien_tweaks:cable_fluix')


// //infinity card booster
// nadien.remove({output:'aeinfinitybooster:infinity_card'})
// nadien.recipes.create.mechanical_crafting('aeinfinitybooster:infinity_card',
//   [
//    "AABAA",
//    "CBDBC",
//    "BDEDB",
//    "CBDBC",
//    "FFBFF"
//  ],
//  {
//    A:  "minecraft:ender_eye",
//    B:  "ae2:wireless_booster",
//    C:  "minecraft:nether_star",
//    D:  "extendedcrafting:ender_ingot",
//    E:  'ultimatefoods:patricio', 
//    F:  "minecraft:netherite_ingot"
// }).id('nadien_tweaks:infinitybooster')
  
  
  
//   //dimensional card
//   nadien.remove({output:'aeinfinitybooster:dimension_card'})
//   nadien.recipes.create.mechanical_crafting('aeinfinitybooster:dimension_card',
//     [
//       "AABAA",
//       "CBDBC",
//       "BDEDB",
//       "CBDBC",
//       "FFBFF"
//     ],
//     {
//       A:  "minecraft:ender_eye",
//       B:  "aeinfinitybooster:infinity_card",
//       C:  "extendedcrafting:ender_star",
//       D:  "extendedcrafting:ender_ingot",
//       E:  'ultimatefoods:bob_esponja',
//       F:  "minecraft:netherite_ingot"
//     }).id('nadien_tweaks:dimensioncard')

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
}).id('nadien_tweaks:ciernes_perfectoo_uwu')


});


 