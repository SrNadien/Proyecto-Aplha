const $CreatingFluxRecipe = Java.loadClass('sonar.fluxnetworks.client.jei.CreatingFluxRecipe')
const $CreatingFluxRecipeCategory = Java.loadClass('sonar.fluxnetworks.client.jei.CreatingFluxRecipeCategory')

RecipeViewerEvents.addEntries('item', nadien => {
   let jeiRuntime = global.jeiRuntime
    if(!jeiRuntime) {
        console.log('Jei Runtime not found, skipping recipes')
        return
    }

    let RecipeManager = jeiRuntime.getRecipeManager()
    global.flux.forEach(recipe => {
        let customFlux = new $CreatingFluxRecipe(recipe.baseBlock, recipe.clickedBlock, recipe.inputItem, recipe.outputItem)
        RecipeManager.addRecipes($CreatingFluxRecipeCategory.RECIPE_TYPE, [customFlux])
    })
  
 const netherstarx = ['allthecompressed:nether_star_block_1x', 'allthecompressed:nether_star_block_2x', 'allthecompressed:nether_star_block_3x', 'allthecompressed:nether_star_block_4x', 'allthecompressed:nether_star_block_5x', 'allthecompressed:nether_star_block_6x', 'allthecompressed:nether_star_block_7x', 'allthecompressed:nether_star_block_8x', 'allthecompressed:nether_star_block_9x']
//  const botanypots = ["botanypots:terracotta_botany_pot", "botanypots:terracotta_hopper_botany_pot", "botanypotstiers:elite_terracotta_botany_pot", "botanypotstiers:elite_terracotta_botany_pot", "botanypotstiers:mega_terracotta_botany_pot", "botanypotstiers:mega_terracotta_hopper_botany_pot", "botanypotstiers:ultra_terracotta_botany_pot", "botanypotstiers:ultra_terracotta_hopper_botany_pot", ]

  nadien.add('reliquary:magicbane')
  nadien.add('mysticalagradditions:neutronium_crux')
  nadien.add('ironfurnaces:allthemodium_furnace')
  nadien.add('ironfurnaces:vibranium_furnace')
  nadien.add('ironfurnaces:unobtainium_furnace')
  nadien.add(netherstarx)
  nadien.add(['allthecompressed:nether_star_block_1x', 'allthecompressed:nether_star_block_2x', 'allthecompressed:nether_star_block_3x', 'allthecompressed:nether_star_block_4x', 'allthecompressed:nether_star_block_5x', 'allthecompressed:nether_star_block_6x', 'allthecompressed:nether_star_block_7x', 'allthecompressed:nether_star_block_8x', 'allthecompressed:nether_star_block_9x'])
  nadien.add('create:refined_radiance_casing')


  const nadiens = 'minecraft:player_head[profile={id:[I;2118518208,-1698609149,-1383017808,204096419],name:"SrNadien",properties:[{name:"textures",signature:"iLgnxHTGPCRyIti3vMv7q2OJA6DT/UIWiY/U+PMjiWs3HYj686G5McPoHPggUqPUCWCsZOO0M1zEd7tYK28R6L7xqvSOSsvLtqUB/BNOv8aAbwOEns9rKHQGLNYbyiM46Y+PZQT1iHYzeVRJQTal2PpR+wujTf1yr5gy2n7v3OwrdpZghqgqGdZxoChKFSw1E8+Knh4eHWV2yWmyFGU10MgGmYOH0jDm597GClFzyp0fhoh2Gv5dLNXRkQXrrc0umhjJ08McRNvk7Q2bsvjN5YmUTLTLoIEpKKDpCwhvl1c2TqO4+jLSc0ksRuawZvbyMCsFPweml42kLabaA8H1MXijDDL/M0OwqgaRUb+s6Vd+DFuICZtSstdcxActluHdW+r7155JsVCAte7e1pYJQdC08UPlvbfTcYrTWO88vLwn/YKT5WUWqADlwU8927t3VhLcWDMJpjl2KSqiUnYTEkkCeAhKEjcTFOWI3qi3cNC+dFmha1Smq2x1av9fP5N/uw1YhmF+7M8vLYusjkYgY1iFapwVRc1L96xnXZrTIrMCAQ5Su8Ts13XTraJ0GUEVzZAXlSKwPt8U6aJm6+r9j9LKfh8RWgLHaEu2a44Li9jlNb+sggaiPzg01ywuXcTsgEoK/D/MZUgxuXmSM73NOV+yv9pdjJHPdaMgRqHualg=",value:"ewogICJ0aW1lc3RhbXAiIDogMTc1OTI2NjY0NzQ0NCwKICAicHJvZmlsZUlkIiA6ICI3ZTQ2MDVjMDlhYzE0ODAzYWQ5MGQyYjAwYzJhNDNhMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJTck5hZGllbiIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS83ZGQ2YWQ2MTYyMDBkNzNkZjA4NDUyYWMyYmE1MzVhY2FhMGQ1MmU0ZDhlNWM3YjAwNDg0MjNkNGVhMDE5Nzg0IgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81NjliN2YyYTFkMDBkMjZmMzBlZmUzZjlhYjlhYzgxN2IxZTZkMzVmNGYzY2ZiMDMyNGVmMmQzMjgyMjNkMzUwIgogICAgfQogIH0KfQ=="}]}]'
  nadien.add(nadiens)
})

RecipeViewerEvents.removeEntries('item', nadien => {
  nadien.remove('reliquary:rod_of_lyssa')
  nadien.remove('mekanism:upgrade_anchor')
  nadien.remove('ars_nouveau:glyph_animate_block')
  nadien.remove(/generatorgalore:.*_upgrade/)
  nadien.remove('ironfurnaces:upgrade_iron')
  nadien.remove('ironfurnaces:upgrade_gold')
  nadien.remove('ironfurnaces:upgrade_diamond')
  nadien.remove('ironfurnaces:upgrade_emerald')
  nadien.remove('ironfurnaces:upgrade_obsidian')
  nadien.remove('ironfurnaces:upgrade_crystal')
  nadien.remove(  'ironfurnaces:upgrade_netherite' )
  nadien.remove(  'ironfurnaces:upgrade_copper' )
  nadien.remove(  'ironfurnaces:upgrade_silver' )
  nadien.remove(  'ironfurnaces:upgrade_obsidian2' )
  nadien.remove(  'ironfurnaces:upgrade_iron2' )
  nadien.remove(  'ironfurnaces:upgrade_gold2' )
  nadien.remove(  'ironfurnaces:upgrade_silver2' )
  nadien.remove(  'justdynathings:ticker' )
  nadien.remove(  'justdynathings:advanced_time_wand' )
  nadien.remove(  'justdirethings:time_wand' )
  nadien.remove(  ['chickens:henhouse', 'chickens:henhouse_spruce', 'chickens:henhouse_birch', 'chickens:henhouse_jungle', 'chickens:henhouse_acacia', 'chickens:henhouse_dark_oak'] )
  
  //desabilitado
  nadien.remove([
    'avaritia:infinity_horse_armor',
    'reliquary:holy_hand_grenade',
    'apotheosis:gem',
    'avaritia:singularity',
    'avaritia:compressed_crafting_table',
    'avaritia:double_compressed_crafting_table',
    'avaritia:neutron_compressor',
    'avaritia:extreme_crafting_table',
    'cataclysm:tidal_claws',
    'mob_grinding_utils:ender_inhibitor_off',
    'industrialforegoing:animal_baby_separator',
    'industrialforegoing:animal_rancher',
    'industrialforegoing:animal_feeder',
    'farmingforblockheads:feeding_trough',
    'create:handheld_worldshaper',
    'mekanism:personal_chest',
    'avaritia:extreme_crafting_table',
    'avaritia:double_compressed_crafting_table',
    'avaritia:compressed_crafting_table',
    'avaritia:neutronium_compressor',
    'industrialforegoing:enchantment_extractor',
    'mekanism:personal_barrel',
    'ftbquests:stage_barrier',
    'mob_grinding_utils:gm_chicken_feed',
    'ftbquests:barrier',
   'allthemodium:teleport_pad',
   'cobblestone_generator:amethyst_cobblegen', 
   'cobblestone_generator:redstone_cobblegen', 
    'cobblestone_generator:glowstone_cobblegen', 
    'cobblestone_generator:hayblock_cobblegen', 
    'cobblestone_generator:sculk_cobblegen'
  ])

   //baneado
   nadien.remove([
    'industrialforegoing:hydroponic_bed',
        'reliquary:holy_hand_grenade',
        'reliquary:magicbane',
        'ae2wtlib:magnet_card',
        'industrialforegoing:mycelial_disenchantment',
        'industrialforegoing:enchantment_sorter',
        'industrialforegoing:enchantment_extractor',
        'industrialforegoing:enchantment_factory',
        'ae2:tiny_tnt',
        'minecraft:tnt',
        'gag:fishing_dynamite',
        'gag:mining_dynamite',
        'forbidden_arcanus:quantum_catcher',
        'artifacts:universal_attractor',
       'mekanismgenerators:electromagnetic_coil',
       'mekanismgenerators:turbine_casing',
       'mekanismgenerators:turbine_casing',
       'mekanismgenerators:turbine_valve',
       'mekanismgenerators:turbine_blade',
       'mekanismgenerators:turbine_rotor',
       'mekanismgenerators:saturating_condenser',
       'mekanismgenerators:rotational_complex',
       'mekanismgenerators:advanced_solar_generator',
       'mekanismgenerators:wind_generator',
    'minecraft:bundle',
    'gag:mining_dynamite',
    'gag:fishing_dynamite',
    'ars_nouveau:glyph_lightning',
    'ars_nouveau:glyph_explosion',
    'ars_nouveau:glyph_launch',
    'ars_nouveau:glyph_break',
    'ae2wtlib:magnet_card',
    'mekanism:module_magnetic_attraction_unit',
    'enderio:electromagnet',
    'artifacts:universal_attractor',
    'immersiveengineering:toolbox',
    'reliquary:alkahestry_tome',
    'industrialforegoing:infinity_nuke',
    'enchanted:enchanted_broomstick',
    'enchanted:broom',
    'mekanismadditions:obsidian_tnt',
    'industrialforegoing:enchantment_extractor',
    'mekmm:scrap_box',
    'rftoolsutility:spawner',
    'justdynathings:ticker',
    'immersiveengineering:toolbox', 
    'ae2:tiny_tnt', 
    'industrialforegoing:enchantment_extractor', 
    'sophisticatedbackpacks:advanced_magnet_upgrade', 
    'advanced_ae:pick_craft_card', 
    'apothic_enchanting:ender_lead', 
    'justdynathings:advanced_time_wand', 
    'justdirethings:time_wand',
    'minecraft:tnt',
    'ars_nouveau:storage_lectern', 
    'customnpcs:npcmounter', 
    'advanced_ae:auto_stock_card', 
    'apothic_enchanting:occult_ender_lead', 
    'customnpcs:npcsoulstoneempty', 
    'industrialforegoing:mechanical_dirt', 
    'advanced_ae:magnet_card', 
    'customnpcs:npcborder', 
    'enchanted:broom', 
    'curvy_pipes:huge_item_pipe', 
    'customnpcs:nbt_book', 
    'customnpcs:npcredstoneblock', 
    'advanced_ae:hp_buffer_card', 
    'advanced_ae:regeneration_card', 
    'irregular_implements:ender_letter', 
    'pickletweaks:magnet', 
    'sophisticatedstorage:magnet_upgrade', 
    'ae2:cell_workbench', 
    'industrialforegoing:infinity_nuke', 
    'advanced_ae:camo_card', 
    'advanced_ae:strength_card', 
    'advanced_ae:luck_card', 
    'mob_grinding_utils:xpsolidifier', 
    'apothic_enchanting:occult_ender_lead', 
    'customnpcs:npcteleporter', 
    'sophisticatedstorage:advanced_magnet_upgrade', 
    'customnpcs:npccopyblock', 
    'industrialforegoing:enchantment_factory', 
    'customnpcs:npcmailbox'
   ])


  if (global.chunk) {
    nadien.remove('mekanism:dimensional_stabilizer')
    nadien.remove('ae2:spatial_anchor')
  }
})

RecipeViewerEvents.addInformation('item', nadien => {
  // const mekatraje = ['mekanism:mekasuit_helmet', 'mekanism:mekasuit_bodyarmor', 'mekanism:mekasuit_pants', 'mekanism:mekasuit_boots']
  // nadien.add(mekatraje, ['ESTA SIN AGREGAR', 'PROXIMAMENTE'])

  nadien.add('kubejs:mek_mechanism', ['¿¿¿???', 'es una cabeza de nadien'])


  const ban = [
    'mekanism:upgrade_anchor',
     'industrialforegoing:hydroponic_bed',
        'reliquary:holy_hand_grenade',
        'reliquary:magicbane',
        'ae2wtlib:magnet_card',
        'industrialforegoing:mycelial_disenchantment',
        'industrialforegoing:enchantment_sorter',
        'industrialforegoing:enchantment_extractor',
        'industrialforegoing:enchantment_factory',
        'ae2:tiny_tnt',
        'minecraft:tnt',
        'gag:fishing_dynamite',
        'gag:mining_dynamite',
        'forbidden_arcanus:quantum_catcher',
        'artifacts:universal_attractor',
       'mekanismgenerators:electromagnetic_coil',
       'mekanismgenerators:turbine_casing',
       'mekanismgenerators:turbine_casing',
       'mekanismgenerators:turbine_valve',
       'mekanismgenerators:turbine_blade',
       'mekanismgenerators:turbine_rotor',
       'mekanismgenerators:saturating_condenser',
       'mekanismgenerators:rotational_complex',
       'mekanismgenerators:advanced_solar_generator',
       'mekanismgenerators:wind_generator',
    'minecraft:bundle',
    'gag:mining_dynamite',
    'gag:fishing_dynamite',
    'ars_nouveau:glyph_lightning',
    'ars_nouveau:glyph_explosion',
    'ars_nouveau:glyph_launch',
    'ars_nouveau:glyph_break',
    'ae2wtlib:magnet_card',
    'mekanism:module_magnetic_attraction_unit',
    'enderio:electromagnet',
    'artifacts:universal_attractor',
    'immersiveengineering:toolbox',
    'reliquary:alkahestry_tome',
    'industrialforegoing:infinity_nuke',
    'enchanted:enchanted_broomstick',
    'enchanted:broom',
    'mekanismadditions:obsidian_tnt',
    'industrialforegoing:enchantment_extractor',
    'mekmm:scrap_box',
    'rftoolsutility:spawner',
    'justdynathings:ticker',
    'immersiveengineering:toolbox', 
    'ae2:tiny_tnt', 
    'industrialforegoing:enchantment_extractor', 
    'sophisticatedbackpacks:advanced_magnet_upgrade', 
    'advanced_ae:pick_craft_card', 
    'apothic_enchanting:ender_lead', 
    'justdynathings:advanced_time_wand', 
    'justdirethings:time_wand',
    'minecraft:tnt',
    'ars_nouveau:storage_lectern', 
    'customnpcs:npcmounter', 
    'advanced_ae:auto_stock_card', 
    'apothic_enchanting:occult_ender_lead', 
    'customnpcs:npcsoulstoneempty', 
    'industrialforegoing:mechanical_dirt', 
    'advanced_ae:magnet_card', 
    'customnpcs:npcborder', 
    'enchanted:broom', 
    'curvy_pipes:huge_item_pipe', 
    'customnpcs:nbt_book', 
    'customnpcs:npcredstoneblock', 
    'advanced_ae:hp_buffer_card', 
    'advanced_ae:regeneration_card', 
    'irregular_implements:ender_letter', 
    'pickletweaks:magnet', 
    'sophisticatedstorage:magnet_upgrade', 
    'ae2:cell_workbench', 
    'industrialforegoing:infinity_nuke', 
    'advanced_ae:camo_card', 
    'advanced_ae:strength_card', 
    'advanced_ae:luck_card', 
    'mob_grinding_utils:xpsolidifier', 
    'apothic_enchanting:occult_ender_lead', 
    'customnpcs:npcteleporter', 
    'sophisticatedstorage:advanced_magnet_upgrade', 
    'customnpcs:npccopyblock', 
    'industrialforegoing:enchantment_factory', 
    'customnpcs:npcmailbox'
   ]

   const deshabilitado = [
    'mekanism:upgrade_anchor',
    'avaritia:infinity_horse_armor',
    'reliquary:holy_hand_grenade',
    'apotheosis:gem',
    'avaritia:singularity',
    'avaritia:compressed_crafting_table',
    'avaritia:double_compressed_crafting_table',
    'avaritia:neutron_compressor',
    'avaritia:extreme_crafting_table',
    'cataclysm:tidal_claws',
    'mob_grinding_utils:ender_inhibitor_off',
    'industrialforegoing:animal_baby_separator',
    'industrialforegoing:animal_rancher',
    'industrialforegoing:animal_feeder',
    'farmingforblockheads:feeding_trough',
    'create:handheld_worldshaper',
    'mekanism:personal_chest',
    'avaritia:extreme_crafting_table',
    'avaritia:double_compressed_crafting_table',
    'avaritia:compressed_crafting_table',
    'avaritia:neutronium_compressor',
    'industrialforegoing:enchantment_extractor',
    'mekanism:personal_barrel',
    'ftbquests:stage_barrier',
    'mob_grinding_utils:gm_chicken_feed',
    'ftbquests:barrier',
   'allthemodium:teleport_pad',
   'cobblestone_generator:amethyst_cobblegen', 
   'cobblestone_generator:redstone_cobblegen', 
    'cobblestone_generator:glowstone_cobblegen', 
    'cobblestone_generator:hayblock_cobblegen', 
    'cobblestone_generator:sculk_cobblegen'
    ]
   

    //jei descriptions(info)
   nadien.add(ban, ['ITEMS BANEADOS TETE', 'TUTO NENEEEEEEEEE'])
   nadien.add(deshabilitado, ['ITEMS DESACTIVADOS TETE', 'TUTO NENEEEEEEEEE'])
   nadien.add('ultimatefoods:galactic_star', ['Estrella Galactica', 'Hora Del Gamemode 1 A Crafter Iteems Del Creativo'])


})
