// ServerEvents.recipes(nadien => {

//     function gen(out, left, right, speed, below) {
//         let recipe = {
//             "type": "cobblegengalore:blockgen",
//             "result": out,
//             "left": {
//                 "Name": left
//             },
//             "right": {
//                 "Name": right
//             },
//             "speed": speed || 1,
//             "consumeRight": true
//         }

//         if(below) {
//             recipe.modifier = {
//                 "Name": below
//             }
//         }

//         nadien.custom(recipe).id(`nadien_tweaks:cobble_galore/blockgen/${out.id.split(':')[1]}`)
//     }


//     //   function gen_not_consume(out, left, right, speed, below) {
//     //     let recipe = {
//     //         "type": "cobblegengalore:blockgen",
//     //         "result": out,
//     //         "left": {
//     //             "Name": left
//     //         },
//     //         "right": {
//     //             "Name": right
//     //         },
//     //         "speed": speed || 1,
//     //         "consumeRight": false
//     //     }

//     //     if(below) {
//     //         recipe.modifier = {
//     //             "Name": below
//     //         }
//     //     }

//     //     nadien.custom(recipe).id(`nadien_tweaks:cobble_galore/blockgen/${out.id.split(':')[1]}`)
//     // }

//     gen(Item.of('minecraft:end_stone', 1), 'exdeorum:witch_water', 'minecraft:lava', 1, 'minecraft:glowstone')
//     gen(Item.of('minecraft:netherrack', 1), 'exdeorum:witch_water', 'minecraft:lava', 1, 'minecraft:redstone_block')
//     gen(Item.of('allthemodium:ancient_stone', 1), 'minecraft:packed_ice', 'allthemodium:soul_lava', 1, 'allthemodium:allthemodium_block')
    


// // // treated wood
// // gen_not_consume('immersiveengineering:treated_wood_horizontal', 'minecraft:netherite_block', 'immersiveengineering:biodiesel', 1, 'minecraft:end_stone')

// // // // soul stone
// // // // gen('mysticalagriculture:soulstone', 'mysticalagriculture:soulstone_cobble', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // // // black stone
// // // gen(, , 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // gen_not_consume(Item.of('minecraft:blackstone', 16), 'minecraft:coal_block', 'productivemetalworks:molten_lead', 1, 'minecraft:coal_block')
// // // // dust exnihilo
// // // gen(, , 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // gen_not_consume(Item.of('exdeorum:dust', 16), 'exdeorum:compressed_dust', 'minecraft:water', 1, 'exdeorum:dust')
// // // // crushed end stone exnihilo
// // // gen(, , 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // gen_not_consume(Item.of('exdeorum:crushed_end_stone', 16), 'exdeorum:compressed_crushed_end_stone', 'productivemetalworks:molten_ender', 1, 'exdeorum:crushed_end_stone')

// // // // crushed netherrack exnihilo
// // // gen(, , 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // gen_not_consume(Item.of('exdeorum:compressed_netherrack', 16), 'exdeorum:crushed_netherrack', 'minecraft:lava', 1, 'exdeorum:crushed_netherrack')
// // // // end stone (compost → dirt)
// // // gen('minecraft:dirt', 'farmersdelight:organic_compost', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // // // darkstone forbidden
// // // // gen('minecraft:chiseled_polished_blackstone', 'forbidden_arcanus:darkstone', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // // // end stone bricks → end stone
// // // gen('minecraft:end_stone_bricks', 'minecraft:end_stone', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // // // cristal
// // // gen(, , 'minecraft:netherite_block', 1, )
// //  gen_not_consume('minecraft:glass', 'mekanism:structural_glass', 'exdeorum:witch_water', 1, 'allthecompressed:glass_1x')
// // // // certus crystal
// // // gen(, 'ae2:quartz_block', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// //  gen_not_consume(Item.of('ae2:quartz_block', 32), 'ae2:64k_crafting_storage', 'advanced_ae:quantum_infusion_source', 1, 'ae2:64k_crafting_storage')


// })