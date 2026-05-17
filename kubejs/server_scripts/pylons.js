ServerEvents.recipes(nadien => {


// HARVESTER PYLON
 nadien.remove({output: 'pylons:harvester_pylon' })
    nadien.shaped('pylons:harvester_pylon', [
      'AAA',
      'BCB',
      'DDD'
    ], {
      A: 'minecraft:smooth_quartz_slab',
      B: 'enderio:dark_steel_bars',
      C: 'allthecompressed:hay_block_2x',
      D: 'forbidden_arcanus:arcane_polished_darkstone',
    }).id('nadien_tweaks:harvester_pylon')


//INFUSION PYLON
nadien.remove({output: 'pylons:infusion_pylon' })
    nadien.shaped('pylons:infusion_pylon', [
      'AAA',
      'BCB',
      'DDD'
    ], {
      A: 'minecraft:smooth_quartz_slab',
      B: 'enderio:dark_steel_bars',
      C: 'allthecompressed:emerald_block_2x',
      D: 'forbidden_arcanus:arcane_polished_darkstone',
    }).id('nadien_tweaks:infusion_pylon')



})