Ponder.registry((event) => {
    event.create([
        'industrialforegoing:ore_laser_base',
        'industrialforegoing:laser_drill',
        'mekanism:ultimate_energy_cube'
    ]).scene(
        "laser_drill",
        "Punto Perfecto Laser Ore Drill",
        "kubejs:laser_drill",
        (scene, util) => {
            scene.showStructure();
            scene.idle(10);
            scene.text(
                60,
                "Laser Drill",
                [2.0, 2.5, 2.5]
            ).colored(PonderPalette.RED)
             .placeNearTarget()
             .attachKeyFrame();
        }
    );



    //camara de estasis
        event.create([
        'industrialforegoing:stasis_chamber'
    ]).scene(
        "camara_de_estasis",
        "Camara De Estasis",
        "kubejs:camara_de_estasis",
        (scene, util) => {
            scene.showStructure();
            scene.idle(10);
            scene.text(
                60,
                "Laser Drill",
                [2.0, 1.5, 2.5]
            ).colored(PonderPalette.RED)
             .placeNearTarget()
             .attachKeyFrame();
        }
    );
});
