ServerEvents.recipes( nadien => {

    nadien.remove({ output:['mysticalagriculture:infusion_pedestal', 'mysticalagriculture:infusion_altar', 'mysticalagriculture:awakening_pedestal', 'mysticalagriculture:awakening_altar', 'mysticalagriculture:essence_vessel', 'mysticalagriculture:master_infusion_crystal'] })
        
        nadien.shaped(Item.of("mysticalagriculture:awakening_pedestal"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" })
        nadien.shaped(Item.of('mysticalagriculture:essence_vessel'), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" })
        nadien.shaped(Item.of("mysticalagriculture:awakening_altar"), ["ABA", " C ", "CCC"], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" })
        nadien.shaped(Item.of("mysticalagriculture:infusion_pedestal"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:red_wool", C: "minecraft:stone" })
        nadien.shaped(Item.of("mysticalagriculture:infusion_altar"), ["ABA", " C ", "CCC"], { A: "kubejs:mystical_mechanism", B: "minecraft:red_wool", C: "minecraft:stone" })


           // essence crafting for custom seeds
           function essenceCircle(result, essenceType) {
            nadien.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`ultimate_utilities:mysticalagriculture/${essenceType}_essence_crafting`)
            }
            essenceCircle('allthemodium:allthemodium_ingot', 'allthemodium')
            essenceCircle('allthemodium:vibranium_ingot', 'vibranium')
            essenceCircle('allthemodium:unobtainium_ingot', 'unobtainium')     
            essenceCircle('hostilenetworks:prediction_matrix', 'predicciondematrix')
            essenceCircle('avaritia:crystal_matrix_ingot', 'crystal_matrix')
            essenceCircle('16x industrialforegoing:pink_slime_ingot', 'pink_slime')
            essenceCircle('fluxnetworks:flux_dust', 'flux_dust')
            essenceCircle('create:andesite_alloy' , 'andesite_alloy')
            essenceCircle('8x megacells:sky_steel_ingot', 'sky_steel_ingot')
            essenceCircle('16x mekanism_extras:ingot_naquadah', 'naquadah')
            essenceCircle('16x mysticalagriculture:prosperity_shard', 'prosperity_shard')
            essenceCircle('8x create:polished_rose_quartz', 'cuarzorosa')
            essenceCircle('actuallyadditions:black_quartz', 'black_quartz')
            essenceCircle('8x extendedae:entro_ingot', 'entro')
            essenceCircle('8x justdirethings:celestigem', 'celestigem')
            essenceCircle('8x oritech:prometheum_ingot', 'prometheum')
            essenceCircle('2x ultimatefoods:nadienite_ingot', 'nadienite_ingot')
            essenceCircle('4x justdirethings:blazegold_ingot', 'blaze_gold')
            essenceCircle('4x justdirethings:ferricore_ingot', 'ferricore')
            essenceCircle('4x justdirethings:eclipsealloy_ingot', 'eclipse_alloy')
            essenceCircle('4x forbidden_arcanus:deorum_ingot', 'deorum_ingot')
            essenceCircle('4x cognition:cognitive_alloy', 'cognition')
            essenceCircle('32x xycraft_world:kivi', 'kivi')           
            essenceCircle('8x occultism:spirit_attuned_gem', 'spirit_gem')
            essenceCircle('64x ultimatefoods:cajita_feliz', 'cajita_feliz')
            essenceCircle('4x kubejs:ingot_of_elevation', 'elevatium_ingot')
            essenceCircle('8x createcasing:chorium_ingot', 'chromium') 
            // essenceCircle('4x eidolon_repraised:arcane_gold_ingot', 'arcane_gold_ingot')
            // essenceCircle('draconicevolution:chaos_shard' , 'chaos_shard')  
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')

                     //Xychorium Gems
    nadien.shaped('5x xycraft_world:xychorium_gem_light',
        ['XX ',
         'X  ',
         '   '],
         {
            X: 'mysticalagriculture:xychorium_gem_essence'
        }).id('allthemods:essence/xycraft/gem_light').noMirror()
    nadien.shaped('5x xycraft_world:xychorium_gem_dark',
        [' XX',
         '  X',
         '   '],
         {
            X: 'mysticalagriculture:xychorium_gem_essence'

         }).id('allthemods:essence/xycraft/gem_dark').noMirror()
    nadien.shaped('5x xycraft_world:xychorium_gem_red',
        ['   ',
         'X  ',
         'XX '],
         {
            X: 'mysticalagriculture:xychorium_gem_essence'
        }).id('allthemods:essence/xycraft/gem_red').noMirror()
    nadien.shaped('5x xycraft_world:xychorium_gem_green',
        ['   ',
         '  X',
         ' XX'],
         {
            X: 'mysticalagriculture:xychorium_gem_essence'
        }).id('allthemods:essence/xycraft/gem_green').noMirror()
    nadien.shaped('5x xycraft_world:xychorium_gem_blue',
        [' X ',
         ' X ',
         ' X '],{
            X: 'mysticalagriculture:xychorium_gem_essence'
         }).id('allthemods:essence/xycraft/gem_blue').noMirror()

 //ornium essence
 nadien.replaceInput({id: 'mysticalextendedtier:ornium_essence'}, 'mysticalagriculture:supremium_essence', 'mysticalagradditions:insanium_essence')

  //fragmentos netherite
   nadien.shaped('8x minecraft:netherite_scrap', [
    ' A ', 
    'AAA',
    ' A '
    ], {
        A: 'mysticalagriculture:netherite_essence'
      }).id('ultimate_utilities:netherite_scrap')

//escombro ancestrales
   nadien.shaped('8x minecraft:ancient_debris', [
    'A  ', 
    ' A ',
    '  A'
    ], {
        A: 'mysticalagriculture:netherite_essence'
      }).id('ultimate_utilities:ancient_debris')

      //master infusion crystal
      nadien.shaped('mysticalagriculture:master_infusion_crystal', [
                'PRP',
                'RAR',
                'PRP'
              ], {
                P: 'mysticalagradditions:insanium_ingot',
                A: 'matc:supremium_crystal',
                R: 'mysticalagradditions:insanium_essence'
              }).id('ultimate_utilities:master_infusion_stone')

        //escombro ancestrales
   nadien.shaped('4x avaritia:infinity_ingot', [
    'AAA', 
    'AAA',
    'AAA'
    ], {
        A: 'mysticalagriculture:infinity_essence'
      }).id('ultimate_utilities:infinity_ingot_from_essence')

   //creative essence
   nadien.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
        A: 'mysticalextendedtier:ouranium_block',
        C: 'mysticalextendedtier:ouranium_gemstone_block',
        B: 'mysticalagriculture:master_infusion_crystal'
      }).id('ultimate_utilities:allthetweaks/creative_essence')


      //                     ====>removed cruxs<====


      //remove infinite crux
    nadien.remove({ id: 'mystical_extended_tier:infinity_crux' })

    //remove nether star crux
    nadien.remove({ id: 'mysticalagradditions:nether_star_crux' })

    //remove nitro crystal crux
    nadien.remove({ id: 'mysticalagradditions:nitro_crystal_crux' })

})