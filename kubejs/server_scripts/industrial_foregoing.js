ServerEvents.recipes(nadien => {

    /**
     * @param {{tag: string, count: number}} output
     * @param {string} catalyst
     * @param {number} depthMin
     * @param {number} depthMax
     * @param {number} weight
     */
    function laserDrillOre(output, catalyst, depthMin, depthMax, weight) {
        nadien.custom({
                type: 'industrialforegoing:laser_drill_ore',
                output: {
                    tag: output.tag,
                    count: output.count || 1
                },
                rarity: [
                    {
                        biome_filter: {
                            whitelist:  [],
                            blacklist:  [],
                        },
                        dimension_filter: {
                            whitelist:  [],
                            blacklist:  [],
                        },
                        depth_min:  depthMin,
                        depth_max:  depthMax,
                        weight:     weight
                    }
                ],
                catalyst: {
                    item: catalyst
                }
            })
            .id(`allthemods:industrialforegoing/laser_drill_ore/${output.tag.split(':')[1]}`);
    }

    // /**
    //  * @param {{fluid: string, amount: number}} output
    //  * @param {string} entity
    //  * @param {string} catalyst
    //  * @param {number} depthMin
    //  * @param {number} depthMax
    //  * @param {number} weight
    //  */
    // function laserDrillFluid(output, entity, catalyst, depthMin, depthMax, weight) {
    //     nadien
    //         .custom({
    //             type: 'industrialforegoing:laser_drill_fluid',
    //             output: {
    //                 id: output.fluid,
    //                 amount: output.amount || 1
    //             },
    //             entity: entity || "minecraft:empty",
    //             rarity: [
    //                 {
    //                     biome_filter: {
    //                         whitelist:  [],
    //                         blacklist:  [],
    //                     },
    //                     dimension_filter: {
    //                         whitelist:  [],
    //                         blacklist:  [],
    //                     },
    //                     depth_min:  depthMin,
    //                     depth_max:  depthMax,
    //                     weight:     weight
    //                 }
    //             ],
    //             catalyst: {
    //                 item: catalyst
    //             }
    //         })
    //         .id(`allthemods:industrialforegoing/laser_drill_fluid/${output.fluid.split(':')[1]}`);
    // }
    
    // laserDrillOre(
    //     {tag: 'c:gems/benitoite', count: 8},
    //     'industrialforegoing:blue_laser_lens',
    //     5, 256, 5
    // );

    // laserDrillFluid(
    //     {fluid: 'allthemodium:soul_lava', amount: 10},
    //     'minecraft:warden',
    //     'industrialforegoing:blue_laser_lens',
    //     -64, 80, 3
    // )

     laserDrillOre(
        {tag: 'c:raw_materials/allthemodium', count: 1},
        'allthemodium:allthemodium_block',
        5, 256, 5
    );
     laserDrillOre(
        {tag: 'c:raw_materials/vibranium', count: 1},
        'allthemodium:vibranium_block',
        5, 256, 5
    );

    laserDrillOre(
        {tag: 'c:raw_materials/unobtainium', count: 1},
        'allthemodium:unobtainium_block',
        5, 256, 5
    );

    //laserDrillOre(
    //     {tag: 'c:raw_materials/unobtainium', count: 1},
    //     'allthemodium:unobtainium_block',
    //     5, 256, 5
    // );
    
    nadien.custom({
  "type": "industrialforegoing:laser_drill_ore",
  "catalyst": {
    "item": "industrialforegoing:black_laser_lens"
  },
  "output": {
    "count": 1,
    "item": "kubejs:oil_sand_ore"
  },
  "rarity": [
    {
      "biome_filter": {
        "blacklist": [],
        "whitelist": []
      },
      "depth_max": 132,
      "depth_min": 5,
      "dimension_filter": {
        "blacklist": [
          "minecraft:the_end",
          "minecraft:the_nether"
        ],
        "whitelist": []
      },
      "weight": 10
    },
    {
      "biome_filter": {
        "blacklist": [],
        "whitelist": []
      },
      "depth_max": 255,
      "depth_min": 0,
      "dimension_filter": {
        "blacklist": [
          "minecraft:the_end",
          "minecraft:the_nether"
        ],
        "whitelist": []
      },
      "weight": 4
    }
  ]
})

    nadien.custom({
  "type": "industrialforegoing:laser_drill_fluid",
  "catalyst": {
    "item": "industrialforegoing:blue_laser_lens"
  },
  "entity_data": {
    "data": {},
    "display": "",
    "entity": {
      "type": "minecraft:warden"
    }
  },
  "output": {
    "amount": 500,
    "fluid": "allthemodium:soul_lava"
  },
  "rarity": [
    {
      "biome_filter": {
        "blacklist": [],
        "whitelist": []
      },
      "depth_max": 256,
      "depth_min": -64,
      "dimension_filter": {
        "blacklist": [],
        "whitelist": []
      },
      "weight": 8
    }
  ]
}).id('nadien_tweaks:industrialforegoing/lava_de_almas')


  //laser ore base
nadien.remove({id: 'industrialforegoing:ore_laser_base'})
nadien.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'extendedcrafting:ender_ingot',
  O: 'extendedcrafting:enhanced_ender_ingot',
  F: 'industrialforegoing:machine_frame_advanced',
  G: 'extendedcrafting:luminessence',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('nadien_tweaks:industrialforegoings/ore_laser_drill')

//laser fluid base
nadien.remove({output: 'industrialforegoing:fluid_laser_base' })
nadien.shaped('industrialforegoing:fluid_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'extendedcrafting:ender_ingot',
  O: 'extendedcrafting:enhanced_ender_ingot',
  F: 'industrialforegoing:machine_frame_advanced',
  G: 'extendedcrafting:luminessence',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('nadien_tweaks:industrialforegoings/fluid_laser_drill')


//laser fluid base
nadien.remove({output: 'industrialforegoing:laser_drill' })
nadien.shaped('industrialforegoing:laser_drill', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'extendedcrafting:ender_ingot',
  O: 'minecraft:piston',
  F: 'industrialforegoing:machine_frame_advanced',
  G: 'extendedcrafting:enhanced_ender_ingot',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('nadien_tweaks:industrialforegoings/laser_drill')

//pitiful generator
nadien.remove({output: 'industrialforegoing:pitiful_generator' })
nadien.shaped('industrialforegoing:pitiful_generator', ['ABA','DCD','ABA'],{
  A: 'minecraft:smooth_stone',
  B: 'minecraft:blast_furnace',
  C: 'minecraft:magma_block',
  D: 'minecraft:iron_bars'
}).id('nadien_tweaks:pitiful_generator')
})