ServerEvents.recipes(nadien => {
	
	//eliminadas
   nadien.remove({output:'hostilenetworks:sim_chamber'})
   nadien.remove({output:'hostilenetworks:loot_fabricator'})
   nadien.remove({output:'hostilenetworks:deep_learner'})
   nadien.remove({output:'hostilenetworks:blank_data_model'})
   nadien.remove({output:'hostilenetworks:prediction_matrix'})
   nadien.remove({output:'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:vindicator"]'  })
   nadien.remove({output:'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon"]' })
	
	
	//simulation chamber
  nadien.recipes.extendedcrafting.shaped_table('hostilenetworks:sim_chamber', [
    'AAAAA',
    'ABDBA',
    'ABCBA',
    'ABDBA',
    'AAAAA'
  ], {
    A: 'minecraft:crying_obsidian',
    B: '#c:gears/diamond',
    C: 'minecraft:diamond_block',
    D: 'kubejs:simulated_mechanism'
  }).id('nadien_tweaks:simulationchamber')
	 
  
    //loot fabricator
    nadien.recipes.extendedcrafting.shaped_table('hostilenetworks:loot_fabricator', [
    'AAAAA',
    'ABDBA',
    'ABCBA',
    'ABDBA',
    'AAAAA'
  ], {
    A: 'minecraft:crying_obsidian',
    B: '#c:gears/gold',
    C: 'minecraft:gold_block',
    D: 'kubejs:simulated_mechanism'
  }).id('nadien_tweaks:lootfabricator')
 
   //deep learner
   nadien.shaped('hostilenetworks:deep_learner', [
    'OCO',
    'CPC',
    'ORO'
  ], {
    P: 'minecraft:lime_stained_glass_pane',
    O: 'minecraft:obsidian',
    R: 'capacitoradditions:unobtainium_capacitor',
    C: 'ultimatefoods:nadienite_block'
  }).id('nadien_tweaks:deeplearner')
  


    //blank data model
    nadien.shaped('hostilenetworks:blank_data_model', ['UCU', 'CDC', 'UCU'], {
      U: 'avaritia:crystal_matrix_ingot',
      C: 'mob_grinding_utils:mob_swab',
      D: 'create:andesite_casing'
    }).id('nadien_tweaks:blank_data_model')

  //matrix 1
  nadien.shaped('hostilenetworks:prediction_matrix', [
    "IG ",
    "GLG",
    " GD"
  ], {
    G: 'minecraft:light_blue_stained_glass_pane',
    I: 'powah:crystal_nitro',
    L: 'minecraft:clay_ball',
    D: 'powah:crystal_nitro'
  }).id('nadien_tweaks:matrix_uno')
   

    

    
})