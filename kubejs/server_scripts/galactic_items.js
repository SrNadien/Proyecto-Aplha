//star items v2 By SrNadien 
ServerEvents.recipes(nadien => {


    //Muñeco De Paja
    nadien.recipes.create.mixing('ultimatefoods:doll', ['ultimatefoods:poop', 'ultimatefoods:super_seed', 'minecraft:sculk_sensor', 'mob_grinding_utils:solid_xp_baby', 'ars_nouveau:glyph_wither']).superheated().id('nadien_tweaks:mpj')
  

    //super semilla
    nadien.recipes.create.mixing('ultimatefoods:super_seed', ['ultimatefoods:cajita_feliz', 'ultimatefoods:cajita_feliz', 'ultimatefoods:superpoop', 'allthemodium:allthemodium_apple',  'ultimatefoods:poop', 'createaddition:chocolate_cake', 'farmersdelight:steak_and_potatoes']).superheated().id('nadien_tweaks:opsemilla')

  //antimateria
  nadien.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 100000,
    "input": {
      "item": 'createaddition:electric_motor'
    },
    "ingredients": [
      {
        "item": 'ultimatefoods:bob_esponja'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": 'ultimatefoods:bob_esponja'
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'advanced_ae:quantum_structure'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": 'ultimatefoods:super_seed'
      },
      {
        "item": 'ultimatefoods:bob_esponja'
      },
      {
        "item": 'ultimatefoods:bob_esponja'
      },
      {
        "item": 'advanced_ae:quantum_structure'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "ae2:engineering_processor"
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'mekanism:meka_tool'
      }
    ],
    "result": {
      "id": 'ultimatefoods:radioactive_antimatter',
      "count": 1
    }
  }).id('nadien_tweaks:uumater')




  //mini portal
  nadien.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 100000,
    "input": {
      "item": "minecraft:end_portal_frame"
    },
    "ingredients": [
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": "create:mechanical_saw"
      }
    ],
    "result": {
      "id": 'ultimatefoods:portalmini',
      "count": 1
    }
  }).id('nadien_tweaks:portalmini')

  

  //mini reactor
nadien.shaped('ultimatefoods:reactormini',
    [
        'ABA',
        'CDC',
        'EBE'
    ],
    {
        B: 'powah:reactor_nitro',
        C: 'industrialforegoing:bioreactor',
        D: 'industrialforegoing:mycelial_reactor',
        E: 'mekanismgenerators:fusion_reactor_frame',
        A: 'mekanismgenerators:fission_reactor_casing'
    }
).id('nadien_tweaks:minireactor')


    //buscador del universo
    nadien.custom({
      "type": "extendedcrafting:combination",
      "power_cost": 100000,
      "input": {
        "item": 'farmersdelight:hamburger'
      },
      "ingredients": [
        {
          "item": 'advanced_ae:quantum_alloy_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'advanced_ae:quantum_alloy_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'advanced_ae:quantum_alloy_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'advanced_ae:quantum_alloy_plate'
        }
      ],
      "result": {
        "id": 'ultimatefoods:universe_search',
        "count": 1
      }
    }).id('nadien_tweaks:universe_search')

    //calavaera maldita
    nadien.recipes.create.mechanical_crafting(
  'ultimatefoods:calavera',
  [
    '    F    ',
    '   AAA   ',
    '  FACAF  ',
    '  FABAF  ',
    '   NNN   ',
    '    F    '
  ],
  {
    A: 'minecraft:wither_skeleton_skull',
    B: 'create:package_frogport',
    C: 'ars_nouveau:glyph_summon_steed',
    F: 'minecraft:wither_rose',
    N: 'occultism:soul_gem'
  }
).id('nadien_tweaks:calavera_oscura')

 // Pulsating Black Hole
    nadien.shaped('ultimatefoods:agujeronegro', ["asd", "fgh", "jkl"], {
        a: "allthecompressed:oak_log_5x",
        s: "allthecompressed:iron_block_5x",
        d: "allthecompressed:dirt_5x",
        f: "allthecompressed:redstone_block_5x",
        g: "allthecompressed:cobblestone_7x",
        h: "allthecompressed:gold_block_5x",
        j: "allthecompressed:obsidian_5x",
        k: "allthecompressed:gravel_5x",
        l: "allthecompressed:sand_5x"
      }).id('nadien_tweaks:pulsating_black_hole')

   // Nexium Emitter
    nadien.shaped('ultimatefoods:transmisor', [
      'A B', 
      ' CF', 
      'GED'
      ], {
        A: 'powah:player_transmitter_nitro',
        B: 'ae2wtlib:wireless_universal_terminal',
        C: 'minecraft:mace',
        D: 'create:mechanical_arm',
        E: 'ae2:singularity',
        F: 'mekanism:module_gravitational_modulating_unit',
        G: 'avaritia:ultimate_stew'
      }).id('nadien_tweaks:nexium_emitter')

  // Dragon Soul
  nadien.shaped('ultimatefoods:dragonsoul', ['CDA', 'XNY', 'BGE'], {
    C: 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:caca_singularity"]',
    D: 'occultism:soul_gem',
    A: 'minecraft:dragon_egg',
    N: 'actuallyadditions:ender_star',
    B: 'minecraft:dragon_head',
	  G: 'mob_grinding_utils:golden_egg',
    E: 'ars_nouveau:summon_focus',
    X: 'actuallyadditions:drill_core',
    Y: 'actuallyadditions:drill_core'
  })

    // Philosopher's Fuel
    nadien.shaped('ultimatefoods:radioactive_fuel', ['ABC', 'DEF', 'IHI'], {
        A: 'generatorgalore:ender_generator',
        B: 'ironfurnaces:unobtainium_furnace',
        C: 'allthecompressed:uranium_block_4x',
        D: 'actuallyadditions:empowered_canola_seed',
        E: 'ironfurnaces:rainbow_coal',
        F: 'ironfurnaces:unobtainium_furnace',
        H: 'mekanismgenerators:control_rod_assembly',
        I: 'enderio:sentient_ender'
      })

  // Improbable Probability Device
  nadien.shaped('ultimatefoods:planos', ['AFA', 'CFE', 'BFD'], {
    A: 'mekanism:pellet_antimatter',
    B: 'enderio:vibrant_capacitor_bank',
    C: 'megacells:cell_component_16m',
    D: 'kubejs:double_compressed_octadic_capacitor',
    E: 'ultimateangelring:angel_ring',
    F: 'powah:battery_nitro[powah:energy_stored=2000000000L]'
    })

    // Withers Compass
    nadien.shaped('ultimatefoods:brujulamaldita', ['DCD', 'ABA', 'DED'], {
        A: 'generatorgalore:netherstar_generator_8x',
        B: 'industrialforegoing:wither_builder',
        C: 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither"]',
        D: 'reliquary:witherless_rose',
        E: 'actuallyadditions:player_interface'
      })

    // dimensional_seed
    nadien.shaped('ultimatefoods:semilla', [
      'ABC',
      'DEF',
      'GHI'
      ], {
        C: 'ars_nouveau:magebloom_crop',
        A: 'actuallyadditions:empowered_canola_seed',
        G: 'enchanted:water_artichoke_seeds',
        I: 'occultism:datura_seeds',
        H: 'avaritia:blaze_cube',
        D: 'avaritia:infinity_ingot',
        F: 'avaritia:crystal_matrix_ingot',
        B: 'avaritia:neutron_ingot',
        E: 'kubejs:ingot_of_elevation'      
     }).id('nadien_tweaks:dimensional_seed')

  // Oblivion Shard
  nadien.shaped('ultimatefoods:catalizador', [' AB', 'ACA', 'BA '], {
    A: 'ae2:quantum_entangled_singularity',
    C: 'hostilenetworks:sim_chamber',
    B: 'compactmachines:new_machine[compactmachines:room_template="compactmachines:soaryn",compactmachines:machine_color="#7B2FBE"]'
  })


   //star nuget
  //  nadien.shaped('9x ultimatefoods:pepita_de_mega_estrella', [
  //   '   ',
  //   ' A ',
  //   '   '
  // ], {
  //   A: 'ultimatefoods:estella_galactica'
  // }).id('nadien_tweaks:starnugget')

})