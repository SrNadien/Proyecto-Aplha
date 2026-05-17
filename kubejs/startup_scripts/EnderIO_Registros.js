StartupEvents.registry("item", nadien => {
    nadien.create(
            "compressed_octadic_capacitor", // id of the capacitor (will use kubejs if no namespace is specified)
            "enderio:capacitor" // type to register (always enderio:capacitor)
        )
        .displayName("Compressed Octadic Capacitor") // overrides the automatically generated display name, can still be changed with lang file
        .rarity("epic") // common, uncommon, rare, epic
        .glow(true) // enchantment overlay
        .baseValue(10) 
        .modifierValue("energy_use", 100)
        .modifierValue("ENERGY_CAPACITY", 9)
        .modifierValue(CapacitorModifier.FUEL_EFFICIENCY, 10)
        .texture("kubejs:item/compressed_octadic_capacitor") // custom texture for the capacitor; this example uses the vanilla acacia boat texture

        nadien.create(
            "double_compressed_octadic_capacitor", // id of the capacitor (will use kubejs if no namespace is specified)
            "enderio:capacitor" // type to register (always enderio:capacitor)
        )
        .displayName("Double Compressed Octadic Capacitor") // overrides the automatically generated display name, can still be changed with lang file
        .rarity("epic") // common, uncommon, rare, epic
        .glow(true) // enchantment overlay
        .baseValue(20)
        .modifierValue("energy_use", 200)
        .modifierValue("ENERGY_CAPACITY", 12)
        .modifierValue(CapacitorModifier.FUEL_EFFICIENCY, 20)
        .texture("kubejs:item/double_compressed_octadic_capacitor") // custom texture for the capacitor; this example uses the vanilla acacia boat texture
})