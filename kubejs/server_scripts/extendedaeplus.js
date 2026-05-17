ServerEvents.recipes(nadien => {

    
        nadien.shaped(output, [
                'GIG',
                'XCY',
                'AVU'
            ], {
                G: 'ae2:quartz_glass',
                I: item,
                X: typeA,
                C: component,
                Y: typeB,
                A: 'allthemodium:allthemodium_ingot',
                V: 'allthemodium:vibranium_ingot',
                U: 'allthemodium:unobtainium_ingot'
            })
    
        })
        {
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "SZS",
    "QXQ",
    "SIS"
  ],
  "key": {
    "S": {
      "type": "neoforge:components",
      "items": "extendedae_plus:entity_speed_card",
      "components": {
        "minecraft:custom_data": {
          "EAS:mult": 2
        }
      },
      "strict": true
    },
    "Z": {
      "item": "ae2:dense_energy_cell"
    },
    "Q": {
      "item": "ae2:singularity"
    },
    "X": {
      "item": "minecraft:nether_star"
    },
    "I": {
      "item": "extendedae:ex_io_port"
    }
  },
  "result": {
    "id": "extendedae_plus:entity_speed_ticker",
    "count": 1
  }
}