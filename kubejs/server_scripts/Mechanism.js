ServerEvents.recipes(nadien => {

     //mecanismo base create
	 nadien.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "c:plates/gold"
  },
  "loops": 2,
  "results": [
    {
      "chance": 120.0,
      "id": "create:precision_mechanism"
    },
    {
      "chance": 8.0,
      "id": "create:golden_sheet"
    },
    {
      "chance": 8.0,
      "id": "create:andesite_alloy"
    },
    {
      "chance": 5.0,
      "id": "createcasing:cherry_cogwheel"
    },
    {
      "chance": 3.0,
      "id": "minecraft:gold_nugget"
    },
    {
      "chance": 2.0,
      "id": "create:shaft"
    },
    {
      "chance": 2.0,
      "id": "create:crushed_raw_gold"
    },
    {
      "id": "minecraft:iron_ingot"
    },
    {
      "id": "minecraft:clock"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "createcasing:cherry_cogwheel"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "createcasing:cherry_large_cogwheel"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "tag": "c:nuggets/iron"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    }
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
}).id('nadien_tweaks:precision_mechanism')

     //steelmechanism
	nadien.recipes.create.sequenced_assembly([ // start the recipe
		  Item.of('kubejs:steel_mechanism') // this is the item that will appear in JEI as the result
	  ],'kubejs:copper_mechanism',[ // the input
		  // the transitional item
	  	  nadien.recipes.create.deploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism','create:nixie_tube']),
		  nadien.recipes.create.deploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism','createaddition:electric_motor']),
		  nadien.recipes.create.deploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism', 'kubejs:copper_mechanism']),
		  nadien.recipes.create.pressing('kubejs:incomplete_steel_mechanism', 'kubejs:steel_mechanism')
	  ]).transitionalItem('kubejs:incomplete_steel_mechanism').loops(1).id('nadien_tweaks:steelmechanism') // set the transitional item and the loops (amount of repetitions)
  

	  // nadien.recipes.create.sequenced_assembly([
//     Item.of("kubejs:clearance_processor") // Resultado final
// ], "kubejs:printed_clearance_processor", [ // Ingrediente inicial
//     nadien.recipes.create.deploying( "kubejs:printed_clearance_processor", ["kubejs:printed_clearance_processor", 'kubejs:inscriber_clearance_press']).keepHeldItem(),
//     nadien.recipes.create.deploying("kubejs:printed_clearance_processor",["kubejs:printed_clearance_processor", 'minecraft:redstone']),
//     nadien.recipes.create.deploying("kubejs:printed_clearance_processor", ["kubejs:printed_clearance_processor", "ae2:printed_silicon"]),
//     nadien.recipes.create.pressing( "kubejs:printed_clearance_processor","kubejs:printed_clearance_processor")
// ]).transitionalItem("kubejs:printed_clearance_processor").loops(1).id('nadien_tweaks:clearance_proccesor_terminado');

      
	  //simulated Mechanism
	  nadien.recipes.create.sequenced_assembly([
	  Item.of('kubejs:simulated_mechanism') 
	  ],'ultimatefoods:galactic_globe',[
	  nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('justdirethings:time_fluid_source', 1000), 'oritech:processing_unit']),
	  nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('create:chocolate', 1000), 'capacitoradditions:unobtainium_capacitor']),
	  nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('createaddition:seed_oil', 1000), 'capacitoradditions:unobtainium_capacitor']),
	  nadien.recipes.create.deploying('kubejs:simulated_base',['kubejs:simulated_base','alltheores:osmium_plate']),
	  nadien.recipes.create.deploying('kubejs:simulated_base',['kubejs:simulated_base','extrahnn:blank_extra_data_model']),
	  nadien.recipes.create.deploying('kubejs:simulated_base',['kubejs:simulated_base','advanced_ae:quantum_alloy_plate']),
	  nadien.recipes.create.pressing('kubejs:simulated_base', 'kubejs:simulated_base'),
	  ]).transitionalItem('kubejs:simulated_base').loops(1).id('nadien_tweaks:simulatedmechanism');
  
  
       //enchanted mechanism
	  nadien.recipes.create.sequenced_assembly([ // start the recipe
	  Item.of('kubejs:enchanted_mechanism') // this is the item that will appear in JEI as the result
  ],'create:andesite_casing',[ // the input
	  // the transitional item
	  nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('allthemodium:soul_lava', 1000), 'oritech:processing_unit']),
	  nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('justdirethings:polymorphic_fluid_source', 1000), 'capacitoradditions:unobtainium_capacitor']),
	  nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('oritech:still_naphtha', 1000), 'industrialforegoing:simulated_hydroponic_bed']),
	  nadien.recipes.create.deploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','create:precision_mechanism']),
	  nadien.recipes.create.deploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','kubejs:copper_mechanism']),
	  nadien.recipes.create.deploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','kubejs:basic_mechanism']),
	  nadien.recipes.create.pressing('kubejs:incomplete_enchanted_mechanism', 'kubejs:steel_mechanism')
  ]).transitionalItem('kubejs:incomplete_enchanted_mechanism').loops(1).id('nadien_tweaks:enchantedmechanism') // set the transitional item and the loops (amount of repetitions)
  
  
    //basic mechanism
	nadien.recipes.create.sequenced_assembly([ // start the recipe
	Item.of('kubejs:basic_mechanism') // this is the item that will appear in JEI as the result
  ],'create:andesite_casing',[ // the input
	// the transitional item
	nadien.recipes.create.deploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:cogwheel']),
	nadien.recipes.create.deploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:cogwheel']),
	nadien.recipes.create.deploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:andesite_alloy']),
	nadien.recipes.create.pressing('kubejs:incomplete_basic_mechanism', 'kubejs:basic_mechanism'),
  ]).transitionalItem('kubejs:incomplete_basic_mechanism').loops(1).id('nadien_tweaks:basicmechanism') // set the transitional item and the loops (amount of repetitions)
  
  //copper mechanism
  nadien.recipes.create.sequenced_assembly([ // start the recipe
		  Item.of('kubejs:copper_mechanism') // this is the item that will appear in JEI as the result
	  ],'kubejs:basic_mechanism',[ // the input
		  // the transitional item
		  nadien.recipes.create.deploying('kubejs:incomplete_copper_mechanism',['kubejs:incomplete_copper_mechanism','create:cogwheel']),
		  nadien.recipes.create.deploying('kubejs:incomplete_copper_mechanism',['kubejs:incomplete_copper_mechanism','create:electron_tube']),
		  nadien.recipes.create.deploying('kubejs:incomplete_copper_mechanism',['kubejs:incomplete_copper_mechanism','create:precision_mechanism']),
		  nadien.recipes.create.pressing('kubejs:incomplete_copper_mechanism', 'kubejs:copper_mechanism'),
		  nadien.recipes.create.pressing('kubejs:incomplete_copper_mechanism', 'kubejs:copper_mechanism'),
	  ]).transitionalItem('kubejs:incomplete_copper_mechanism').loops(1).id('nadien_tweaks:coppermechanism') // set the transitional item and the loops (amount of repetitions)
  
		
  
      //mek mechanism
	  const nadiens = 'minecraft:player_head[profile={id:[I;2118518208,-1698609149,-1383017808,204096419],name:"SrNadien",properties:[{name:"textures",signature:"iLgnxHTGPCRyIti3vMv7q2OJA6DT/UIWiY/U+PMjiWs3HYj686G5McPoHPggUqPUCWCsZOO0M1zEd7tYK28R6L7xqvSOSsvLtqUB/BNOv8aAbwOEns9rKHQGLNYbyiM46Y+PZQT1iHYzeVRJQTal2PpR+wujTf1yr5gy2n7v3OwrdpZghqgqGdZxoChKFSw1E8+Knh4eHWV2yWmyFGU10MgGmYOH0jDm597GClFzyp0fhoh2Gv5dLNXRkQXrrc0umhjJ08McRNvk7Q2bsvjN5YmUTLTLoIEpKKDpCwhvl1c2TqO4+jLSc0ksRuawZvbyMCsFPweml42kLabaA8H1MXijDDL/M0OwqgaRUb+s6Vd+DFuICZtSstdcxActluHdW+r7155JsVCAte7e1pYJQdC08UPlvbfTcYrTWO88vLwn/YKT5WUWqADlwU8927t3VhLcWDMJpjl2KSqiUnYTEkkCeAhKEjcTFOWI3qi3cNC+dFmha1Smq2x1av9fP5N/uw1YhmF+7M8vLYusjkYgY1iFapwVRc1L96xnXZrTIrMCAQ5Su8Ts13XTraJ0GUEVzZAXlSKwPt8U6aJm6+r9j9LKfh8RWgLHaEu2a44Li9jlNb+sggaiPzg01ywuXcTsgEoK/D/MZUgxuXmSM73NOV+yv9pdjJHPdaMgRqHualg=",value:"ewogICJ0aW1lc3RhbXAiIDogMTc1OTI2NjY0NzQ0NCwKICAicHJvZmlsZUlkIiA6ICI3ZTQ2MDVjMDlhYzE0ODAzYWQ5MGQyYjAwYzJhNDNhMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJTck5hZGllbiIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS83ZGQ2YWQ2MTYyMDBkNzNkZjA4NDUyYWMyYmE1MzVhY2FhMGQ1MmU0ZDhlNWM3YjAwNDg0MjNkNGVhMDE5Nzg0IgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81NjliN2YyYTFkMDBkMjZmMzBlZmUzZjlhYjlhYzgxN2IxZTZkMzVmNGYzY2ZiMDMyNGVmMmQzMjgyMjNkMzUwIgogICAgfQogIH0KfQ=="}]}]'
	  nadien.recipes.create.sequenced_assembly([ // start the recipe
	  Item.of('kubejs:mek_mechanism') // this is the item that will appear in JEI as the result
	  ],'ultimatefoods:nadienite_block',[ // the input
	  nadien.recipes.create.deploying('kubejs:mek_base',['kubejs:mek_base','create:desk_bell']),
	  nadien.recipes.create.deploying('kubejs:mek_base',['kubejs:mek_base', nadiens,]),
	  nadien.recipes.create.deploying('kubejs:mek_base',['kubejs:mek_base','mifa:speed_addon_8']),
	  nadien.recipes.create.deploying('kubejs:mek_base',['kubejs:mek_base','ae2:cell_component_1k']),
	  nadien.recipes.create.deploying('kubejs:mek_base',['kubejs:mek_base','create:placard']),
	  nadien.recipes.create.deploying('kubejs:mek_base',['kubejs:mek_base','create:wand_of_symmetry']),
	  ]).transitionalItem('kubejs:mek_base').loops(1).id('nadien_tweaks:mekmechanism') // set the transitional item and the loops (amount of repetitions)
  

     //conductive mechanism
	 nadien.recipes.create.sequenced_assembly([
		Item.of('kubejs:conductive_mechanism') 
		], 'create:precision_mechanism', 
		[
			// Los pasos de la secuencia
			nadien.recipes.create.pressing('create:precision_mechanism', 'create:precision_mechanism'),
			nadien.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'createaddition:capacitor']),
			nadien.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'createaddition:connector']),
			nadien.recipes.create.deploying('create:precision_mechanism', ['create:precision_mechanism', 'createaddition:alternator']),
			nadien.recipes.create.pressing('create:precision_mechanism', 'create:precision_mechanism')
		]).transitionalItem('create:precision_mechanism').loops(1) .id('nadien_tweaks:conductivemechanism');
	


      //creative mechanism
	  nadien.recipes.create.sequenced_assembly([ // start the recipe
		Item.of('kubejs:creative_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:mystical_mechanism',[ // the input
		// the transitional item
		nadien.recipes.create.deploying('kubejs:incomplete_creative_mechanism',['kubejs:incomplete_creative_mechanism','avaritia:infinity_catalyst']),
		  // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		nadien.recipes.create.deploying('kubejs:incomplete_creative_mechanism',['kubejs:incomplete_creative_mechanism','minecraft:ice']),
		nadien.recipes.create.deploying('kubejs:incomplete_creative_mechanism',['kubejs:incomplete_creative_mechanism','ae2:singularity']),
		nadien.recipes.create.deploying('kubejs:incomplete_creative_mechanism',['kubejs:incomplete_creative_mechanism','allthecompressed:bronze_block_9x']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete_creative_mechanism').loops(1).id('nadien_tweaks:creativemechanism') // set the transitional item and the loops (amount of repetitions)


	   //ostrum mechanism
	   nadien.recipes.create.sequenced_assembly([ // start the recipe
		Item.of('kubejs:ostrum_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:desh_mechanism',[ // the input
		// the transitional item
		nadien.recipes.create.filling('kubejs:incomplete_ostrum_mechanism', [Fluid.of('enderio:fluid_cloud_seed_concentrated_still', 1000), 'ultimatefoods:cajita_feliz']),
		nadien.recipes.create.deploying('kubejs:incomplete_ostrum_mechanism',['kubejs:incomplete_ostrum_mechanism','oritech:reactor_reflector']),
		  // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		nadien.recipes.create.deploying('kubejs:incomplete_ostrum_mechanism',['kubejs:incomplete_ostrum_mechanism', 'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cow"]']),
		nadien.recipes.create.deploying('kubejs:incomplete_ostrum_mechanism',['kubejs:incomplete_ostrum_mechanism','hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cow"]']),
		nadien.recipes.create.deploying('kubejs:incomplete_ostrum_mechanism',['kubejs:incomplete_ostrum_mechanism','enderio:end_steel_block']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete_ostrum_mechanism').loops(1).id('nadien_tweaks:ostrummechanism')
	   
	  //desh mechanism
	  nadien.recipes.create.sequenced_assembly([ // start the recipe
		Item.of('kubejs:desh_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:steel_mechanism',[ // the input
		// the transitional item
		  // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		nadien.recipes.create.deploying('kubejs:incomplete_desh_mechanism',['kubejs:incomplete_desh_mechanism','enderio:ender_crystal']),
		nadien.recipes.create.deploying('kubejs:incomplete_desh_mechanism',['kubejs:incomplete_desh_mechanism','allthecompressed:andesite_1x']),
		nadien.recipes.create.deploying('kubejs:incomplete_desh_mechanism',['kubejs:incomplete_desh_mechanism','allthemodium:piglich_heart_block']),
		nadien.recipes.create.deploying('kubejs:incomplete_desh_mechanism',['kubejs:incomplete_desh_mechanism','createaddition:chocolate_cake']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete_desh_mechanism').loops(1).id('nadien_tweaks:deshmechanism')
  


     //refined mechanism
	 nadien.recipes.create.sequenced_assembly([ // start the recipe
		Item.of('kubejs:refined_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:conductive_mechanism',[ // the input
		// the transitional item
		nadien.recipes.create.deploying('kubejs:incomplete_refined_mechanism',['kubejs:incomplete_refined_mechanism','ae2:printed_logic_processor']),
		  // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		nadien.recipes.create.deploying('kubejs:incomplete_refined_mechanism',['kubejs:incomplete_refined_mechanism','createaddition:honey_cake']),
		nadien.recipes.create.deploying('kubejs:incomplete_refined_mechanism',['kubejs:incomplete_refined_mechanism','ae2:printed_calculation_processor']),
		nadien.recipes.create.deploying('kubejs:incomplete_refined_mechanism',['kubejs:incomplete_refined_mechanism','ae2:printed_engineering_processor']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete_refined_mechanism').loops(1).id('nadien_tweaks:refinedmechanism')


	     //calorite mechanism
	    nadien.recipes.create.sequenced_assembly([ // start the recipe
		Item.of('kubejs:calorite_mechanism') // this is the item that will appear in JEI as the result
		],'kubejs:ostrum_mechanism',[
		nadien.recipes.create.deploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','ironfurnaces:unobtainium_furnace']),
		nadien.recipes.create.deploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','ae2:1k_crafting_storage']),
		nadien.recipes.create.deploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','extendedcrafting:luminessence_block']),
		nadien.recipes.create.deploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','kubejs:double_compressed_octadic_capacitor']),
		nadien.recipes.create.deploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','extendedcrafting:black_iron_block']),
		nadien.recipes.create.deploying('kubejs:incomplete_calorite_mechanism',['kubejs:incomplete_calorite_mechanism','ae2:fuzzy_card']),
		]).transitionalItem('kubejs:incomplete_calorite_mechanism').loops(1).id('nadien_tweaks:caloritemechanismxxl') // set the transitional item and the loops (amount of repetitions)





			//mystical mechanism
			nadien.recipes.create.sequenced_assembly([ // start the recipe
				Item.of('kubejs:mystical_mechanism') // this is the item that will appear in JEI as the result
			], 'extendedcrafting:nether_star_block',[ 
				nadien.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('justdirethings:refined_t2_fluid_source', 1000), 'oritech:processing_unit']),
				nadien.recipes.create.deploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','ars_nouveau:starby_gift']),
                nadien.recipes.create.deploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','occultism:chalk_purple']),
				nadien.recipes.create.deploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','forbidden_arcanus:eternal_stella']),
				nadien.recipes.create.deploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','sophisticatedbackpacks:stack_upgrade_omega_tier']),
				nadien.recipes.create.deploying('kubejs:incomplete_mystical_mechanism',['kubejs:incomplete_mystical_mechanism','ironfurnaces:unobtainium_furnace']),
			]).transitionalItem('kubejs:incomplete_mystical_mechanism').loops(1).id('nadien_tweaks:mysticalmech')
	
   //radiant mechanism
   nadien.recipes.create.sequenced_assembly([ // start the recipe
	Item.of('create:radiant_mechanism') // this is the item that will appear in JEI as the result
], 'create:radiant_sheet',[ // the input
	// the transitional item
	nadien.recipes.create.deploying('create:incomplete_radiant_mechanism',['create:incomplete_radiant_mechanism','ars_nouveau:glyph_summon_steed']),
	nadien.recipes.create.deploying('create:incomplete_radiant_mechanism',['create:incomplete_radiant_mechanism','allthecompressed:pumpkin_5x']),
	nadien.recipes.create.deploying('create:incomplete_radiant_mechanism',['create:incomplete_radiant_mechanism', 'enderio:alloy_smelter']),
	nadien.recipes.create.deploying('create:incomplete_radiant_mechanism',['create:incomplete_radiant_mechanism','avaritia:crystal_matrix']),
]).transitionalItem('create:incomplete_radiant_mechanism').loops(1).id('nadien_tweaks:radiantmechanism')

    


  })