CustomMachineryEvents.upgrades(event => {

  event.create(Item.of("ae2:speed_card"))
    .machine("custommachinery:circuit_fabricator")
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:energy', 3))
    .modifier(CMRecipeModifierBuilder.expInput('custommachinery:speed', 0.4).min(1))
    .tooltip(Text.translate("nadiendev.tooltip.circuit_fabricator.overclock_upgrade"))

  
})