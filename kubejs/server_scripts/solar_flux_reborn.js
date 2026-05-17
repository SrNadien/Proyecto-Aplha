//soloar flux reborn By SrNadien prohibido su uso externo
ServerEvents.recipes(nadien => {


    //neutronium solar panel
    nadien.recipes.create.mechanical_crafting('solarflux:sp_avaritia.neutronium', [
        "  AABAA  ",
        " ACDDDCAA",
        "ACCDDDCCA",
        "ADDEEEDDA",
        "BDDEFEDDB",
        "ADDEEEDDA",
        "ACCDDDCCA",
        " ACDDDCA ",
        "  AABAA  "
    ], {
        A: 'avaritia:neutron_ingot',
        B: 'avaritia:crystal_matrix',
        C: 'avaritia:crystal_matrix_ingot',
        D: 'solarflux:sp_8',
        E: 'avaritia:neutron_gear',
        F: 'avaritia:infinity_catalyst'
    }).id('nadien_tweaks:neutronium_solar_panel')


    //infinite solar panel
    nadien.recipes.create.mechanical_crafting('solarflux:sp_avaritia.infinity', [
        "  AABAA  ",
        " ACCACCA ",
        "ACADEDACA",
        "ACDFGFDCA",
        "BAEGHGEAB",
        "ACDFGFDCA",
        "ACADEDACA",
        " ACCACCA ",
        "  AABAA  "
    ], {
        A: 'avaritia:neutron_pile',
        B: 'avaritia:infinity_catalyst',
        C: 'avaritia:crystal_matrix_ingot',
        D: 'avaritia:neutron_ingot',
        E: 'avaritia:neutron_nugget',
        F: 'avaritia:infinity_ingot',
        G: 'solarflux:sp_avaritia.neutronium',
        H: 'avaritia:infinity'
    }).id('nadien_tweaks:infinite_solar_panel')

})