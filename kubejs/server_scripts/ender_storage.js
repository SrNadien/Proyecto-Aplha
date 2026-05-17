ServerEvents.recipes(nadien => {



    nadien.remove({output: ['enderstorage:ender_chest', 'enderstorage:ender_tank', 'enderstorage:ender_pouch', 'enderrf:ender_battery']})

    nadien.shaped('enderstorage:ender_chest', [
        'BWB',
        'OCO',
        'BPB'
    ], {
        'P': 'minecraft:ender_pearl',     
        'O': 'allthecompressed:obsidian_1x',         
        'C': 'minecraft:ender_chest',    
        'B': 'ultimatefoods:nadienite_ingot', //ingot custom mod   
        'W': 'minecraft:lime_wool'             
    }).id('nadien_tweaks:enderchest')


    nadien.shaped('enderstorage:ender_pouch', [
        'BLB',
        'LPL',
        'BWB'
    ], {
        'P': 'minecraft:ender_pearl',    // Perlas de Ender
        'L': 'minecraft:leather',         // Cuero
        'B': 'ultimatefoods:nadienite_ingot', // Polvo de Blaze
        'W': 'minecraft:lime_wool'             // Lana
    }).id('nadien_tweaks:enderpouch')


    nadien.shaped('enderstorage:ender_tank', [
        'BWB',
        'OCO',
        'BPB'
    ], {
        'P': 'minecraft:ender_pearl',    // Perlas de Ender
        'O': 'allthecompressed:obsidian_1x',        // Obsidio
        'C': 'minecraft:cauldron',     // Caldero
        'B': 'ultimatefoods:nadienite_ingot',    // Varita de Blaze
        'W': 'minecraft:lime_wool'             // Lana
    }).id('nadien_tweaks:ender_tank')

   //ender battery
    nadien.shaped('enderrf:ender_battery', [
        'BWB',
        'OCO',
        'BPB'
    ], {
        P: 'minecraft:ender_pearl',    // Perlas de Ender
        O: 'allthecompressed:obsidian_1x',        // Obsidio
        C: 'enderio:vibrant_capacitor_bank',     // Caldero
        B: 'ultimatefoods:nadienite_ingot',    // Varita de Blaze
        W: 'minecraft:lime_wool'             // Lana
    }).id('nadien_tweaks:ender_battery')




})