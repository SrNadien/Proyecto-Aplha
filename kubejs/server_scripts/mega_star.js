ServerEvents.recipes(nadien => {

  //star
  // nadien.recipes.create.mechanical_crafting('ultimatefoods:galactic_star', [
  //     "AAAAAAAAA",
  //     "A  BBB  A",
  //     "A B  B  A",
  //     "A   B   A",
  //     "A  B    A",
  //     "A  B    A",
  //     "A       A",
  //     "A  B    A",
  //     "AAAAAAAAA"
  //   ], {
  //      A: 'ultimatefoods:patricio_estrella',
  //      B: 'ultimatefoods:pepita_de_mega_estrella'
  // }).id('nadien_tweaks:cubitokarma')


  nadien.recipes.create.mechanical_crafting('ultimatefoods:galactic_star', [
    '    A    ',
    '   AJA   ',
    'AAAPFQaAA',
    'AJXCDESJA',
    ' AMBIHRA ',
    '  AKGLA  ',
    ' AYTAWJA ',
    'AOJA ANJA',
    'AAA   AAA'
  ], {
    A: 'allthecompressed:vibranium_allthemodium_alloy_block_3x',
    B: 'ultimatefoods:transmisor',
    C: 'ultimatefoods:dragonsoul',
    D: 'ultimatefoods:brujulamaldita',
    E: 'ultimatefoods:agujeronegro',
    F: 'allthecompressed:nether_star_block_5x',
    G: 'ultimatefoods:calavera',
    H: 'ultimatefoods:semilla',
    I: 'ultimatefoods:patricio',
    J: 'allthemodium:unobtainium_vibranium_alloy_block',
    K: 'ultimatefoods:radioactive_fuel',
    L: 'oritech:prometheum_ingot',
    M: 'ultimatefoods:planos',
    N: 'ultimatefoods:radioactive_antimatter',
    O: 'ultimatefoods:catalizador',
    P: 'create:radiant_mechanism',
    Q: 'ultimatefoods:bob_esponja',
    R: 'mekanism_extras:reinforced_induction_port',
    S: 'ultimatefoods:doll',
    T: 'ultimatefoods:reactormini',
    X: 'ultimatefoods:portalmini',
    Y: 'mysticalagradditions:creative_essence',
    W: 'ultimatefoods:galactic_globe',
    a: 'oritech:nuke'
  }).id('nadien_tweaks:galactic_star')



     nadien.recipes.summoningrituals
        .altar('avaritia:eternal_singularity')
        .itemInputs([
          'ultimatefoods:transmisor',
          'ultimatefoods:dragonsoul',
          'ultimatefoods:brujulamaldita',
          'ultimatefoods:agujeronegro',
          'ultimatefoods:planos',
          'ultimatefoods:radioactive_antimatter',
          'ultimatefoods:catalizador',
          'ultimatefoods:calavera',
          'ultimatefoods:semilla',
          'ultimatefoods:patricio',
          'ultimatefoods:bob_esponja',
          'ultimatefoods:doll',
          'ultimatefoods:reactormini',
          'ultimatefoods:portalmini',
          'mysticalagradditions:creative_essence',
          'oritech:nuke',
        ])
        .ticks(60)
        .itemOutputs(['ultimatefoods:galactic_star'])
        .id('nadien_tweaks:estrella_galactica_summoning_ritual')

})