ServerEvents.recipes(nadien => {
  //Remove the anchor
  nadien.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  nadien.remove({ type: 'mekanism:combining', id: /ore/ })

  // kubejs/server_scripts/crushing.js

  const inputs = [
    'minecraft:end_stone'
  ]

  const outputs = [
    'occultism:crushed_end_stone'
  ]

    inputs.forEach((input, index) => {
      nadien.custom({
        type: 'mekanism:crushing',
        input: Ingredient.of(input).toJson(),
        output: {
          id: outputs[index],
          count: 1
        }
      }).id(`kubejs:mekanism/crushing/${outputs[index].split(':')[1]}`)
    })

   
    nadien.custom({"type":"mekanism:metallurgic_infusing","chemical_input":{"amount":40,"tag":"mekanism:redstone"},"item_input":{"count":1,"item":"minecraft:obsidian"},"output":{"count":1,"id":"fluxnetworks:flux_dust"},"per_tick_usage":false}).id('nadien:mekanism/infusing/flux_dust')




  // =============================Ported===============================

  //eliminadas
	nadien.remove({output:'mekanism:personal_chest'})
  nadien.remove({output:'mekanism:atomic_disassembler'})
	nadien.remove({output:'mekanism:robit'})
	nadien.remove({output:'mekanism:flamethrower'})
	nadien.remove({output:'mekanism:scuba_tank'})
	nadien.remove({output:'mekanism:free_runners'})
	nadien.remove({output:'mekanism:free_runners_armored'})
	nadien.remove({output:'mekanism:personal_barrel'})
	nadien.remove({output:'mekanismgenerators:wind_generator'})
	nadien.remove({output:'mekanismgenerators:heat_generator'})
	nadien.remove({output:'mekanism:metallurgic_infuser'})
	nadien.remove({output:'mekanism:steel_casing'})
	nadien.remove({output:'mekanism:enrichment_chamber'})
	nadien.remove({output:'mekanism:basic_energy_cube'})
	nadien.remove({output:'mekanism:purification_chamber'})
	nadien.remove({output:'mekanism:electric_pump'})
	nadien.remove({output:'mekanism:energy_tablet'})
	nadien.remove({output:'mekanism:electrolytic_separator'})
	nadien.remove({output:'mekanism:precision_sawmill'})
	nadien.remove({output:'mekanism:jetpack'})
	nadien.remove({output:'mekanismgenerators:solar_generator'})
	nadien.remove({output:'mekanism:basic_universal_cable'})
	nadien.remove({output:'mekanism:basic_logistical_transporter'})
	nadien.remove({output:'mekanism:basic_thermodynamic_conductor'})
	nadien.remove({output:'mekanism:basic_tier_installer'})
	nadien.remove({output:'mekanism:advanced_tier_installer'})
	nadien.remove({output:'mekanism:elite_tier_installer'})
	nadien.remove({output:'mekanism:ultimate_tier_installer'})
	nadien.remove({output:'mekanism:basic_logistical_transporter'})
	nadien.remove({output:'mekanism:advanced_logistical_transporter'})
	nadien.remove({output:'mekanism:elite_logistical_transporter'})
	nadien.remove({output:'mekanism:ultimate_logistical_transporter'})
	nadien.remove({output:'mekanism:restrictive_transporter'})
	nadien.remove({output:'mekanism:diversion_transporter'})
	nadien.remove({output:'mekanism:digital_miner'})
	nadien.remove({output:'mekanism:basic_bin'})
	nadien.remove({output:'mekanism:module_blasting_unit'})
	nadien.remove({output:'mekanism:upgrade_anchor'})
	nadien.remove({output:'mekanism:alloy_infused'})
	nadien.remove({output:'mekanism:basic_control_circuit'})
	nadien.remove({output:'mekanism:combiner'})
	// nadien.remove({output:'immersiveengineering:concrete_leaded'})
	nadien.remove({output: 'hostilenetworks:prediction_matrix' })
	nadien.remove({output:'mekanism:chemical_oxidizer'})
	nadien.remove({ id: 'mekanism:alloys/infused' });
	nadien.remove({ id: 'mekanism:basic_control_circuit' });
  nadien.remove({ id: 'mekanism:crusher' });
  nadien.remove({ output: 'mekanism:chemical_infuser' });
  nadien.remove({ output: 'mekanismgenerators:fusion_reactor_frame' });
  nadien.remove({ output: 'mekanismgenerators:fission_reactor_casing' });
  nadien.remove({ output: 'mekanism:chemical_dissolution_chamber' });
  nadien.remove({ output: 'mekanismgenerators:gas_burning_generator' });
  nadien.remove({ output: 'mekanism:chemical_washer' });                                                                                                                                                                                     
  nadien.remove({ output: 'mekanism:resistive_heater' });
  nadien.remove({ output: 'mekanism:laser' });
  nadien.remove({ output: 'mekanismgenerators:fusion_reactor_frame' });
  nadien.remove({ output: 'mekanismgenerators:gas_burning_generator' });
  nadien.remove({ output: 'mekanismgenerators:fission_reactor_casing' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/chorus_flower' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/crossbow' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/crying_obsidian' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/crying_obsidian' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/crying_obsidian' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/dragon_egg' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/emerald' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/enchanted_golden_apple' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/ender_chest' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/glowstone_block' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/heart_of_the_sea' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/iron' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/lapis_block' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/nautilus_shell' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/phantom_membrane' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/quartz_block' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/redstone_block' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/respawn_anchor' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/trident' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/wither_skeleton_skull' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/diamond' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/end_crystal' });


  //generador de calor
nadien.shaped('mekanismgenerators:heat_generator', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#c:plates/iron',
  C: '#c:plates/iron',
  Q: '#c:plates/iron',
  I: '#minecraft:planks',
  L: '#c:plates/osmium',
  W: '#minecraft:planks',
  E: 'enderio:ender_crystal',
  H: 'minecraft:blast_furnace',
  P: 'enderio:ender_crystal'
}).id('nadien_tweaks:generadordecalor')
  
//infusor metalurgico
  nadien.shaped('mekanism:metallurgic_infuser', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#c:plates/iron',
  C: 'minecraft:blast_furnace',
  Q: '#c:plates/iron',
  I: 'minecraft:redstone',
  L: '#c:plates/osmium',
  W: 'minecraft:redstone',
  E: '#c:plates/iron',
  H: 'minecraft:blast_furnace',
  P: '#c:plates/iron'
}).id('nadien_tweaks:infussormetalurgico')

//tuvo de energia basico
  nadien.shaped('mekanism:basic_energy_cube', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:energy_tablet',
  Q: 'mekanism:alloy_infused',
  I: '#c:plates/steel',
  L: 'mekanism:steel_casing',
  W: '#c:plates/steel',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:energy_tablet',
  P: 'mekanism:alloy_infused'
}).id('nadien_tweaks:cubodeenergia')

//purificadora
  nadien.shaped('mekanism:purification_chamber', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:advanced_control_circuit',
  Q: 'mekanism:alloy_infused',
  I: '#c:plates/osmium',
  L: 'mekanism:steel_casing',
  W: '#c:plates/osmium',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:advanced_control_circuit',
  P: 'mekanism:alloy_infused'
}).id('nadien_tweaks:purificadora')

//panel solar 2
  nadien.shaped('mekanismgenerators:solar_panel', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'minecraft:glass_pane',
  C: 'minecraft:glass_pane',
  Q: 'minecraft:glass_pane',
  I: 'mekanism:alloy_reinforced',
  L: 'mekanism:alloy_infused',
  W: 'mekanism:alloy_reinforced',
  E: '#c:plates/osmium',
  H: '#c:plates/osmium',
  P: '#c:plates/osmium'
}).id('nadien_tweaks:panelsolardos')

//bomba electrica
  nadien.shaped('mekanism:electric_pump', [
  'TCQ',
  'ILW',
  'EHP'
], {
T: 'mob_grinding_utils:spawner_upgrade_height',
C: 'minecraft:bucket',
  Q: 'mob_grinding_utils:spawner_upgrade_height',
  I: 'mekanism:alloy_infused',
  L: 'mekanism:steel_casing',
  W: 'mekanism:alloy_infused',
  E: '#c:plates/osmium',
  H: '#c:plates/osmium',
  P: '#c:plates/osmium'
}).id('nadien_tweaks:bombaelectrica')

//tabla de energia
  nadien.shaped('mekanism:energy_tablet', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#c:plates/steel',
  C: '#c:plates/gold',
  Q: '#c:plates/steel',
  I: 'mekanism:alloy_infused',
  L: '#c:plates/gold',
  W: 'mekanism:alloy_infused',
  E: '#c:plates/steel',
  H: '#c:plates/gold',
  P: '#c:plates/steel'
}).id('nadien_tweaks:tabletadeenergia')

//separador de electrolitos
  nadien.shaped('mekanism:electrolytic_separator', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#c:plates/steel',
  C: 'mekanism:alloy_infused',
  Q: '#c:plates/steel',
  I: 'mekanism:alloy_infused',
  L: 'mekanism:electrolytic_core',
  W: 'mekanism:alloy_infused',
  E: '#c:plates/steel',
  H: 'mekanism:alloy_infused',
  P: '#c:plates/steel'
}).id('nadien_tweaks:separadordeelectrolitos')

//cortadora de madera
  nadien.shaped('mekanism:precision_sawmill', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#c:plates/steel',
  C: 'mekanism:advanced_control_circuit',
  Q: '#c:plates/steel',
  I: 'mekanism:alloy_infused',
  L: 'mekanism:steel_casing',
  W: 'mekanism:alloy_infused',
  E: '#c:plates/steel',
  H: 'mekanism:advanced_control_circuit',
  P: '#c:plates/steel'
}).id('nadien_tweaks:sierrameka')

//generador solar
  nadien.shaped('mekanismgenerators:solar_generator', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanismgenerators:solar_panel',
  C: 'mekanismgenerators:solar_panel',
  Q: 'mekanismgenerators:solar_panel',
  I: 'mekanism:alloy_reinforced',
  L: '#c:plates/steel',
  W: 'mekanism:alloy_reinforced',
  E: '#c:plates/osmium',
  H: 'mekanism:energy_tablet',
  P: '#c:plates/osmium'
}).id('nadien_tweaks:generadorsolar')



//tubo universal basico

  nadien.shaped('8x mekanism:basic_universal_cable', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#c:plates/steel',
  C: '#c:plates/steel',
  Q: '#c:plates/steel',
  I: 'minecraft:glass',
  L: 'minecraft:redstone',
  W: 'minecraft:glass',
  E: '#c:plates/steel',
  H: '#c:plates/steel',
  P: '#c:plates/steel'
}).id('nadien_tweaks:cableuniversal')

//tubo presurizado basico
  nadien.shaped('8x mekanism:basic_pressurized_tube', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#c:plates/steel',
  C: '#c:plates/steel',
  Q: '#c:plates/steel',
  I: 'minecraft:glass',
  L: 'minecraft:glass',
  W: 'minecraft:glass',
  E: '#c:plates/steel',
  H: '#c:plates/steel',
  P: '#c:plates/steel'
});

//tubo conductor de energia
   nadien.shaped('8x mekanism:basic_thermodynamic_conductor', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#c:plates/steel',
  C: '#c:plates/steel',
  Q: '#c:plates/steel',
  I: 'minecraft:glass',
  L: 'alltheores:copper_plate',
  W: 'minecraft:glass',
  E: '#c:plates/steel',
  H: '#c:plates/steel',
  P: '#c:plates/steel'
}).id('nadien_tweaks:tuboconductor')

//instalador definitivo
  nadien.shaped('mekanism:ultimate_tier_installer', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_atomic',
  C: 'mekanism:ultimate_control_circuit',
  Q: 'mekanism:alloy_atomic',
  I: '#c:plates/enderium',
  L: '#minecraft:planks',
  W: '#c:plates/enderium',
  E: 'mekanism:alloy_atomic',
  H: 'mekanism:ultimate_control_circuit',
  P: 'mekanism:alloy_atomic'
}).id('nadien_tweaks:instalador_definitivo_aalt')

//enriquesedora
  nadien.shaped('mekanism:enrichment_chamber', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:advanced_control_circuit',
  Q: 'mekanism:alloy_infused',
  I: '#c:plates/diamond',
  L: 'mekanism:steel_casing',
  W: '#c:plates/diamond',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:advanced_control_circuit',
  P: 'mekanism:alloy_infused'
}).id('nadien_tweaks:enriquesedora')

//combinador
  nadien.shaped('mekanism:combiner', [
  'TCQ',
  'ILI',
  'EHP'
], {
  T: 'mekanism:alloy_reinforced',
  C: 'mekanism:elite_control_circuit',
  Q: 'mekanism:alloy_reinforced',
  I: 'allthecompressed:gold_block_1x',
  L: 'mekanism:steel_casing',
  E: 'mekanism:alloy_reinforced',
  H: 'mekanism:elite_control_circuit',
  P: 'mekanism:alloy_reinforced'
}).id('nadien_tweaks:combinador')

//oxidizer
  nadien.shaped('mekanism:chemical_oxidizer', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:basic_control_circuit',
  Q: 'mekanism:alloy_infused',
  I: 'sophisticatedstorage:netherite_chest[sophisticatedcore:main_color=-8337633,sophisticatedcore:accent_color=-8337633]',
  L: 'mekanism:dynamic_tank',
  W: 'mekanism:basic_chemical_tank',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:basic_control_circuit',
  P: 'mekanism:alloy_infused'
}).id('nadien_tweaks:oxydadorchemico')

//jetpack
nadien.shaped('mekanism:jetpack', [
  ' C ',
  'ELE',
  'PHP'
], {
  C: 'mekanism:ultimate_energy_cube',
  L: 'mekanism:energy_tablet',
  E: 'mekanism:alloy_atomic',
  H: 'mekanism:ultimate_chemical_tank',
  P: 'mekanism:ingot_refined_obsidian'
}).id('nadien_tweaks:jetpack')

//istalador basico
nadien.shaped('mekanism:basic_tier_installer', [
  'PAP',
  'CBC',
  'PAP'
], {
  A: '#mekanism:alloys/infused',
  B: '#c:circuits/basic',
  C: 'kubejs:osmiridiumingot',
  P: '#c:plates/steel'
}).id('nadien_tweaks:basic_tier_installer')

//instalador avanzado
nadien.shaped('mekanism:advanced_tier_installer', [
  'BCB',
  'IPI',
  'BAB'
], {
  A: '#mekanism:alloys/infused',
  C: '#c:circuits/advanced',
  I: 'kubejs:energized_osmium_ingot',
  P: 'mekanism:basic_tier_installer',
  B:  '#c:plates/lumium',
}).id('nadien_tweaks:advanced_tier_installer')

//instalador elite
nadien.shaped('mekanism:elite_tier_installer', [
  'BCB',
  'IPI',
  'BAB'
], {
  A: '#mekanism:alloys/reinforced',
  C: '#c:circuits/elite',
  I: 'kubejs:cosmic_alloy',
  P: 'mekanism:advanced_tier_installer',
  B: '#c:plates/signalum'
}).id('nadien_tweaks:elite_tier_installer')



//instalador definitivo
nadien.shaped('mekanism:ultimate_tier_installer', [
  'ACA',
  'IPI',
  'ACA'
], {
  A: '#mekanism:alloys/atomic',
  C: '#c:circuits/ultimate',
  I: 'mekanism:hdpe_sheet',
  P: 'mekanism:elite_tier_installer'
}).id('nadien_tweaks:ultimate_tier_installer')

// Carcasa reactor de fusión
nadien.shaped(Item.of('mekanismgenerators:fusion_reactor_frame', 4), [
  'A#A',
  '#X#',
  'A#A'
], {
  '#': '#c:pellets/polonium',
  A: '#c:alloys/ultimate',
  X: 'mekanism:steel_casing'
}).id('nadien_tweaks:carcasareactorfision')

// Trituradora
nadien.shaped('mekanism:crusher', [
  'RCR',
  'BXB',
  'RCR'
], {
  B: 'minecraft:lava_bucket',
  C: '#c:circuits/basic',
  R: 'minecraft:redstone', // redstone es vanilla
  X: 'mekanism:steel_casing'
}).id('nadien_tweaks:trituradora')

// Carcasa reactor de fisión
nadien.shaped(Item.of('mekanismgenerators:fission_reactor_casing', 4), [
  ' I ',
  'IXI',
  ' I '
], {
  I: '#c:ingots/lead',
  X: 'mekanism:steel_casing'
}).id('nadien_tweaks:carcasareactofission')

// Cámara de disolución química
nadien.shaped('mekanism:chemical_dissolution_chamber', [
  'ITI',
  'CXC',
  'ITI'
], {
  C: '#c:circuits/ultimate',
  I: '#c:ingots/refined_obsidian',
  T: 'mekanism:basic_chemical_tank',
  X: 'mekanism:steel_casing'
}).id('nadien_tweaks:camaradedisolucion')

// Generador de gas
const osmio = ['mekanism:ingot_osmium', 'alltheores:osmium_ingot', 'megacells:sky_osmium_ingot']
nadien.shaped('mekanismgenerators:gas_burning_generator', [
  'OAO',
  'XCX',
  'OAO'
], {
  A: 'mekanism:alloy_infused',
  C: 'mekanism:electrolytic_core',
  O: osmio,
  X: 'mekanism:steel_casing'
}).id('nadien_tweaks:gas_burning_generator')

// Lavadora química
nadien.shaped('mekanism:chemical_washer', [
  'IBI',
  'CXC',
  'ITI'
], {
  B: 'mekanism:basic_fluid_tank',
  C: '#c:circuits/ultimate',
  I: '#c:ingots/refined_obsidian',
  T: 'mekanism:basic_chemical_tank',
  X: 'mekanism:steel_casing'
}).id('nadien_tweaks:lavarropas')

// Calentador resistente
nadien.shaped('mekanism:resistive_heater', [
  'IRI',
  'RXR',
  'IEI'
], {
  E: 'mekanism:energy_tablet',
  I: '#c:ingots/tin',
  R: 'minecraft:redstone',
  X: 'mekanism:steel_casing'
}).id('nadien_tweaks:hornoalena')

// Láser
nadien.shaped('mekanism:laser', [
  'AE ',
  'AXB',
  'AE '
], {
  B: 'minecraft:diamond',
  A: 'mekanism:alloy_reinforced',
  E: 'mekanism:energy_tablet',
  X: 'mekanism:steel_casing'
}).id('nadien_tweaks:laserxd')

// QIO Drive Array
nadien.shaped('mekanism:qio_drive_array', [
  'IGI',
  'CAC',
  'ITI'
], {
  A: 'sophisticatedstorage:netherite_chest[sophisticatedcore:main_color=-8337633,sophisticatedcore:accent_color=-8337633]',
  C: 'mekanism:ultimate_control_circuit',
  G: 'minecraft:glass_pane',
  I: 'mekanism:pellet_polonium',
  T: 'mekanism:teleportation_core'
}).id('nadien_tweaks:qio')

// Laser Beam
nadien.shaped('mekanism:laser_tractor_beam', [
  'P',
  '#'
], {
  '#': 'mekanism:laser_amplifier',
  P: 'sophisticatedstorage:netherite_chest[sophisticatedcore:main_color=-8337633,sophisticatedcore:accent_color=-8337633]'
}).id('nadien_tweaks:laserbeam')

//chemical infusion
nadien.shaped('mekanism:chemical_infuser', [
  'ABA',
  'DEF',
  'ACA'
], {
  A: 'mekanism:alloy_atomic',
  B: 'mekanism:ultimate_control_circuit',
  C: 'mekanism:elite_control_circuit',
  D: 'mekanism:elite_chemical_tank',
  E: 'mekanism:steel_casing',
  F: 'mekanism:ultimate_chemical_tank'  
}).id('nadien_tweaks:chemical_infuser')



                             //===================MAQUINAS===================


//trituradora patchs
nadien.custom({
  "type": "mekanism:crushing",
  "input": {
    "count": 1,
    "item": "minecraft:end_stone"
  },
  "output": {
    "count": 2,
    "id": "occultism:crushed_end_stone"
  }
}).id("nadien_tweaks:crushedendstone")

nadien.custom({
  "type": "mekanism:crushing",
  "input": {
    "count": 1,
    "item": "ae2:fluix_crystal"
  },
  "output": {
    "count": 4,
    "id": "ae2:fluix_dust"
  }
}).id("nadien_tweaks:fluixdust")

nadien.custom({
  "type": "mekanism:crushing",
  "input": {
    "count": 1,
    "item": "ae2:certus_quartz_crystal"
  },
  "output": {
    "count": 4,
    "id": "ae2:certus_quartz_dust"
  }
}).id("nadien_tweaks:certusdust")

//infusings

///aleacion infusionada
nadien.custom({
  "type": "mekanism:metallurgic_infusing",
  "chemical_input": {
    "amount": 20,
    "tag": "mekanism:redstone"
  },
  "item_input": {
    "count": 1,
    "tag": "c:plates/steel"
  },
  "output": {
    "count": 2,
    "id": "mekanism:alloy_infused"
  },
  "per_tick_usage": false
}).id("nadien_tweaks:aleacioninfusionada")

///Circuito basico
nadien.custom({
  "type": "mekanism:metallurgic_infusing",
  "chemical_input": {
    "amount": 40,
    "tag": "mekanism:redstone"
  },
  "item_input": {
    "count": 1,
    "tag": "c:plates/osmium"
  },
  "output": {
    "count": 4,
    "id": "mekanism:basic_control_circuit"
  },
  "per_tick_usage": false
}).id("nadien_tweaks:circuitobasico")

//combinador

///prediction matrix
nadien.custom({
  "type": "mekanism:combining",
  "extra_input": {
    "count": 1,
    "item": "minecraft:wither_skeleton_skull"
  },
  "main_input": {
    "count": 1,
    "item": "minecraft:compass"
  },
  "output": {
    "count": 1,
    "id": "hostilenetworks:prediction_matrix"
  }
}).id("nadien_tweaks:predictionmatrix")

///aliento de dragon
nadien.custom({
  "type": "mekanism:combining",
  "extra_input": {
    "count": 1,
    "item": "xycraft_machines:void_container"
  },
  "main_input": {
    "count": 1,
    "item": "ars_nouveau:starbuncle_charm"
  },
  "output": {
    "count": 1,
    "id": "minecraft:dragon_breath"
  }
}).id("nadien_tweaks:dragonaliento")

///certus crystal
nadien.custom({
  "type": "mekanism:combining",
  "extra_input": {
    "count": 4,
    "item": "ae2:certus_quartz_dust"
  },
  "main_input": {
    "count": 4,
    "item": "minecraft:sand"
  },
  "output": {
    "count": 5,
    "id": "ae2:certus_quartz_crystal"
  }
}).id("nadien_tweaks:certus")

                             //===================ARMADURAS Y HERRAMIENTAS MEKA===================
 nadien.remove({output: ['mekanism:mekasuit_helmet', 'mekanism:mekasuit_bodyarmor', 'mekanism:mekasuit_pants', 'mekanism:mekasuit_boots', 'mekanism:meka_tool']})

 //casco del mekatraje
 nadien.recipes.create.mechanical_crafting('mekanism:mekasuit_helmet', [
    "         ",
    " ABCDCBA ",
    " BEEFEEB ",
    " CEGHGEC ",
    " DFIJKFD ",
    " CELMLEC ",
    " BEEFEEB ",
    " ABCDCBA ",
], {
    A: "mekanism:pellet_polonium",
    B: "ae2:singularity",
    C: "avaritia:crystal_matrix_ingot",
    D: "avaritia:neutron_pile",
    E: "kubejs:empowered_glod_crystal",
    F: "kubejs:ingot_of_elevation",
    G: "minecraft:red_mushroom",
    H: 'ultimatefoods:nadienite_helmet',
    I: 'oritech:exo_helmet',
    J: "advanced_ae:quantum_alloy_plate",
    K: "allthemodium:unobtainium_helmet",
    L:  "minecraft:brown_mushroom",
    M:  'justdirethings:eclipsealloy_helmet'
}).id('nadien_tweaks:mekasuit_helmet')


//pechera del mekatraje
nadien.recipes.create.mechanical_crafting('mekanism:mekasuit_bodyarmor', [
    "         ",
    " ABCDCBA ",
    " BEEFEEB ",
    " CEGHGEC ",
    " DFIJKFD ",
    " CELMLEC ",
    " BEEFEEB ",
    " ABCDCBA ",
], {
    A: "mekanism:pellet_polonium",
    B: "ae2:singularity",
    C: "avaritia:crystal_matrix_ingot",
    D: "avaritia:neutron_pile",
    E: "kubejs:empowered_glod_crystal",
    F: "kubejs:ingot_of_elevation",
    G: "minecraft:red_mushroom",
    H: 'ultimatefoods:nadienite_chestplate',
    I: 'justdirethings:eclipsealloy_chestplate',
    J: "advanced_ae:quantum_alloy_plate",
    K: "allthemodium:unobtainium_chestplate",
    L: "minecraft:brown_mushroom",
    M:  "oritech:exo_chestplate"
}).id('nadien_tweaks:mekasuit_bodyarmor') 

 //pantalones del mekatraje
nadien.recipes.create.mechanical_crafting('mekanism:mekasuit_pants', [
    "         ",
    " ABCDCBA ",  
    " BEEFEEB ",
    " CEGHGEC ",
    " DFIJKFD ",
    " CELMLEC ",
    " BEEFEEB ",
    " ABCDCBA ",
    "         " 
], {
    A: "mekanism:pellet_polonium",
    B: "ae2:singularity",
    C: "avaritia:crystal_matrix_ingot",
    D: "avaritia:neutron_pile",
    E: "kubejs:empowered_glod_crystal",
    F: "kubejs:ingot_of_elevation",
    G: "minecraft:red_mushroom",
    H: 'ultimatefoods:nadienite_leggings',
    I: "justdirethings:eclipsealloy_leggings",
    J: "advanced_ae:quantum_alloy_plate",
    K: "allthemodium:unobtainium_leggings",
    L: "minecraft:brown_mushroom",
    M: "oritech:exo_leggings"
}).id('nadien_tweaks:mekasuit_pants')


//botas del mekatraje
nadien.recipes.create.mechanical_crafting('mekanism:mekasuit_boots', [
    "         ",
    " ABCDCBA ",
    " BEEFEEB ",
    " CEGHGEC ",
    " DFIJKFD ",
    " CELMLEC ",
    " BEEFEEB ",
    " ABCDCBA ",
    "         "
], {
    A: "mekanism:pellet_polonium",
    B: "ae2:singularity",
    C: "avaritia:crystal_matrix_ingot",
    D: "avaritia:neutron_pile",
    E: "kubejs:empowered_glod_crystal",
    F: "kubejs:ingot_of_elevation",
    G: "minecraft:red_mushroom",
    H: 'ultimatefoods:nadienite_boots',
    I: "justdirethings:eclipsealloy_boots",
    J: 'advanced_ae:quantum_alloy_plate',
    K: "allthemodium:unobtainium_boots",
    L: "minecraft:brown_mushroom",
    M: "oritech:exo_boots"
}).id('nadien_tweaks:mekasuit_boots')


//meka tool
nadien.recipes.create.mechanical_crafting('mekanism:meka_tool', [
    "ABCDEDCBF",
    "BGGGEGGGB",
    "CGHIJIHGC",
    "DGIKCKIGD",
    "EELMNOLEE",
    "DGIPQPIGD",
    "CGHIRIHGC",
    "BGGGEGGGB",
    "SBCDEDBUT"
], {
    A: "allthemodium:unobtainium_sword",
    B: "ae2:quantum_entangled_singularity",
    C: "ae2:singularity",
    D: "minecraft:echo_shard",
    E: "avaritia:crystal_matrix_ingot",
    F: "allthemodium:unobtainium_pickaxe",
    G: "extendedcrafting:enhanced_ender_ingot_block",
    H: "advanced_ae:quantum_alloy_plate",
    I: "mekanism:ultimate_control_circuit",
    J: 'oritech:motor',
    K: "minecraft:red_mushroom",
    L: "kubejs:ingot_of_elevation",
    M: 'oritech:processing_unit',
    N: "mekanism:atomic_disassembler",
    O: 'oritech:super_ai_chip',
    P: "industrialforegoing:pink_slime_ingot",
    Q: "mekanism:pellet_antimatter",
    R: 'oritech:enderic_lens',
    S: "allthemodium:unobtainium_axe",
    T: "allthemodium:unobtainium_shovel",
    U: 'oritech:laser_arm_block'
}).id('nadien_tweaks:meka_tool')

//atomic disasembler
nadien.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
  I: 'mekanism:alloy_infused',
  T: 'mekanism:energy_tablet',
  A: 'mekanism:alloy_atomic',
  P: 'allthemodium:allthemodium_pickaxe'
}).id('nadien_tweaks:atomic_disassembler');



//                                   ====>  PLATES COMPAT  <====

  function stamper(output, input, cantidad, molde) {
    nadien.custom({
  "type": "mekmm:stamper",
  "input": {
    "count": 1,
    "item": input
  },
  "mold": {
    "count": 1,
    "item": molde
  },
  "output": {
    "count": cantidad,
    "id": output
  }
}).id(`nadien_tweaks:stamper/${output.replace(':', '/')}`)
      //example add metal prees item
      //stamper(output, input, cantidad, molde)//
 }


//                                   ====>  PLATES COMPAT  <====

//signalum
stamper('alltheores:signalum_plate', 'alltheores:signalum_ingot', 1, "immersiveengineering:mold_plate")

//enderium
stamper('alltheores:enderium_plate', 'alltheores:enderium_ingot', 1, "immersiveengineering:mold_plate")

//lumium
stamper('alltheores:lumium_plate', 'alltheores:lumium_ingot', 1, "immersiveengineering:mold_plate")

//diamante
stamper('alltheores:diamond_plate', 'minecraft:diamond', 1, "immersiveengineering:mold_plate")

//netherite
stamper('alltheores:netherite_plate', 'minecraft:netherite_ingot', 1, "immersiveengineering:mold_plate")

//black iron plate
stamper('extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot', 1, "immersiveengineering:mold_plate")

//osmium plate
stamper('alltheores:osmium_plate', 'alltheores:osmium_ingot', 1, "immersiveengineering:mold_plate")
stamper('alltheores:osmium_plate', 'mekanism:ingot_osmium', 1, "immersiveengineering:mold_plate")

//platinum plate
stamper('alltheores:platinum_plate', 'alltheores:platinum_ingot', 1, "immersiveengineering:mold_plate")

//tin plate
stamper('alltheores:tin_plate', 'alltheores:tin_ingot', 1, "immersiveengineering:mold_plate")

//cinc plate
stamper('alltheores:zinc_plate', 'alltheores:zinc_ingot', 1, "immersiveengineering:mold_plate")
stamper('alltheores:zinc_plate', 'create:zinc_ingot', 1, "immersiveengineering:mold_plate")

//brass plate
stamper('alltheores:brass_plate', 'alltheores:brass_ingot', 1, "immersiveengineering:mold_plate")
stamper('alltheores:brass_plate', 'create:brass_ingot', 1, "immersiveengineering:mold_plate")

//zinc plate 
stamper('alltheores:zinc_plate', 'alltheores:zinc_ingot', 1, "immersiveengineering:mold_plate")

//allthemodium plate
stamper('allthemodium:allthemodium_plate', 'allthemodium:allthemodium_ingot', 4, "immersiveengineering:mold_plate")

//vibranium plate
stamper('allthemodium:vibranium_plate', 'allthemodium:vibranium_ingot', 4, "immersiveengineering:mold_plate")

//unobtainium plate
stamper('allthemodium:unobtainium_plate', 'allthemodium:unobtainium_ingot', 1, "immersiveengineering:mold_plate")

// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")
// stamper(output, input, cantidad, "immersiveengineering:mold_plate")



})