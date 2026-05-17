ServerEvents.recipes(nadien => {
    // Functional Storage
    nadien.shaped(
        Item.of('functionalstorage:max_storage_upgrade', 8),
        [
            'NNN',
            'NsN',
            'NNN'
        ],
        {
            N: 'functionalstorage:netherite_upgrade',
            s: 'ultimatefoods:chocolatada'
        }
    )

    // Draconic Evolution
    // nadien.custom(
    //     {
    //         type: 'powah:energizing',
    //         energy: 2147483647,
    //         ingredients: [
    //             Ingredient.of('draconicevolution:dragon_heart').toJson(),
    //             Ingredient.of('draconicevolution:chaotic_core').toJson(),
    //             Ingredient.of('ultimatefoods:galactic_star').toJson(),
    //             Ingredient.of('draconicevolution:chaotic_core').toJson(),
    //             Ingredient.of('draconicevolution:dragon_heart').toJson()
    //         ],
    //         result: {
    //             count: 1,
    //             id: 'draconicevolution:creative_op_capacitor'
    //         }
    //     }
    // ).id('nadien_tweaks:energizing/draconicevolution_creative_power_source')

    // nadien.custom(
    //     {
    //         type: 'powah:energizing',
    //         energy: 2147483647,
    //         ingredients: [
    //             Ingredient.of('draconicevolution:dragon_heart').toJson(),
    //             Ingredient.of('draconicevolution:chaotic_capacitor').toJson(),
    //             Ingredient.of('ultimatefoods:galactic_star').toJson(),
    //             Ingredient.of('draconicevolution:chaotic_capacitor').toJson(),
    //             Ingredient.of('draconicevolution:dragon_heart').toJson()
    //         ],
    //         result: {
    //             count: 1,
    //             id: 'draconicevolution:creative_capacitor'
    //         }
    //     }
    // ).id('nadien_tweaks:energizing/draconicevolution_creative_capacitor')

    //AE2

        nadien.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('ultimatefoods:galactic_star').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson()
                ],
                result: {
                    count: 1,
                    id: 'ae2:creative_energy_cell'
                }
            }
        ).id('nadien_tweaks:energizing/ae2_creative_energy_cell')

    //Ars Noveau 

        nadien.recipes.kubejs.shaped('allthearcanistgear:creative_spell_book', 
            [
                'BSG', 
                'GGE', 
                'EER'
            ],
            {
                B: 'ars_nouveau:archmage_spell_book',
                S: 'ultimatefoods:galactic_star',
                G: 'ars_nouveau:source_gem_block',
                E: 'minecraft:ender_eye',
                R: 'occultism:soul_gem'
            }
        )

        nadien.custom(
            {
                type: 'ars_nouveau:enchanting_apparatus',
                keepNbtOfReagent: false,
                pedestalItems: [
                    Ingredient.of('ars_nouveau:source_gem_block').toJson(),
                    Ingredient.of('allthemodium:allthemodium_source_jar[ars_nouveau:block_fill_contents=100000]').toJson(),
                    Ingredient.of('ars_nouveau:source_gem_block').toJson(),
                    Ingredient.of('allthemodium:allthemodium_source_jar[ars_nouveau:block_fill_contents=100000]').toJson(),
                    Ingredient.of('ars_nouveau:source_gem_block').toJson(),
                    Ingredient.of('allthemodium:allthemodium_source_jar[ars_nouveau:block_fill_contents=100000]').toJson(),
                    Ingredient.of('ars_nouveau:source_gem_block').toJson(),
                    Ingredient.of('allthemodium:allthemodium_source_jar[ars_nouveau:block_fill_contents=100000]').toJson()
                ],
                reagent: [
                    Ingredient.of('ultimatefoods:galactic_star').toJson()
                ],
                result: {
                    count: 1,
                    id: 'ars_nouveau:creative_source_jar'
                },
                sourceCost: 0
            }
        ).id('nadien_tweaks:enchanting_apparatus/creative_source_jar')

    //EvilCraft - DISABLED (mod not available)
    // Original recipe commented out as EvilCraft mod is not available
    /*
        nadien.recipes.kubejs.shaped('evilcraft:creative_blood_drop', 
            [
                'BCB', 
                'DAE', 
                'BFB'
            ],
            {
                A: 'ultimatefoods:galactic_star',
                B: 'evilcraft:promise_tier_3',
                C: 'evilcraft:flesh_rejuvenated[cyclopscore:fluid_content={amount:10000,id:"evilcraft:blood"}]',
                D: 'evilcraft:mace_of_distortion[cyclopscore:fluid_content={amount:4000,id:"evilcraft:blood"}]',
                E: 'evilcraft:necromancer_staff[cyclopscore:fluid_content={amount:10000,id:"evilcraft:blood"}]',
                F: 'evilcraft:broom[cyclopscore:fluid_content={amount:10000,id:"evilcraft:blood"}]',
    }
    */
    //Integrated Dynamics (Mod No Disponible)
        
        // nadien.custom(
        //     {
        //         type: 'powah:energizing',
        //         energy: 2147483647,
        //         ingredients: [
        //             Ingredient.of('integrateddynamics:energy_battery').toJson(),
        //             Ingredient.of('integrateddynamics:energy_battery').toJson(),
        //             Ingredient.of('ultimatefoods:galactic_star').toJson(),
        //             Ingredient.of('integrateddynamics:energy_battery').toJson(),
        //             Ingredient.of('integrateddynamics:energy_battery').toJson()
        //         ],
        //         result: {
        //             count: 1,
        //             id: 'integrateddynamics:energy_battery_creative'
        //         }
        //     }
        // ).id('nadien_tweaks:energizing/integrateddynamics_energy_battery_creative')

    //Iron Jetpacks DISABLED (mod not available)

        // nadien.recipes.kubejs.shaped('ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
        //     [
        //         ' A ',
        //         'BCB',
        //         ' A ' 
        //     ],
        //     {
        //         A: '#c:storage_blocks/redstone',
        //         B: 'allthemodium:unobtainium_block',
        //         C: 'powah:battery_nitro' 
        //     }
        // ).id('nadien_tweaks:ironjetpacks_creative_cell')

        // nadien.recipes.kubejs.shaped('ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
        //     [
        //         'ABA',
        //         'BCB',
        //         'ADA' 
        //     ],
        //     {
        //         A: 'allthemodium:unobtainium_block',
        //         B: 'powah:nitro_crystal_block',
        //         C: 'ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
        //         D: 'ironfurnaces:unobtainium_furnace' 
        //     }
        // ).id('nadien_tweaks:ironjetpacks_creative_thruster')

        // nadien.recipes.kubejs.shaped('ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
        //     [
        //         'ACA',
        //         'BDB',
        //         'AEA'
        //     ],
        //     {
        //         A: 'allthemodium:unobtainium_block',
        //         B: 'mekanism:sps_casing',
        //         C: 'powah:reactor_nitro',
        //         D: 'mekanism:ultimate_induction_cell',
        //         E: 'powah:reactor_nitro'
        //     }
        // ).id('nadien_tweaks:ironjetpacks_creative_capacator')            
            
        // nadien.recipes.kubejs.shaped('ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
        //     [
        //         'ACA',
        //         'BFB',
        //         'DED'
        //     ],
        //     {
        //         // Changed from Creative Essence to Insanium Essence since Creative Essence is unavailable
        //         A: 'mysticalagradditions:insanium_essence',
        //         // Changed from alloy block to unobtainium block since alloys may not be available
        //         B: 'allthemodium:unobtainium_block',
        //         C: 'ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
        //         D: 'ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
        //         E: 'ultimatefoods:galactic_star',
        //         F: 'ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:emerald"]'
        //     }
        // ).id('nadien_tweaks:ironjetpacks_creative_jetpack')

    //Mekanism
        nadien.recipes.kubejs.shaped('mekanism:creative_chemical_tank',
            [
                'TUT',
                'USU',
                'TUT'
            ],
            {
                T: 'mekanism:ultimate_chemical_tank',
                U: 'allthemodium:unobtainium_ingot',
                S: 'ultimatefoods:galactic_star',
            }
        ).id('nadien_tweak:mekanism/creative_chemical_tank')
         
        nadien.remove({output: 'mekanism:creative_fluid_tank' })
        nadien.recipes.kubejs.shaped('mekanism:creative_fluid_tank',
            [
                'TUT',
                'USU',
                'TUT'
            ],
            {
                T: 'mekanism:ultimate_fluid_tank',
                U: 'allthemodium:unobtainium_ingot',
                S: 'ultimatefoods:galactic_star',
            }
        ).id('nadien_tweaks:mekanism/creative_fluid_tank')

        nadien.remove({output: 'mekanism:creative_energy_cube' })
        nadien.recipes.kubejs.shaped('mekanism:creative_energy_cube',
            [
                'ATA', 
                'UCU', 
                'ATA'
            ],
            {
                A: 'mekanism:alloy_atomic',
                T: 'mekanism:energy_tablet',
                U: 'allthemodium:unobtainium_block',
                C: 'mekanism:ultimate_energy_cube'
            }
        ).id('nadien_tweaks:mekanism/creative_energy_cube')

        nadien.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('ultimatefoods:galactic_star').toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson()
                ],
                result: 
                    Item.of(
                        "mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]"
                    ).toJson()
            }
        ).id('nadien_tweaks:energizing/mekanism_creative_energy_cube')
    
    //Powah

        nadien.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('ultimatefoods:galactic_star').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson()
                ],
                result: Item.of('powah:energy_cell_creative').toJson()
            }
        ).id('nadien_tweaks:energizing/powah_creative_energy_cell')

    //PNC DISABLED (mod not available)

        // let pressureChamber = (psi, output, outcount, inputs) => {
        //     nadien.custom(
        //         {
        //             type: 'pneumaticcraft:pressure_chamber',
        //             inputs: 
        //                 inputs
        //             ,
        //             pressure: psi,
        //             results: [
        //                 {
        //                     count: outcount,
        //                     id: output
        //                 }
        //             ]
        //         }
        //     ).id(`allthemods:pressure/${output.replace(':', '/')}`)
        // }

        // pressureChamber(4.9, 'pneumaticcraft:creative_compressor', 1,
        //     [
        //         {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
        //         {count: 1, item: 'pneumaticcraft:electrostatic_compressor'},
        //         {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
        //         {count: 1, item: 'pneumaticcraft:flux_compressor'},
        //         {count: 1, item: 'ultimatefoods:galactic_star'},
        //         {count: 1, item: 'pneumaticcraft:advanced_air_compressor'},
        //         {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
        //         {count: 1, item: 'pneumaticcraft:advanced_liquid_compressor'},
        //         {count: 64, item:'pneumaticcraft:advanced_pressure_tube'}
        //     ]
        // )

        // pressureChamber(4.9, 'pneumaticcraft:creative_compressed_iron_block', 1,
        //     [
        //         {count: 64, item:'pneumaticcraft:compressed_iron_block'},
        //         {count: 64, item:'pneumaticcraft:compressed_iron_block'},
        //         {count: 64, item:'pneumaticcraft:compressed_iron_block'},
        //         {count: 64, item:'pneumaticcraft:compressed_iron_block'},
        //         {count: 1, item: 'ultimatefoods:galactic_star'},
        //         {count: 64, item:'pneumaticcraft:compressed_iron_block'},
        //         {count: 64, item:'pneumaticcraft:compressed_iron_block'},
        //         {count: 64, item:'pneumaticcraft:compressed_iron_block'},
        //         {count: 64, item:'pneumaticcraft:compressed_iron_block'}
        //     ]
        // )
    //Railcraft DISABLED (mod not available)

    //     nadien.recipes.kubejs.shaped('railcraft:creative_locomotive', 
    //         [
    //             'EF ', 
    //             'CAC', 
    //             'BDB'
    //         ],
    //         {
    //             A: 'ultimatefoods:pepita_de_mega_estrella',
    //             B: 'allthemodium:unobtainium_gear',
    //             C: 'railcraft:charge_motor',
    //             D: 'minecraft:minecart',
    //             E: 'minecraft:redstone_lamp',
    //             F: 'minecraft:netherite_ingot'
    //     }
    // )

    // Create - 
    
    nadien.recipes.create.mechanical_crafting(
  Item.of('create:creative_blaze_cake', 1),
  [
    "ABCDE",
    "FGHIJ",
    "KLMNO"
  ],
  {
    A: 'minecraft:cake',
    B: 'minecraft:pumpkin_pie',
    C: 'minecraft:cake',
    D: 'minecraft:cookie',
    E: 'minecraft:cake',
    F: 'minecraft:cake',
    G: 'minecraft:cookie',
    H: 'ultimatefoods:galactic_star',
    I: 'minecraft:golden_carrot',
    J: 'minecraft:cake',
    K: 'minecraft:cake',
    L: 'actuallyadditions:solidified_experience',
    M: 'createaddition:honey_cake',
    N: 'createaddition:chocolate_cake',
    O: 'create:blaze_cake'
  }
).id("nadien_tweaks:create/creative_blaze_cake")


//creative controller refined storage
nadien.remove({output: 'refinedstorage:creative_controller' })
nadien.remove({id: 'avaritia:rs_creative_controller' })
  nadien.recipes.create.mechanical_crafting('refinedstorage:creative_controller',
  [
    "ABBBCBBBA",
    "BDDDCDDDB",
    "BDDCCCDDB",
    "BDCCFCCDB",
    "CCCFAFCCC",
    "BECCFCCEB",
    "BEECCCEEB",
    "BEEECEEEB",
    "ABBBCBBBA"
  ],
  {
    A: "avaritia:infinity_catalyst",
    B: "avaritia:neutron_ingot",
    C:  "refinedstorage:advanced_processor",
    D: "refinedstorage:4096b_fluid_storage_part",
    E: "refinedstorage:64k_storage_part",
    F: "refinedstorage:controller"
  }).id("nadien_tweaks:refined_storage_creative_controller")


nadien.remove({ output: 'refinedstorage:creative_storage_disk' })
nadien.remove({ id: 'avaritia:rs_creative_storage_disk' })
nadien.recipes.create.mechanical_crafting('refinedstorage:creative_storage_disk', [
  "CAAABAAAC",
  "AAAABAAAA",
  "AAAABAAAA",
  "AAADCDAAA",
  "BBBCDCBBB",
  "AAADCDAAA",
  "AAAABAAAA",
  "AAAABAAAA",
  "CAAABAAAC"
],
{
  A: "avaritia:infinity",
  B: "avaritia:neutron_compressor",
  C: "refinedstorage:creative_controller",
  D: "refinedstorage:64k_storage_part"
}).id("nadien_tweaks:refined_storage_creative_storage_disk")


nadien.remove({ output: 'refinedstorage:creative_wireless_grid' })
nadien.remove({ id: 'avaritia:rs_creative_wireless_grid' })
nadien.recipes.create.mechanical_crafting('refinedstorage:creative_wireless_grid',
[
  "HH     HH",
  "H       H",
  " BCCCCCB ",
  " CDDFEEC ",
  " CGFAFGC ",
  " CDDFEEC ",
  " BCCCCCB ",
  "H       H",
  "HH     HH"
],
{
  A: "avaritia:endest_pearl",
  B: "refinedstorage:range_upgrade",
  C: "refinedstorage:wireless_transmitter",
  D: "refinedstorage:destruction_core",
  E: "refinedstorage:construction_core",
  F: "refinedstorage:wireless_grid",
  G: "refinedstorage:network_receiver",
  H: "refinedstorage:storage_housing"
}).id("nadien_tweaks:refined_storage_creative_wireless_grid")
    

nadien.remove({ output: 'refinedstorage:creative_fluid_storage_disk' })
nadien.remove({ id: 'avaritia:rs_creative_fluid_storage_disk' })
nadien.recipes.create.mechanical_crafting('refinedstorage:creative_fluid_storage_disk',
[
  "CAAABAAAC",
  "AAAABAAAA",
  "AAAABAAAA",
  "AAADCDAAA",
  "BBBCDCBBB",
  "AAADCDAAA",
  "AAAABAAAA",
  "AAAABAAAA",
  "CAAABAAAC"
],
{
  A: "avaritia:infinity",
  B: "avaritia:neutron_compressor",
  C: "refinedstorage:creative_controller",
  D: "refinedstorage:4096b_fluid_storage_part"
}).id("nadien_tweaks:refined_storage_creative_fluid_storage_disk")
})
