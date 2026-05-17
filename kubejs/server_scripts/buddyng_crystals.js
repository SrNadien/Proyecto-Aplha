ServerEvents.recipes(nadien => {
  
  
    //osmiridium buddyn crystal
   nadien.shaped('buddingcrystals:budding_osmiridium', [
    "GGG",
    "GNG",
    "GGG"
  ], {
    G: 'kubejs:osmiridiumingot',
    N: 'buddingcrystals:crystal_catalyst'
  }).id('nadien_tweaks:budding_osmiridium')

  // //budding unobtanium crystal
  // nadien.shaped('buddingcrystals:budding_unobtanio', [
  //   "GGG",
  //   "GNG",
  //   "GGG"
  // ], {
  //   G: 'allthecompressed:unobtainium_block_1x',
  //   N: 'buddingcrystals:crystal_catalyst'
  // }).id('nadien_tweaks:budding_unobtainium')

  //entro budding crystal
  nadien.shaped('extendedae:entro_budding_fully', [
    "GGG",
    "GNG",
    "GGG"
  ], {
    G: 'buddingcrystals:crystal_catalyst',
    N: 'buddingcrystals:budding_entro'
  }).id('nadien_tweaks:budding_entro')

  //crystal ctalyst
  nadien.remove({output: 'buddingcrystals:crystal_catalyst' })
  nadien.shaped('buddingcrystals:crystal_catalyst', [
   'ABA',
   'BCB',
   'ABA'
  ], {
    A: 'enderio_endergy:stellar_alloy_ingot',
    B: 'immersiveengineering:plate_duroplast',
    C: 'potionsmaster:calcinated_diamond_oresight_powder'
    }).id('nadien_tweaks:crystal_catalyst')

 
})