StartupEvents.registry('block', event => {


	           //magical Soil
	            event.create('magical_soil').displayName('§bMagical Soil').grassSoundType().mapColor('grass').hardness(0.6);
               
                //bloque de estrellas wither
				event.create('nether_star_block').displayName('Bloque De Estrellas Wither').mapColor('stone')
				.hardness(10).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:beacon_base_blocks')
				.lightLevel(0.65).tagBlock('minecraft:mineable/pickaxe').requiresTool(true);


				//demonic ingot 
				event.create('demon_block').displayName('Bloque Demoniaco').mapColor('stone').hardness(10).requiresTool(true).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:beacon_base_blocks').tagBlock('minecraft:mineable/pickaxe');


                //thermal port
                event.create('oil_sand_ore').displayName('Oil Sand').mapColor('sand').hardness(0.6).requiresTool(true).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:mineable/shovel').resistance(0.6);


             //Vivid Alloy Block And Energetic Silver Block
				// event.create('vivid_alloy_block').displayName('Vivid Alloy Block').mapColor('stone').hardness(10).requiresTool(true).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:beacon_base_blocks').tagBlock('minecraft:mineable/pickaxe');
                event.create('energetic_silver_block').displayName('Energetic Silver Block').mapColor('stone').hardness(10).requiresTool(true).tagBlock('minecraft:needs_iron_tool').tagBlock('minecraft:beacon_base_blocks').tagBlock('minecraft:mineable/pickaxe');

	event.create("infinity_dust_block", "falling")
        .displayName("Infinity Dust Block")
        .soundType("sand")
        .resistance(0.6).hardness(0.5)
        .tagBlock("mineable/shovel").requiresTool(true);

    event.create("compressed_infinity_dust_block", "falling")
        .displayName("Compressed Infinity Dust Block")
        .soundType("sand")
        .resistance(1).hardness(1)
        .tagBlock("mineable/shovel").requiresTool(true);

    event.create("double_compressed_infinity_dust_block", "falling")
        .displayName("Double Compressed Infinity Dust Block")
        .soundType("sand")
        .resistance(2).hardness(2)
        .tagBlock("mineable/shovel").requiresTool(true);


				
})
