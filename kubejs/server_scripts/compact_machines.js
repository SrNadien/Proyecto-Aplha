ServerEvents.recipes(nadien => {


//altar
 nadien.remove({output: 'compactmachines:wall' })
    nadien.shaped('compactmachines:wall', [
      'ABA',
      'BAB',
      'ABA'
    ], {
      A: 'ae2:quartz_block',
      B: 'ae2:fluix_block'
    }).id('nadien_tweaks:wall')



















})