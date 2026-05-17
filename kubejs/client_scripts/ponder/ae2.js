Ponder.registry((nadien) => {

    // Controlador AE2
    nadien.create([
        'ae2:controller'
    ]).scene(
        "controlador_ae2",
        "Setup perfecto Controlador AE2",
        "kubejs:controlador_ae2",
        (scene, util) => {
            scene.showStructure();
            scene.idle(10);
            scene.text(
                60,
                "Controlador AE2",
                [2.0, 2.5, 2.5]
            ).colored(PonderPalette.RED)
             .placeNearTarget()
             .attachKeyFrame();
        }
    );

    // “PC” Applied
    nadien.create([
        'ae2:crafting_accelerator',
        'ae2:crafting_unit',
        'ae2:256k_crafting_storage',
        'ae2:me_p2p_tunnel'
    ]).scene(
        "pc_applied",
        "PC Applied",
        "kubejs:pc_applied",
        (scene, util) => {
            scene.showStructure();
            scene.idle(10);
            scene.text(
                60,
                "Cerebro AE2",
                [2.0, 2.5, 2.5]
            ).colored(PonderPalette.RED)
             .placeNearTarget()
             .attachKeyFrame();
        }
    );

    // Ensambladora Molecular
    nadien.create([
        'ae2:pattern_provider',
        'ae2:molecular_assembler',
        'ae2:me_p2p_tunnel'
    ]).scene(
        "ensambladora_molecular",
        "Ensambladora Molecular",
        "kubejs:ensambladora_molecular",
        (scene, util) => {
            scene.showStructure();
            scene.idle(10);
            scene.text(
                60,
                "Ensabmladoa Molecular",
                [2.0, 2.5, 2.5]
            ).colored(PonderPalette.RED)
             .placeNearTarget()
             .attachKeyFrame();
        }
    );

});
