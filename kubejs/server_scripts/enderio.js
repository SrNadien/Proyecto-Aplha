ServerEvents.recipes(nadien => {
  //POWERED SPAWNER
  nadien.shaped('enderio:powered_spawner', [
  'ABA',
  'ACA',
  'DED'
], {
  A: 'enderio:soularium_ingot',
  B: 'enderio:broken_spawner',
  C: 'enderio:ensouled_chassis',
  D: 'enderio:vibrant_crystal',
  E: 'minecraft:zombie_head'
  }).id('nadien_tweaks:powered_spawner')


//grains of infinity block
nadien.shaped('kubejs:infinity_dust_block', [
 'AAA',
 'AAA',
 'AAA'
], {
 A: 'enderio:grains_of_infinity'
}).id('nadien_tweaks:infinity_dust_block')


//grains of infinity block compressed
nadien.shaped('kubejs:compressed_infinity_dust_block', [
 'AAA',
 'AAA',
 'AAA'
], {
 A: 'kubejs:infinity_dust_block'
}).id('nadien_tweaks:compressed_infinity_dust_block')

//grains of infinity block doble compressed
nadien.shaped('kubejs:double_compressed_infinity_dust_block', [
 'AAA',
 'AAA',
 'AAA'
], {
 A: 'kubejs:compressed_infinity_dust_block'
}).id('nadien_tweaks:double_compressed_infinity_dust_block')




//double layer capacitor
nadien.replaceInput({ id: 'enderio:double_layer_capacitor' }, 'enderio:energetic_alloy_ingot', 'enderio:energetic_alloy_block')
//octadic capacitor
nadien.replaceInput({ id: 'enderio:octadic_capacitor' }, 'enderio:vibrant_alloy_ingot', 'enderio:vibrant_alloy_block')

//enhanced item conduit
nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:enhanced_item"]', [
 'AAA',
 'BCB',
 'AAA'
], {
 A: 'enderio:conduit_binder',
 B: 'enderio:energetic_alloy_ingot',
 C: 'enderio:conduit[enderio:conduit="enderio:item"]'
}).id('nadien_tweaks:enhanced_item_conduit')

//ender item conduit
nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:ender_item"]', [
 'AAA',
 'BCB',
 'AAA'
], {
 A: 'enderio:conduit_binder',
 B: 'enderio:vibrant_alloy_ingot',
 C: 'enderio:conduit[enderio:conduit="enderio:enhanced_item"]'
}).id('nadien_tweaks:ender_item_conduit')

// //energetic alloy coduit
// nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:energetic_conduit"]', [
//  'AAA',
//  'BBB',
//  'AAA'
// ], {
//  A: 'enderio:conduit_binder',
//  B: 'enderio:energetic_alloy_ingot'
// }).id('nadien_tweaks:energetic_conduit')


// //vibrant conduit
// nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:vibrant_conduit"]', [
//  'AAA',
//  'BBB',
//  'AAA'
// ], {
//  A: 'enderio:conduit_binder',
//  B: 'enderio:vibrant_alloy_ingot'
// }).id('nadien_tweaks:vibrant_conduit')

// //endsteel conduit
// nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:endsteel_conduit"]', [
//  'AAA',
//  'BBB',
//  'AAA'
// ], {
//  A: 'enderio:conduit_binder',
//  B: 'enderio:end_steel_ingot'
// }).id('nadien_tweaks:endsteel_conduit')

// //lumium Conduit
// nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:lumium_conduit"]', [
//  'AAA',
//  'BBB',
//  'AAA'
// ], {
//  A: 'enderio:conduit_binder',
//  B: '#c:ingots/lumium'
// }).id('nadien_tweaks:lumium_conduit')

// //signalum conduit
// nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:signalum_conduit"]', [
//  'AAA',
//  'BBB',
//  'AAA'
// ], {
//  A: 'enderio:conduit_binder',
//  B: '#c:ingots/signalum'
// }).id('nadien_tweaks:signalum_conduit')

// //sculk conduit
// nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:sculk_superconductor_conduit"]', [
//  'AAA',
//  'CBC',
//  'AAA'
// ], {
//  A: 'enderio:conduit_binder',
//  B: 'minecraft:echo_shard',
//  C: 'allthemodium:unobtainium_vibranium_alloy_ingot'
// }).id('nadien_tweaks:sculk_superconductor_conduit')

// //stellar conduit
// nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:stellar_energy_conduit"]', [
//  'AAA',
//  'CCC',
//  'AAA'
// ], {
//  A: 'enderio:conduit_binder',
//  C: 'avaritia:crystal_matrix_ingot'
// }).id('nadien_tweaks:stellar_energy_conduit')

// //conductive iron conduit
// nadien.shaped('8x enderio:conduit[enderio:conduit="enderio:conductive_conduit"]', [
//  'AAA',
//  'BBB',
//  'AAA'
// ], {
//  A: 'enderio:conduit_binder',
//  B: 'enderio:conductive_alloy_ingot'
// }).id('nadien_tweaks:conductive_conduit')

//alloy smeleter
nadien.remove({output: 'enderio:alloy_smelter' })
nadien.shaped('enderio:alloy_smelter', [
"GVG",
"FIF",
"VOV"
], {
    F:   'enderio_endergy:grainy_capacitor',
    G:   'minecraft:gold_block',
    I:   'minecraft:blast_furnace',
    O:   "#c:obsidians",
    V:   'create:andesite_casing'
}).id('nadien_tweaks:alloy_smelter')


//COMPRESSED OCTADIC CAPACITOR
nadien.shaped('kubejs:compressed_octadic_capacitor', [
 'AAA',
 'AAA',
 'AAA'
], {
 A: 'enderio:octadic_capacitor'
}).id('nadien_tweaks:compressed_octadic_capacitor')

//DOUBLE COMPRESSED OCTADIC CAPACITOR
nadien.shaped('kubejs:double_compressed_octadic_capacitor', [
 'AAA',
 'AAA',
 'AAA'
], {
 A: 'kubejs:compressed_octadic_capacitor'
}).id('nadien_tweaks:double_compressed_octadic_capacitor')

// encahanter
nadien.remove({output: 'enderio:enchanter' })
nadien.shaped('enderio:enchanter', [
 ' A ',
 'BCB',
 'DDD'
], {
 A: 'minecraft:writable_book',
 B: 'apotheosis:gem_dust',
 C: 'apotheosis:reforging_table',
 D: 'enderio_endergy:stellar_alloy_ingot'
}).id('nadien_tweaks:enchanter')

})