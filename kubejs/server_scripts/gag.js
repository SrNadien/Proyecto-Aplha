ServerEvents.recipes(nadien => {
  nadien.remove({ id: 'gag:time_sand_pouch' })
  nadien.shaped('gag:time_sand_pouch', ['UFU', 'BCB', 'LBL'], {
    U: 'minecraft:netherite_ingot',
    L: 'allthemodium:unobtainium_ingot',
    C: 'minecraft:nether_star',
    F: 'minecraft:nautilus_shell',
    B: 'allthemodium:unobtainium_ingot'
  }).id('nadien_tweaks:temporalpouch')
})
