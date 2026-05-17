StartupEvents.modifyCreativeTab('ironfurnaces:ironfurnaces_tab', nadien => {


nadien.add('ironfurnaces:allthemodium_furnace')
nadien.add('ironfurnaces:vibranium_furnace')
nadien.add('ironfurnaces:unobtainium_furnace')


nadien.removeDisplay('ironfurnaces:upgrade_obsidian');
nadien.removeDisplay('ironfurnaces:upgrade_iron');
nadien.removeDisplay('ironfurnaces:upgrade_gold');
nadien.removeDisplay('ironfurnaces:upgrade_diamond');
nadien.removeDisplay('ironfurnaces:upgrade_emerald');
nadien.removeDisplay('ironfurnaces:upgrade_crystal');
nadien.removeDisplay('ironfurnaces:upgrade_netherite');
nadien.removeDisplay('ironfurnaces:upgrade_copper');
nadien.removeDisplay('ironfurnaces:upgrade_silver');
nadien.removeDisplay('ironfurnaces:upgrade_silver2');
nadien.removeDisplay('ironfurnaces:upgrade_gold2');
nadien.removeDisplay('ironfurnaces:upgrade_iron2');
nadien.removeDisplay('ironfurnaces:upgrade_obsidian2');
nadien.removeDisplay('ironfurnaces:item_xmas');
nadien.removeDisplay('ironfurnaces:item_spooky');



})


StartupEvents.registry('creative_mode_tab', nadien => {
	nadien.create('ultimate_utilities:singularities_tab').icon(() => 'avaritia:infinity_catalyst').content(() => [
    'allthecompressed:nether_star_block_1x', 
    'allthecompressed:nether_star_block_2x', 
    'allthecompressed:nether_star_block_3x', 
    'allthecompressed:nether_star_block_4x', 
    'allthecompressed:nether_star_block_5x', 
    'allthecompressed:nether_star_block_6x', 
    'allthecompressed:nether_star_block_7x', 
    'allthecompressed:nether_star_block_8x', 
    'allthecompressed:nether_star_block_9x'
	])
})





StartupEvents.modifyCreativeTab('minecraft:redstone_tab', nadien => {
    nadien.removeDisplay('minecraft:tnt');
    })


    StartupEvents.modifyCreativeTab('ultimate_utilities:utimate_utilities_tab', nadien => {
        nadien.removeDisplay('ultimate_utilities:infinityswordbalanced');
        nadien.removeDisplay('ultimate_utilities:infinitysword_1');
        })