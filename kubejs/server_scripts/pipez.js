//pipez By SrNadien
ServerEvents.recipes(nadien => {


  //eliminadas
  nadien.remove({output:'pipez:item_pipe'})
  nadien.remove({output:'pipez:fluid_pipe'})
  nadien.remove({output:'pipez:energy_pipe'})
  nadien.remove({output:'pipez:gas_pipe'})
  nadien.remove({output:'pipez:basic_upgrade'})
  nadien.remove({output:'pipez:improved_upgrade'})
  nadien.remove({output:'pipez:advanced_upgrade'})
  nadien.remove({output:'pipez:ultimate_upgrade'})


 //Tuberias
 nadien.shaped('8x pipez:item_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#c:plates/steel',
 C: '#c:plates/steel',
 Q: '#c:plates/steel',
 I: 'minecraft:dropper',
 L: 'minecraft:redstone_block',
 W: 'minecraft:dropper',
 E: '#c:plates/steel',
 H: '#c:plates/steel',
 P: '#c:plates/steel'
}).id('ultimate_utilities:itempipe')


 //fluid pipe
 nadien.shaped('6x pipez:fluid_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#c:plates/osmium',
 C: '#c:plates/osmium',
 Q: '#c:plates/osmium',
 I: 'minecraft:bucket',
 L: 'minecraft:redstone_block',
 W: 'minecraft:bucket',
 E: '#c:plates/osmium',
 H: '#c:plates/osmium',
 P: '#c:plates/osmium'
}).id('ultimate_utilities:fluidpipe')


 //energy pipe
 nadien.shaped('8x pipez:energy_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#c:plates/osmium',
 C: '#c:plates/osmium',
 Q: '#c:plates/osmium',
 I: '#c:ingots/steel',
 L: '#c:ingots/steel',
 W: '#c:ingots/steel',
 E: '#c:plates/osmium',
 H: '#c:plates/osmium',
 P: '#c:plates/osmium'
}).id('ultimate_utilities:energypipe')


 // gas pipe
 nadien.shaped('8x pipez:gas_pipe', [
 'TCQ',
 'ILW',
 'EHP'
], {
 T: '#c:plates/osmium',
 C: '#c:plates/osmium',
 Q: '#c:plates/osmium',
 I: 'mekanism:alloy_infused',
 L: 'minecraft:redstone_block',
 W: 'mekanism:alloy_infused',
 E: '#c:plates/osmium',
 H: '#c:plates/osmium',
 P: '#c:plates/osmium'
}).id('ultimate_utilities:gaspipe')

//Iron upgrade
 nadien.shaped('pipez:basic_upgrade', [
 'ABA',
 'BCB',
 'ABA'
], {
 A: '#c:plates/iron',
 B: '#c:nuggets/iron',
 C: 'minecraft:redstone'
}).id('ultimate_utilities:basicupgrade')

 //Gold Upgrade
 nadien.shaped('pipez:improved_upgrade', [
 'ABA',
 'BCB',
 'ABA'
], {
 A: '#c:plates/gold',
 B: 'minecraft:redstone_block',
 C: 'pipez:basic_upgrade'
}).id('ultimate_utilities:improvedupgrade')

 //Diamond Upgrade
 nadien.shaped('pipez:advanced_upgrade', [
 'ABA',
 'BCB',
 'ABA'
], {
 A: '#c:plates/diamond',
 B: 'minecraft:redstone_block',
 C: 'pipez:improved_upgrade'
}).id('ultimate_utilities:advancedupgrade')

 //Netherite upgrade
//  nadien.shaped('pipez:ultimate_upgrade', [
//  'ABA',
//  'BCB',
//  'ABA'
// ], {
//  A: '#c:plates/netherite',
//  B: 'minecraft:redstone_block',
//  C: 'pipez:advanced_upgrade'
// }).id('ultimate_utilities:ultimateupgrade')

//mejora infinita
//  nadien.shaped('pipez:infinity_upgrade', [
//  'AB ',
//  '   ',
//  '   '
// ], {
//  A: 'pipez:ultimate_upgrade',
//  B: 'avaritia:infinity_ingot',
// }).id('ultimate_utilities:infiniteupgrade')


//wrench
nadien.replaceInput({id: 'pipez:wrench'}, 'minecraft:flint', 'kubejs:demon_ingot')

})