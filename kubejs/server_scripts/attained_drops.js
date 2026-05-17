ServerEvents.recipes(nadien => {
// vitñity spreaser
 nadien.remove({output: 'attained_drops:vitality_spreader'})
nadien.shaped('attained_drops:vitality_spreader', [
  ' d ',
  'aba',
  ' c '
], {
  a: 'immersive_machinery:tunnel_digger',
  b: 'allthecompressed:dirt_1x',
  c: 'apotheosis:salvaging_table',
  d: 'attained_drops:seed'
}).id('nadien_tweaks:vitality_spreader')


// seed
nadien.remove({output: 'attained_drops:seed'})
nadien.shaped('attained_drops:seed', [
  'ab ',
  'cd ',
  '   '
], {
  a: 'attained_drops:life_essence',
  b: 'pickletweaks:emerald_apple',
  c: 'enchanted:water_artichoke_seeds',
  d: 'apotheosis:gem_dust'
}).id('nadien_tweaks:seed')




})