ServerEvents.recipes(nadien => {

//atomic reconstructor
nadien.replaceInput({id: 'actuallyadditions:atomic_reconstructor'}, 'actuallyadditions:iron_casing', 'extendedae:machine_frame')
//display stand
nadien.remove({output: 'actuallyadditions:display_stand'})
nadien.shaped('2x actuallyadditions:display_stand', [
    " R ",
    "ENE",
    "GGG"
  ], {
    E: 'actuallyadditions:ethetic_green_block',
    G: 'actuallyadditions:ethetic_white_block',
    R: 'actuallyadditions:advanced_coil',
    N: 'kubejs:conductive_mechanism'
  }).id('nadien_tweaks:displaystand')

//empowerer
nadien.remove({output: 'actuallyadditions:empowerer'})
nadien.shaped('actuallyadditions:empowerer', [
    " R ",
    " B ",
    "CDC"
  ], {
    C: 'mekanism:steel_casing',
    D: 'actuallyadditions:double_battery',
    B: 'actuallyadditions:display_stand',
    R: 'actuallyadditions:restonia_crystal'
  }).id('nadien_tweaks:empowerer')
   
  //glod
  nadien.recipes.actuallyadditions.laser('kubejs:glod_crystal', 'minecraft:gold_ingot').energy(5000)


  //elevatium
    nadien.recipes.actuallyadditions.laser('kubejs:ingot_of_elevation', 'kubejs:empowered_crystal_bundle').energy(5000)

  // empowered enory
  nadien.remove({output: 'actuallyadditions:empowered_enori_crystal'})
  nadien.recipes.actuallyadditions
        .empowering('actuallyadditions:empowered_enori_crystal',  'actuallyadditions:enori_crystal', [
            'justdirethings:blazegold_ingot',
            "minecraft:snow_block",
            'alltheores:iron_gear',
            'alltheores:iron_gear',
        ]).energy(2000).color(Color.RED.argb).time(60).id('nadien_tweaks:empowered_enori')
 
//  empowered glod
 nadien.recipes.actuallyadditions
        .empowering('kubejs:empowered_glod_crystal', 'kubejs:glod_crystal', [
            "enderio:energized_gear",
            'alltheores:lumium_gear',
            'justdirethings:ferricore_ingot',
            "minecraft:blaze_rod",
        ]).energy(2000).color(Color.RED.argb).time(60).id('nadien_tweaks:empowered_glod')



     //empowered diamatine
     nadien.remove({output: 'actuallyadditions:empowered_diamatine_crystal'})
     nadien.recipes.actuallyadditions
        .empowering("actuallyadditions:empowered_diamatine_crystal", 'actuallyadditions:diamatine_crystal', [
            'justdirethings:celestigem',
            'capacitoradditions:allthemodium_capacitor',
            'minecraft:glow_berries',
            "minecraft:clay",
        ]).energy(2000).color(Color.RED.argb).time(60).id('nadien_tweaks:empowered_diamatine')





        //empowered emeradic 
        nadien.remove({output: "actuallyadditions:empowered_emeradic_crystal"})
        nadien.recipes.actuallyadditions
        .empowering("actuallyadditions:empowered_emeradic_crystal", 'actuallyadditions:emeradic_crystal', [
            'justdirethings:eclipsealloy_ingot',
            "minecraft:slime_block",
            "capacitoradditions:vibranium_capacitor",
            "minecraft:cactus",
        ]).energy(2000).color(Color.RED.argb).time(60).id('nadien_tweaks:empowered_emeradic')



        //empowered restonia
        nadien.remove({output: "actuallyadditions:empowered_restonia_crystal"})
        nadien.recipes.actuallyadditions
        .empowering("actuallyadditions:empowered_restonia_crystal", 'actuallyadditions:restonia_crystal', [
            'alltheores:signalum_gear',
            "enderio:redstone_alloy_ingot",
            "minecraft:bricks",
            "capacitoradditions:unobtainium_capacitor",
        ]).energy(2000).color(Color.RED.argb).time(60).id('nadien_tweaks:empowered_restonia')



        //empowered void
        nadien.remove({output: "actuallyadditions:empowered_void_crystal"})
        nadien.recipes.actuallyadditions
        .empowering("actuallyadditions:empowered_void_crystal", 'actuallyadditions:void_crystal', [
             "enderio:dark_bimetal_gear",
            'alltheores:invar_gear',
          'enderio_endergy:crystalline_alloy_ingot',
            "minecraft:charcoal",
        ]).energy(2000).color(Color.RED.argb).time(60).id('nadien_tweaks:empowered_void')


  //empowered palis
  nadien.remove({output: "actuallyadditions:empowered_palis_crystal"})
  nadien.recipes.actuallyadditions
        .empowering("actuallyadditions:empowered_palis_crystal", 'actuallyadditions:palis_crystal', [
             'alltheores:lead_gear',
            "minecraft:prismarine_shard",
            "mekanism:hdpe_sheet",
           'enderio_endergy:melodic_alloy_ingot',
        ]).energy(2000).color(Color.RED.argb).time(60).id('nadien_tweaks:empowered_palis')


        //empowered crystal bundle
       nadien.recipes.actuallyadditions.empowering("kubejs:empowered_crystal_bundle", 'kubejs:crystal_bundle', [
             "actuallyadditions:solidified_experience",
            "actuallyadditions:solidified_experience",
            "actuallyadditions:solidified_experience",
           "actuallyadditions:solidified_experience",
        ]).energy(2000).color(Color.RED.argb).time(60).id('nadien_tweaks:empowered_crystal_budle')


})