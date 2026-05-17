ServerEvents.recipes(nadien => {

 

  nadien.recipes.create.mechanical_crafting('ultimatefoods:patricio', [
      '    B    ',
      '   BCA   ',
      'BBBGCABBB',
      'ACGCGGGCA',
      ' AAGGGBA ',
      '  EDDDE  ',
      ' EFEDEFE ',
      'BEDD DDEB',
      'AAA   AAA'
  ],
  {
      A: 'minecraft:magenta_concrete',
      B: 'minecraft:pink_concrete',
      C: 'minecraft:pink_concrete_powder',
      D: 'minecraft:green_concrete',
      E: 'minecraft:green_concrete_powder',
      F: 'minecraft:lime_concrete',
      G: 'minecraft:magenta_concrete_powder'
    })
  // nadien.custom({
  //   type: "create:mechanical_crafting",
  //   pattern: [
   
  //   ],
  //   key: {
  //     A: Ingredient.of('minecraft:magenta_concrete').toJson(),
  //     B: Ingredient.of('minecraft:pink_concrete').toJson(),
  //     C: Ingredient.of('minecraft:pink_concrete_powder').toJson(),
  //     D: Ingredient.of('minecraft:green_concrete').toJson(),
  //     E: Ingredient.of('minecraft:green_concrete_powder').toJson(),
  //     F: Ingredient.of('minecraft:lime_concrete').toJson(),
  //     G: Ingredient.of('minecraft:magenta_concrete_powder').toJson()
  //   },
  //   result: Ingredient.of('ultimatefoods:patricio_estrella').toJson(),
  //   acceptMirrored: false
  // }).id('nadien_tweaks:patrick')




// Bob Esponja
nadien.recipes.create.mechanical_crafting('ultimatefoods:bob_esponja', [
  "SSSSSSSSS",
  "S   A   S",
  "S  ABA  S",
  "S ABGBA S",
  "SABGDGBAS",
  "S ABGBA S",
  "S  ABA  S",
  "S   A   S",
  "SSSSSSSSS"
  ], {
    S: 'minecraft:chiseled_stone_bricks', // Marco de piedra
    A: 'minecraft:yellow_concrete',       // Cuerpo amarillo (esponja)
    B: 'minecraft:brown_concrete',        // Pantalones marrones
    G: 'minecraft:white_concrete',        // Camisa blanca
    D: 'minecraft:blue_concrete'          // Corbata azul
  }).id('nadien_tweaks:bobtoronja')



 nadien.recipes.create.mechanical_crafting('ultimatefoods:galactic_globe', [
    "SSSSSSSSS",
    "S G G G S",
    "S G M M S",
    "S G M M S",
    "S G G G S",
    "S G G G S",
    "S M M M S",
    "S S S S S",
    "SSSSSSSSS"
  ], {
    S: 'minecraft:chiseled_stone_bricks',  // Marco de piedra
    G: 'constructionwand:netherite_wand',             // Globo terráqueo (el centro del mapa)
    M: 'kubejs:mek_mechanism',              // Globo de la luna (alrededor de la tierra)
  }).id('nadien_tweaks:galacticglobealt');
  



  



})
