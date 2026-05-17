StartupEvents.registry('item', event =>{
	event.create('basic_mechanism').displayName('Basic mechanism')
	event.create('incomplete_basic_mechanism').displayName('Incomplete basic mechanism')
	event.create('copper_mechanism').displayName('Copper mechanism')
	event.create('incomplete_copper_mechanism').displayName('Incomplete copper mechanism')
	event.create('steel_mechanism').displayName('Steel mechanism')
	event.create('incomplete_steel_mechanism').displayName('Incomplete steel mechanism')
	event.create('enchanted_mechanism').displayName('Enchanted mechanism')
	event.create('incomplete_enchanted_mechanism').displayName('Incomplete enchanted mechanism')
	event.create('conductive_mechanism').displayName('Conductive mechanism')
	event.create('incomplete_conductive_mechanism').displayName('Incomplete conductive mechanism')
	event.create('mystical_mechanism').displayName('Mystical mechanism')
	event.create('incomplete_mystical_mechanism').displayName('Incomplete mystical mechanism')
	event.create('simulated_base').displayName('Simulated base')
	event.create('simulated_mechanism').displayName('Simulated mechanism')
	event.create('mek_mechanism').displayName('Mek mechanism')
	event.create('mek_base').displayName('Mek base')
	event.create('incomplete_press').texture('kubejs:item/incomplete_basic_control_circuit').maxStackSize(64).displayName('Circuito basico Incompleto')
	event.create('universal_press').texture('kubejs:item/universal_press').maxStackSize(64).displayName('Universal Press');


        // Endgame Items
    event.create("diamond_lattice")
    event.create("neutron_emitter")
    event.create("ultimate_gem").displayName("§dUltimate Gem").glow(true)
    event.create("mote_of_omnium").displayName("Mote of Omnium").glow(true).rarity("epic")
    event.create("heart_of_a_universe").displayName("§dHeart Of A Universe")
    event.create("exotic_materials_catalyst").displayName("Exotic Materials Catalyst")
    event.create("eternal_catalyst").displayName("Eternal Catalyst")

	 // Heavy platings
    event.create("quantum_fluxed_eternium_heavy_plating")
        .displayName("§dQuantum Fluxed Eternium Heavy Plating")
        .texture("kubejs:item/microverse/eternium_heavy_plating")
    event.create("universe_resistant_neutronium_heavy_plating")
        .displayName("§dUniverse Resistant Neutronium Heavy Plating")
        .texture("kubejs:item/microverse/neutronium_heavy_plating")
    event.create("elementally_infused_omnic_matrix_heavy_plating")
        .displayName("§dElementally Infused Omnic Matrix Heavy Plating")
        .texture("kubejs:item/microverse/omnic_matrix_heavy_plating")
    event.create("dimensionally_stabilized_infinity_heavy_plating")
        .displayName("§dDimensionally Stabilized Infinity Heavy Plating")
        .texture("kubejs:item/microverse/infinity_heavy_plating")
    event.create("timeless_monic_heavy_plating")
        .displayName("§dTimeless Monic Heavy Plating")
        .texture("kubejs:item/microverse/dormant_monic_heavy_plating")
    event.create("causality_exempt_monic_heavy_plating")
        .displayName("§1Causality Exempt Monic Heavy Plating")
        .texture("kubejs:item/microverse/monic_heavy_plating")
    // Infinity Tools
    event.create("infinity_power_unit").rarity("epic").maxStackSize(1)
    event.create("infinity_file").rarity("epic").maxStackSize(1)
    event.create("infinity_hammer").rarity("epic").maxStackSize(1)
    event.create("infinity_screwdriver").rarity("epic").maxStackSize(1)
    event.create("infinity_wrench").rarity("epic").maxStackSize(1)
    event.create("infinity_wire_cutter").rarity("epic").maxStackSize(1)

    //thermal Port
    event.create('tar').displayName('Tar').tooltip('Ported Therma Foundation')
    event.create('bitumen').displayName('Bitumen').tooltip('Ported Therma Foundation')
    event.create('pyrotheum_blend').displayName('Pyrotheum Dust').tooltip('Ported Therma Foundation')


	  let item = (name) => {
		let id = name.toLowerCase().replace(/ /g, "_");
		event.create(id).texture(`kubejs:item/${id}`).displayName(name);
	  };
	  let mechanism = (name) => {
		let id = name.toLowerCase();
		event.create(`incomplete_${id}_mechanism`).texture(`kubejs:item/incomplete_${id}_mechanism`).displayName(`Incomplete ${name} Mechanism`);
		event.create(`${id}_mechanism`).texture(`kubejs:item/${id}_mechanism`).displayName(`${name} Mechanism`);
	  };
	
	
	
	  mechanism("Desh");
	  mechanism("Refined");
	  mechanism("Ostrum");
	  mechanism("Calorite");
	  mechanism("Creative");
	
	  item("Steel Rod");
	  item("Zinc Hand");
	  item("Solid Fuel Clump");


	  event.create('create:radiant_mechanism').texture("kubejs:item/radiant_mechanism").displayName('Radiant Mechanism').glow(true)
      event.create('create:incomplete_radiant_mechanism').texture("kubejs:item/incomplete_radiant_mechanism").displayName('Incomplete Radiant Mechanism').glow(false)
      event.create('create:incomplete_engineering_circuit').displayName('Incomplete Engineering Circuit').texture("kubejs:item/radiant_mechanism")
	  event.create('create:radiant_coil').glow(true).texture("kubejs:item/radiant_coil").displayName('Radiant Induction Coil')
	  event.create('create:radiant_sheet').glow(true).texture("kubejs:item/radiant_sheet").displayName('Radiant Sheet')
	  event.create('hostilenetworks:glitch_heart').glow(true).texture("kubejs:item/glitch_heart").displayName('Glitched Hearth')
	  event.create('hostilenetworks:glitch_fragment').glow(true).texture("kubejs:item/glitch_fragment").displayName('Glitched Fragment')

        //ported items
event.create('energized_osmium_ingot').displayName('Lingote De Osmio Energizado')
event.create('energized_dark_dust').displayName('Polvo Oscuro Energizado')
event.create('energized_dark_ingot').displayName('Lingote Oscuro Energizado')
event.create('energized_certus_quartz_crystal').displayName('Cuarzo Certus Energizado')
event.create('treated_leather').displayName('Cuero Tratado')
event.create('industrial_leather').displayName('Cuero Industrial')
event.create('methodology_processor').displayName('Procesador Metodologico')
event.create('operation_processor').displayName('Procesador De Operacion')
event.create('scheduling_processor').displayName('Procesador Programado')
event.create('estimation_processor').displayName('Procesador De Estimacion')
event.create('clearance_processor').displayName('Procesador De Claridad')
event.create('printed_estimation_circuit').displayName('Procesador De Estimacion Impreso')
event.create('printed_methodolgy_circuit').displayName('Procesador De Metodologia Impreso')
event.create('printed_operation_circuit').displayName('Procesador De Opercion Impreso')
event.create('printed_scheduling_circuit').displayName('Procesador Programado Impreso')
event.create('printed_clearance_circuit').displayName('Procesador De Claridad Impreso')
event.create('cosmic_alloy').displayName('Aleacion Cosmica')
event.create('crafting_base').displayName('Crafteo Base')
event.create('crystal_bundle').displayName('Banda De cristal')
event.create('dark_ingot').displayName('Lingote Oscuro')
event.create('demonlord_ingot').displayName('Lingote De Demonio')
event.create('glod_crystal').displayName('Cristal De Oro')
event.create('hardened_blood_droplet').displayName('Drop De Sangre Reforzado')
event.create('ingot_of_elevation').displayName('Lingote Elevado')
event.create('inscriber_clearance_press').displayName('Inscriber Clearance Press')
event.create('inscriber_estimation_press').displayName('Inscriber Estimation Press')
event.create('inscriber_methodology_press').displayName('Inscriber Methodology Press')
event.create('inscriber_operation_press').displayName('Inscriber Operation Press')
event.create('inscriber_scheduling_press').displayName('Inscriber Scheduling Press')
event.create('demon_ingot').displayName('Lingote Demonico').fireResistant(true).tooltip('Ported extrautilities2 item')
event.create('osgloglasingot').displayName('osgloglas')
event.create('osgloglasnugget').displayName('Pepita De Osgo Glass')
event.create('osmiridiumingot').displayName('Lingote De Osmiridium')
event.create('osmiridiumnugget').displayName('Pepita De Osmiridium')
event.create('osmiumdust').displayName('Pepita De Osmiridium')
event.create('steaming_restonia_crystal').displayName('Redstonia crystal Re Energizado').texture("kubejs:item/strc")
event.create('empowered_crystal_bundle').displayName('Banda De Cristal Electrizada').texture("kubejs:item/empowered_crystal_bundle")
event.create('empowered_glod_crystal').displayName('Cristal De Oro Energizado').texture("kubejs:item/empowered_glod_crystal")
event.create('osglolapis').displayName('osglolapis')
event.create('lunar_reactive').displayName('Reactivo Lunar').tooltip('Ported extrautilities2 item')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/.png").displayName('')
    // event.create('').glow(true).texture("kubejs:item/t.png").displayName('')



// EnderIO Capacitors
    // TODO: GIVE CAPACITORS LORE AND NBT FOR THEM TO WORK
    // event.create("compressed_octadic_capacitor")
    // event.create("double_compressed_octadic_capacitor")

    //enderio endergy addtions
    // event.create('vivid_alloy_ingot').displayName('Vivid Alloy Ingot')
    // event.create('vivid_alloy_nugget').displayName('Vivid Alloy Nugget')

    event.create('energetic_silver_ingot').displayName('Energetic Silver Ingot')
    event.create('energetic_silver_nugget').displayName('Energetic Silver Nugget')
   

})

