Ponder.registry((nadien) => {

    // Andesite casing automática
    nadien.create([
        'create:andesite_casing',
        'minecraft:stripped_oak_log'
    ]).scene(
        "andesite_cassing",
        "Crear revestidor De Andesita Automatica (Funciona Con Applied)",
        "kubejs:andesite_cassing_automatic",
        (scene, util) => {
            scene.showStructure();
            scene.idle(10);

            scene.text(
                60,
                "Revestidor De Andesita",
                [2.0, 2.5, 2.5]
            ).colored(PonderPalette.RED)
             .placeNearTarget()
             .attachKeyFrame();
        }
    );

    // Madera automática
    nadien.create([
        // sustituí el tag por todos los logs específicos que quieras usar
        'minecraft:oak_log',
        'minecraft:spruce_log',
        'minecraft:birch_log',
        'minecraft:jungle_log',
        'minecraft:acacia_log',
        'minecraft:dark_oak_log'
    ]).scene(
        "madera_automaticar",
        "Madera Automatica",
        "kubejs:madera_create",
        (scene, util) => {
            scene.showStructure();
            scene.idle(10);

            scene.text(
                60,
                "Maderinchis Automatica",
                [2.0, 2.5, 2.5]
            ).colored(PonderPalette.RED)
             .placeNearTarget()
             .attachKeyFrame();
        }
    );

});
