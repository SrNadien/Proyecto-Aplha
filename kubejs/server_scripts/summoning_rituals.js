//priotity 99
ServerEvents.recipes(nadien => {

    nadien.remove({output: 'summoningrituals:altar' })
    nadien.shaped('summoningrituals:altar', [`GRG`, `SWS`, ` S `], {
        G: `minecraft:gold_ingot`,
        R: `minecraft:red_carpet`,
        S: `minecraft:stone`,
        W: `minecraft:oak_log`
    }).id('nadien_tweaks:altar')

    // slime
    nadien.recipes.summoningrituals
        .altar('minecraft:milk_bucket')
        .itemInputs([
            '4x #c:slimeballs',
            '2x minecraft:stone',
            'minecraft:dirt'
        ])
        .entityOutputs(['minecraft:slime'])
        .conditions(conditions =>
            conditions
                 .biomes(["minecraft:plains", "minecraft:desert"])
                .time(SummoningTime.NIGHT)
        )
        .id('nadien_tweaks:slime')

    // squid
    nadien.recipes.summoningrituals
        .altar('minecraft:water_bucket')
        .itemInputs([
            '4x minecraft:black_dye',
            '2x minecraft:stone',
            'minecraft:dirt'
        ])
        .entityOutputs(['minecraft:squid'])
        .id('nadien_tweaks:calamar')

    // chicken
    nadien.recipes.summoningrituals
        .altar('minecraft:wheat_seeds')
        .itemInputs([
            '2x minecraft:dirt',
            'minecraft:short_grass',
            '2x minecraft:bone_meal',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone'
        ])
        .entityOutputs(['minecraft:chicken'])
        .conditions(conditions =>
            conditions
                .biomes(['minecraft:cherry_grove'])
                .time(SummoningTime.DAY)
        ).id('nadien_tweaks:pollo')

    // cow
    nadien.recipes.summoningrituals
        .altar('minecraft:wheat')
        .itemInputs([
            'minecraft:leather',
            'minecraft:short_grass',
            'minecraft:bone_meal',
            'minecraft:dirt',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone',
            'minecraft:hay_block'
        ])
        .entityOutputs(['minecraft:cow'])
        .conditions(conditions =>
            conditions
                .time(SummoningTime.DAY)
        )
        .id('nadien_tweaks:vaca')

    // sheep
    nadien.recipes.summoningrituals
        .altar('minecraft:string')
        .itemInputs([
            '2x minecraft:dirt',
            'minecraft:short_grass',
            'minecraft:bone_meal',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone',
            'minecraft:white_wool'
        ])
        .entityOutputs(['minecraft:sheep'])
        .conditions(conditions =>
            conditions
                .time(SummoningTime.DAY)
        )
        .id('nadien_tweaks:oveja')

    // pig
    nadien.recipes.summoningrituals
        .altar('minecraft:carrot')
        .itemInputs([
            '2x minecraft:dirt',
            'minecraft:short_grass',
            'minecraft:bone_meal',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone',
            'farmersdelight:carrot_crate'
        ])
        .entityOutputs(['minecraft:pig'])
        .conditions(conditions =>
            conditions
                .time(SummoningTime.DAY)
        )
        .id('nadien_tweaks:cerdo')

    // fox
    nadien.recipes.summoningrituals
        .altar('minecraft:sweet_berries')
        .itemInputs([
            '2x minecraft:dirt',
            'minecraft:short_grass',
            'minecraft:bone_meal',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone',
            'minecraft:spruce_sapling'
        ])
        .entityOutputs(['minecraft:fox'])
        .conditions(conditions =>
            conditions
                .time(SummoningTime.DAY)
        )
        .id('nadien_tweaks:zorro')

    // bat
    nadien.recipes.summoningrituals
        .altar('minecraft:torch')
        .itemInputs([
            '2x minecraft:dirt',
            'minecraft:short_grass',
            'minecraft:bone_meal',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone',
            'minecraft:coal_block'
        ])
        .entityOutputs(['minecraft:bat'])
        .conditions(conditions =>
            conditions
                .time(SummoningTime.DAY)
        )
        .id('nadien_tweaks:murcielago')

    // wolf
    nadien.recipes.summoningrituals
        .altar('minecraft:bone')
        .itemInputs([
            '2x minecraft:dirt',
            'minecraft:short_grass',
            'minecraft:bone_meal',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone',
            'minecraft:bone_block'
        ])
        .entityOutputs(['minecraft:wolf'])
        .conditions(conditions =>
            conditions
                .time(SummoningTime.DAY)
        )
        .id('nadien_tweaks:lobo')

    // cat
    nadien.recipes.summoningrituals
        .altar('minecraft:cod')
        .itemInputs([
            '2x minecraft:dirt',
            'minecraft:short_grass',
            'minecraft:bone_meal',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone',
            'minecraft:cooked_cod'
        ])
        .entityOutputs(['minecraft:cat'])
        .conditions(conditions =>
            conditions
                .time(SummoningTime.DAY)
        )
        .id('nadien_tweaks:gato')

    // bee
    nadien.recipes.summoningrituals
        .altar('minecraft:glass_bottle')
        .itemInputs([
            '2x minecraft:dirt',
            'minecraft:short_grass',
            'minecraft:bone_meal',
            'minecraft:clay',
            'minecraft:grass_block',
            'minecraft:stone',
            'minecraft:sugar'
        ])
        .entityOutputs(['minecraft:bee'])
        .conditions(conditions =>
            conditions
                .time(SummoningTime.DAY)
        )
        .id('nadien_tweaks:abeja')


    // PIGLICH 
    nadien.recipes.summoningrituals
        .altar('ars_creo:starbuncle_wheel')
        .itemInputs([
            '3x allthemodium:unobtainium_ingot',
            'mekanism:yellow_cake_uranium',
            '4x kubejs:ingot_of_elevation'
        ])
        .entityOutputs(['allthemodium:piglich'])
        .conditions(conditions =>
            conditions
                .dimension('minecraft:the_nether')
        )
        .id('nadien_tweaks:piglitch')

    // wither
    nadien.recipes.summoningrituals
        .altar('ultimatefoods:chancla')
        .itemInputs([
            '3x minecraft:wither_skeleton_skull',
            '4x minecraft:soul_sand'
        ])
        .entityInputs([
            SummoningEntity.input('minecraft:wither_skeleton', 3)
        ])
        .entityOutputs(['minecraft:wither'])
        .conditions(conditions =>
            conditions.blockPattern(nadien =>
                nadien
                .block([0, -1, 0], 'minecraft:soul_soil')
        )
           )
        .sacrificeZone([3, 3, 3])
        .id('nadien_tweaks:wither_boss')

    // ender dragon
    nadien.recipes.summoningrituals
        .altar('extendedcrafting:flux_star')
        .itemInputs([
            '3x minecraft:shulker_shell',
            '4x minecraft:end_crystal'
        ])
        .entityInputs([
            SummoningEntity.input('minecraft:enderman', 8)
        ])
        .entityOutputs(['minecraft:ender_dragon'])
        .conditions(conditions =>
            conditions.blockPattern(nadien =>
                nadien
                .block([0, -1, 0], 'mekanism:steel_casing')
        )
        )
        .sacrificeZone([5, 5, 5])
        .id('nadien_tweaks:ender_dragon')

    // warden
    nadien.recipes.summoningrituals
        .altar('minecraft:sculk')
        .itemInputs([
            '4x minecraft:sculk_vein',
            '4x minecraft:sculk_sensor',
            '4x minecraft:sculk_catalyst',
            '4x minecraft:sculk_shrieker',
            '4x minecraft:calibrated_sculk_sensor'
        ])
        .entityInputs([
            SummoningEntity.input('minecraft:iron_golem', 4)
        ])
        .entityOutputs(['minecraft:warden'])
        .conditions(conditions =>
            conditions.blockPattern(nadien =>
                nadien
                .block([0, -1, 0], 'minecraft:sculk')
        )
    )
        .sacrificeZone([5, 5, 5])
        .id('nadien_tweaks:warden')

    // wilden guardian
    nadien.recipes.summoningrituals
        .altar('ars_nouveau:ritual_wilden_summon')
        .itemInputs([
            'ars_nouveau:wilden_horn',
            'ars_nouveau:wilden_spike',
            'ars_nouveau:wilden_wing'
        ])
        .entityOutputs(['ars_nouveau:wilden_guardian'])
        .sacrificeZone([5, 5, 5])
        .id('nadien_tweaks:wilden')

    // nadienite
    nadien.recipes.summoningrituals
        .altar('create:brass_hand')
        .itemInputs([
            'justdirethings:eclipsealloy_ingot', 
            'enderio_endergy:crystalline_alloy_ingot'
        ])
        .itemOutputs([
            SummoningItem.of('8x ultimatefoods:nadienite_ingot')
        ])
        .conditions(conditions =>
            conditions.blockPattern(nadien =>
                nadien
                .block([0, -1, 0], 'ultimatefoods:nadienite_block')
        )
        )
        .sacrificeZone([5, 5, 5])
        .id('nadien_tweaks:nadienite')

})