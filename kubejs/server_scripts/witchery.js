ServerEvents.recipes(nadien => {


//altar
 nadien.remove({output: 'enchanted:altar' })
    nadien.shaped('enchanted:altar', [
      'FAG',
      'DBD',
      'ECE'
    ], {
      A: 'kubejs:mystical_mechanism',
      B: 'allthemodium:unobtainium_rod',
      C: 'occultism:awakened_feather',
      D: 'enchanted:rowan_log',
      E: 'minecraft:cherry_log',
      F: 'enchanted:breath_of_the_goddess',
      G: 'enchanted:exhale_of_the_horned_one'

    }).id('nadien_tweaks:witch_altar')



















})