ServerEvents.recipes(nadien => {
  //eliminadas
  nadien.remove({output:'minecraft:chest'})
  nadien.remove({output:'minecraft:furnace'})
	nadien.remove({output:'minecraft:piston'})
	nadien.remove({output:'minecraft:sticky_piston'})
	nadien.remove({output:'minecraft:cobweb'})
	nadien.remove({output:'mekanism:scuba_mask'})
	nadien.remove({output:'minecraft:ender_chest'})
  nadien.remove({output:'minecraft:bucket'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x4'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x2'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x1'})
  nadien.remove({output: 'minecraft:furnace'})
	
    //bola de nieve
    nadien.shapeless('minecraft:snowball', [
        '#c:slime_balls',
        '#c:dyes/white'
    ])


     //cabeza
     const nadienskull = 'minecraft:player_head[profile={id:[I;2118518208,-1698609149,-1383017808,204096419],name:"SrNadien",properties:[{name:"textures",signature:"iLgnxHTGPCRyIti3vMv7q2OJA6DT/UIWiY/U+PMjiWs3HYj686G5McPoHPggUqPUCWCsZOO0M1zEd7tYK28R6L7xqvSOSsvLtqUB/BNOv8aAbwOEns9rKHQGLNYbyiM46Y+PZQT1iHYzeVRJQTal2PpR+wujTf1yr5gy2n7v3OwrdpZghqgqGdZxoChKFSw1E8+Knh4eHWV2yWmyFGU10MgGmYOH0jDm597GClFzyp0fhoh2Gv5dLNXRkQXrrc0umhjJ08McRNvk7Q2bsvjN5YmUTLTLoIEpKKDpCwhvl1c2TqO4+jLSc0ksRuawZvbyMCsFPweml42kLabaA8H1MXijDDL/M0OwqgaRUb+s6Vd+DFuICZtSstdcxActluHdW+r7155JsVCAte7e1pYJQdC08UPlvbfTcYrTWO88vLwn/YKT5WUWqADlwU8927t3VhLcWDMJpjl2KSqiUnYTEkkCeAhKEjcTFOWI3qi3cNC+dFmha1Smq2x1av9fP5N/uw1YhmF+7M8vLYusjkYgY1iFapwVRc1L96xnXZrTIrMCAQ5Su8Ts13XTraJ0GUEVzZAXlSKwPt8U6aJm6+r9j9LKfh8RWgLHaEu2a44Li9jlNb+sggaiPzg01ywuXcTsgEoK/D/MZUgxuXmSM73NOV+yv9pdjJHPdaMgRqHualg=",value:"ewogICJ0aW1lc3RhbXAiIDogMTc1OTI2NjY0NzQ0NCwKICAicHJvZmlsZUlkIiA6ICI3ZTQ2MDVjMDlhYzE0ODAzYWQ5MGQyYjAwYzJhNDNhMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJTck5hZGllbiIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS83ZGQ2YWQ2MTYyMDBkNzNkZjA4NDUyYWMyYmE1MzVhY2FhMGQ1MmU0ZDhlNWM3YjAwNDg0MjNkNGVhMDE5Nzg0IgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81NjliN2YyYTFkMDBkMjZmMzBlZmUzZjlhYjlhYzgxN2IxZTZkMzVmNGYzY2ZiMDMyNGVmMmQzMjgyMjNkMzUwIgogICAgfQogIH0KfQ=="}]}]'
     nadien.shaped(nadienskull, [
      'PPP',
      'PAP',
      'PPP'
    ], {
      P: 'minecraft:wither_skeleton_skull',
      A: 'minecraft:emerald_block'
    }).id('nadien_tweaks:cabeza_nadien')


    //manzana de notch
    const apple = ['minecraft:golden_apple', 'minecraft:apple']
    nadien.shaped('minecraft:enchanted_golden_apple', [
      'PPP',
      'PAP',
      'PPP'
    ], {
      P: 'minecraft:gold_block',
      A: apple
    }).id('nadien_tweaks:enchanted_golden_apple')


  // mesa de crafteo (disabled custom recipe)
  // nadien.remove({output: 'minecraft:crafting_table'})
  // nadien.shaped('minecraft:crafting_table', [
  //   'ab ',
  //   'cc ',
  //   '   '
  // ], {
  //   a: 'minecraft:stone_pickaxe',
  //   b: 'minecraft:stone_axe',
  //   c: 'kubejs:crafting_base'
  // }).id('nadien_tweaks:mesadecrafteo')

  nadien.recipes.create.mechanical_crafting('minecraft:crafting_table', [
    'aa ',
    'aa ',
    '   '
  ], {
    a: '#minecraft:planks'
  }).id('nadien_tweaks:mesadecrafteocreate')

  //mesa de encantamiento
  nadien.remove({output: 'minecraft:enchanting_table'})
   nadien.shaped('minecraft:enchanting_table', [
    ' c ',
    'bab',
    'aaa'
  ], {
    a: 'allthecompressed:obsidian_1x',
    b: 'avaritia:diamond_lattice',
    c: 'potionsmaster:pestle'
  }).id('nadien_tweaks:mesadenecantamientos')





    //cofre
    nadien.shaped('4x minecraft:chest', [
    'aba',
    'bcb',
    'aba'
  ], {
    a: '#minecraft:logs',
    b: '#minecraft:planks',
    c: 'minecraft:iron_nugget' 
  }).id('nadien_tweaks:cofre')


       //horno 
       nadien.shaped('minecraft:furnace', [
        'PPP',
        'PNP',
        'PPP'
      ], {
        P: 'allthecompressed:cobblestone_1x',
        N: '#minecraft:wooden_buttons' 
      }).id('nadien_tweaks:horno')




    //telaraña
    nadien.shaped('minecraft:cobweb', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:string',
    C: 'minecraft:string',
    Q: 'minecraft:string',
    I: 'minecraft:string',
    L: 'minecraft:string',
    W: 'minecraft:string',
    E: 'minecraft:string',
    H: 'minecraft:string',
    P: 'minecraft:string'
  }).id('nadien_tweaks:telarana')


  //ender chest
  nadien.shaped('minecraft:ender_chest', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    B: 'minecraft:obsidian',
    A: 'minecraft:netherite_ingot',
    C: 'minecraft:ender_eye'             
}).id('nadien_tweaks:ender_chest')    



  //enderchest 2
  nadien.shaped('minecraft:ender_chest', [
    'ABA',
    'BSB',
    'ABA'
  ], {
    B: 'minecraft:obsidian',
    A: 'minecraft:netherite_ingot',
    S: 'minecraft:ender_eye'
  }).id('nadien_tweaks:enderchestdos')

//cacota
nadien.shaped('ultimatefoods:superpoop', [
  '   ',
  ' BA',
  '   '
], {
  A: 'ultimatefoods:poop',
  B: 'minecraft:wheat'
}).id('nadien_tweaks:supercacota')

     //Piston
       nadien.shaped('minecraft:piston', [
        'TCQ',
        'ILW',
        'EHP'
      ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'minecraft:stone',
        L: 'extendedcrafting:redstone_ingot',
        W: 'minecraft:stone',
        E: 'minecraft:stone',
        H: 'minecraft:amethyst_shard',
        P: 'minecraft:stone'
      }).id('nadien_tweaks:piston')

            //Piston Pegajoso
        nadien.shaped('minecraft:sticky_piston', [
        'TCQ',
        'ILW',
        'EHP'
        ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'minecraft:stone',
        L: 'extendedcrafting:redstone_ingot',
        W: 'minecraft:stone',
        E: 'minecraft:stone',
        H: 'minecraft:piston',
        P: 'minecraft:stone'
      }).id('nadien_tweaks:pistonpegajoso')


//valde
  nadien.shaped('minecraft:bucket', [
    '   ',
    'P P',
    ' P '
  ], {
    P: '#c:plates/iron'
  }).id('nadien_tweaks:baldeugur')


  //mob masher
  nadien.remove({output: 'mob_grinding_utils:saw'})
  nadien.shaped('mob_grinding_utils:saw', [
       'SDS',
       'VRV',
       'DID'
       ], {
       D: "#c:gems/diamond",
       I: "#c:storage_blocks/iron",
       R: 'oritech:laser_arm_block',
       S: "minecraft:iron_sword",
       V: "mob_grinding_utils:spikes"
     }).id('nadien_tweaks:mob_masher')

     nadien.shaped('minecraft:elytra', ["aba", "cdc", "c c"], {
                    a: "minecraft:diamond",
                    b: "minecraft:string",
                    c: "minecraft:phantom_membrane",
                    d: "minecraft:nether_star"
                  }).id('nadien_tweaks:elytros')


})