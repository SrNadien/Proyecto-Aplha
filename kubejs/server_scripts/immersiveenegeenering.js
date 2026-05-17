//items desabilitados By SrNadien
ServerEvents.recipes(nadien => {

    nadien.remove({output: ['immersiveengineering:heavy_engineering', 'immersiveengineering:light_engineering', 'immersiveengineering:workbench', 'immersiveengineering:craftingtable', 'immersiveengineering:circuit_table', 'immersiveengineering:alloybrick']})



// Bloque pesado de ingeniería
nadien.shaped('8x immersiveengineering:heavy_engineering', [
    'IGI',
    'GEG',
    'IGI'
], {
    I: '#c:sheetmetals/steel',
    G: 'immersiveengineering:component_steel',
    E: 'excessive_utilities:demon_ingot'
}).id('nadien_tweaks:heavyengineering');

// Bloque de ingeniería ligera
nadien.shaped('8x immersiveengineering:light_engineering', [
    'IGI',
    'GCG',
    'IGI'
], {
    I: '#c:sheetmetals/iron',
    G: 'immersiveengineering:component_iron',
    C: 'excessive_utilities:demon_ingot'
}).id('nadien_tweaks:lightengineering');



//  function metal_press_tag(outputtag, inputtag, energia,  cantidad, molde) {
//     nadien.custom({
//   "type": "immersiveengineering:metal_press",
//   "energy": energia,
//   "input": {
//     "tag": inputtag
//   },
//   "mold": molde,
//   "result": {
//     "tag": outputtag,
//     "count": cantidad
//   }
// }).id(`nadien_tweaks:metal_press_tag/${output.replace(':', '/')}`)
//example metalpress tag
// metal_press_tag(outputtag, inputtag, energia,  cantidad, molde)
//  }
 function metal_press_item(output, input, energia,  cantidad, molde) {
    nadien.custom({
  "type": "immersiveengineering:metal_press",
  "energy": energia,
  "input": {
    "item": input
  },
  "mold": molde,
  "result": {
    "id": output,
    "count": cantidad
  }
}).id(`nadien_tweaks:metal_press_item/${output.replace(':', '/')}`)
      //example add metal prees item
      //metal_press_item(output, input, energia,  cantidad, molde)//
 }




//netherite plate
metal_press_item("alltheores:netherite_plate", 'minecraft:netherite_ingot', 2400,  2, "immersiveengineering:mold_plate")

//back iron plate
metal_press_item('extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot', 2400,  1, "immersiveengineering:mold_plate")


//mesa de crafteo del ingenierro
nadien.shaped('immersiveengineering:craftingtable', [
    'AAA',
    'BCB',
    'B B'
  ], {
    A: 'minecraft:cherry_slab',
    B: 'alltheores:diamond_rod',
    C: 'extendedcrafting:basic_table',
  }).id('nadien_tweaks:craftingtableing')


  //banco de trabajo del ingeniero
nadien.shaped('immersiveengineering:workbench', [
    'DAA',
    'B E',
    '   '
  ], {
    A: 'minecraft:cherry_slab',
    B: 'immersiveengineering:craftingtable',
    D: 'minecraft:iron_ingot',
    E: 'minecraft:cherry_fence'
  }).id('nadien_tweaks:workbenching')


  //tabla de circuitos del ingeniero
  nadien.shaped('immersiveengineering:circuit_table', [
    'AAD',
    'B E',
    '   '
  ], {
    A: 'minecraft:cherry_slab',
    B: 'immersiveengineering:craftingtable',
    D: 'immersiveengineering:screwdriver',
    E: 'immersiveengineering:light_engineering'
  }).id('nadien_tweaks:circuistableing')

  // ALLOY BRICK
  nadien.shaped('immersiveengineering:alloybrick', [
    'AB ',
    'CA ',
    '   '
  ], {
    A: 'minecraft:bricks',
    B: 'immersiveengineering:cokebrick',
    C: 'immersiveengineering:blastbrick'
  }).id('nadien_tweaks:alloybrick')

 



})

