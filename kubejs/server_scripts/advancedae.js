ServerEvents.recipes(nadien => {
   nadien.remove({output: ['advanced_ae:quantum_helmet', 'advanced_ae:quantum_chestplate', 'advanced_ae:quantum_leggings', 'advanced_ae:quantum_boots'] }) 



nadien.remove({output: [
  'advanced_ae:quantum_helmet',
  'advanced_ae:quantum_chestplate',
  'advanced_ae:quantum_leggings',
  'advanced_ae:quantum_boots'
]})


// ===============================
// CASCO CUÁNTICO
// ===============================
nadien.recipes.create.mechanical_crafting('advanced_ae:quantum_helmet', [
  "         ",
  " ABCDCBA ",
  " BEEFEEB ",
  " CEGHGEC ",
  " DFIJKFD ",
  " CELMLEC ",
  " BEEFEEB ",
  " ABCDCBA "
], {
  A: "mekanism:pellet_polonium",
  B: "ae2:singularity",
  C: "avaritia:crystal_matrix_ingot",
  D: "avaritia:neutron_pile",
  E: "kubejs:empowered_glod_crystal",
  F: "kubejs:ingot_of_elevation",
  G: "minecraft:red_mushroom",
  H: "ultimatefoods:nadienite_helmet",
  I: "oritech:exo_helmet",
  J: "advanced_ae:quantum_alloy_plate",
  K: "mekanism:mekasuit_helmet",
  L: "minecraft:brown_mushroom",
  M: "justdirethings:eclipsealloy_helmet"
}).id('nadien_tweaks:quantum_helmet')


// ===============================
// PECHERA CUÁNTICA
// ===============================
nadien.recipes.create.mechanical_crafting('advanced_ae:quantum_chestplate', [
  "         ",
  " ABCDCBA ",
  " BEEFEEB ",
  " CEGHGEC ",
  " DFIJKFD ",
  " CELMLEC ",
  " BEEFEEB ",
  " ABCDCBA "
], {
  A: "mekanism:pellet_polonium",
  B: "ae2:singularity",
  C: "avaritia:crystal_matrix_ingot",
  D: "avaritia:neutron_pile",
  E: "kubejs:empowered_glod_crystal",
  F: "kubejs:ingot_of_elevation",
  G: "minecraft:red_mushroom",
  H: "ultimatefoods:nadienite_chestplate",
  I: "justdirethings:eclipsealloy_chestplate",
  J: "advanced_ae:quantum_alloy_plate",
  K: "mekanism:mekasuit_bodyarmor",
  L: "minecraft:brown_mushroom",
  M: "oritech:exo_chestplate"
}).id('nadien_tweaks:quantum_chestplate')


// ===============================
// PANTALONES CUÁNTICOS
// ===============================
nadien.recipes.create.mechanical_crafting('advanced_ae:quantum_leggings', [
  "         ",
  " ABCDCBA ",
  " BEEFEEB ",
  " CEGHGEC ",
  " DFIJKFD ",
  " CELMLEC ",
  " BEEFEEB ",
  " ABCDCBA ",
  "         "
], {
  A: "mekanism:pellet_polonium",
  B: "ae2:singularity",
  C: "avaritia:crystal_matrix_ingot",
  D: "avaritia:neutron_pile",
  E: "kubejs:empowered_glod_crystal",
  F: "kubejs:ingot_of_elevation",
  G: "minecraft:red_mushroom",
  H: "ultimatefoods:nadienite_leggings",
  I: "justdirethings:eclipsealloy_leggings",
  J: "advanced_ae:quantum_alloy_plate",
  K: "mekanism:mekasuit_pants",
  L: "minecraft:brown_mushroom",
  M: "oritech:exo_leggings"
}).id('nadien_tweaks:quantum_leggings')


// ===============================
// BOTAS CUÁNTICAS
// ===============================
nadien.recipes.create.mechanical_crafting('advanced_ae:quantum_boots', [
  "         ",
  " ABCDCBA ",
  " BEEFEEB ",
  " CEGHGEC ",
  " DFIJKFD ",
  " CELMLEC ",
  " BEEFEEB ",
  " ABCDCBA ",
  "         "
], {
  A: "mekanism:pellet_polonium",
  B: "ae2:singularity",
  C: "avaritia:crystal_matrix_ingot",
  D: "avaritia:neutron_pile",
  E: "kubejs:empowered_glod_crystal",
  F: "kubejs:ingot_of_elevation",
  G: "minecraft:red_mushroom",
  H: "ultimatefoods:nadienite_boots",
  I: "justdirethings:eclipsealloy_boots",
  J: "advanced_ae:quantum_alloy_plate",
  K: "mekanism:mekasuit_boots",
  L: "minecraft:brown_mushroom",
  M: "oritech:exo_boots"
}).id('nadien_tweaks:quantum_boots')



   


})