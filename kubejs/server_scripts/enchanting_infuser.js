ServerEvents.recipes(nadien => {





    //eliminadas
    nadien.remove({ output:'enchantinginfuser:advanced_enchanting_infuser' })
    

    //mesa de encantamientos avanzda ultima
nadien.recipes.occultism.ritual(
    'enchantinginfuser:advanced_enchanting_infuser', // resultado
    [ // ingredientes
        'allthecompressed:obsidian_1x',
        'allthecompressed:obsidian_1x',
        'kubejs:enchanted_mechanism',
        'kubejs:enchanted_mechanism',
        'ars_nouveau:archmage_spell_book',
        'minecraft:netherite_block',
        'minecraft:netherite_block',
        'oritech:prometheum_ingot',
        'oritech:prometheum_ingot',
        'oritech:prometheum_ingot',
        'occultism:afrit_essence',
        'occultism:afrit_essence'
    ],
    'enchantinginfuser:enchanting_infuser', // item de activación
    'occultism:craft_djinni' // tipo de ritual (pentáculo)
)
.dummy('occultism:ritual_dummy/craft_storage_remote') // dummy
.duration(30); // duración

    
})
