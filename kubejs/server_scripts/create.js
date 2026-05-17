ServerEvents.recipes(nadien => {


nadien.remove({output: ['create:deployer', 'create:mechanical_crafter', 'create:spout','create:andesite_alloy', 'create:refined_radiance_casing']})
 
 
 //aleacion de andesita
 nadien.recipes.create.mixing('8x create:andesite_alloy', ['2x minecraft:iron_ingot', 'allthecompressed:andesite_1x']).id('nadien_tweaks:andesite_alloy_dos').superheated()
//  nadien.shaped('create:andesite_alloy', [
//    'PA ',
//    'AP ',
//    '   '
//  ], {
//    P: 'allthecompressed:andesite_1x',
//    A: 'kubejs:demon_ingot'
//  }).id('nadien_tweaks:aleaciondeandesita')
  nadien.shaped('create:andesite_alloy', [
   'PA ',
   'AP ',
   '   '
 ], {
   P: 'allthecompressed:andesite_1x',
   A: 'excessive_utilities:demon_ingot'
 }).id('nadien_tweaks:aleaciondeandesitaalt')

  //andesita desde bloque
  nadien.shaped('9x create:andesite_alloy', [
    '   ',
    ' P ',
    '   '
  ], {
    P: 'create:andesite_alloy_block',
  }).id('nadien_tweaks:aleacion_de_andesita_block_to_ingot')
  
  //brass desde bloque
  nadien.shaped('9x create:brass_ingot', [
    '   ',
    ' P ',
    '   '
  ], {
    P: 'create:brass_block',
  }).id('nadien_tweaks:brass_block_to_ingot')

//polished rose quartz
nadien.shaped('9x create:polished_rose_quartz', [
   'P  ',
   '   ',
   '   '
 ], {
   P: 'create:rose_quartz_block',
 }).id('nadien_tweaks:rose_qurtz_polished_block')


 //ensamblador mecanico
 nadien.shaped('create:mechanical_crafter', [
   ' P ',
   ' A ',
   ' D '
 ], {
   P: 'create:electron_tube',
   A: 'create:andesite_casing',
   D: 'minecraft:crafting_table'
 }).id('nadien_tweaks:mechanical_crafter')

 //surtidor
 nadien.shaped('create:spout', [
   ' P ',
   ' A ',
   '   '
 ], {
   P: 'create:andesite_casing',
   A: 'minecraft:dried_kelp'
 }).id('nadien_tweaks:spout')

 //hand
 nadien.shaped('kubejs:zinc_hand', [
   ' A ',
   'PPP',
   ' P '
 ], {
   P: '#c:plates/zinc',
   A: 'create:andesite_alloy'
 }).id('nadien_tweaks:mano_sinc')

 //desplegador
 const mano = ['kubejs:zinc_hand', 'create:brass_hand']
  nadien.shaped('create:deployer', [
   ' A ',
   ' P ',
   ' D '
 ], {
   P: 'create:andesite_casing',
   A: 'create:electron_tube',
   D: mano
 }).id('nadien_tweaks:desplegador_quietorl')


 //cherry coghwheel
 nadien.shaped('createcasing:cherry_cogwheel', [
   'AAA',
   'ABA',
   'AAA'
 ], {
   A: 'minecraft:stripped_cherry_log',
   B: 'create:shaft'
 }).id('nadien_tweaks:cherry_cogwheel')

  //cherry LARGE coghwheel
 nadien.shaped('createcasing:cherry_large_cogwheel', [
   'AAA',
   'ABA',
   'AAA'
 ], {
   A: 'minecraft:stripped_cherry_log',
   B: 'createcasing:cherry_cogwheel' 
 }).id('nadien_tweaks:cherry_large_cogwheel')

//radiant sheet
  nadien.recipes.create.mixing('create:radiant_sheet',  'mekanism_extras:alloy_radiance').id('nadien_tweaks:radiant_sheet').superheated()
       
  
  //brass alloying
   nadien.recipes.enderio.alloy_smelting('create:brass_ingot', ['#c:ingots/copper', '#c:ingots/zinc'], 4800, 0).id('nadientweaks:laton_alloying')


 
})