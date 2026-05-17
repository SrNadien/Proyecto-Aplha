ClientEvents.lang('es_es', event => { 

  //eccentric tome
  event.add('item.eccentrictome.tome', 'Enciclopedia Vieja')

 event.add('block.ultimatefoods.nether_star_block', 'Bloque De Estrellas Del Wither')


  //construction sticks
  event.add('advancement.constructionstick.iron_stick.desc', 'Craftea cualquier Palo de Construcción')
  event.add('advancement.constructionstick.iron_stick.title', 'Situación Pegajosa')
  event.add('advancement.constructionstick.root.desc', 'Facilitando la construcción')
  event.add('advancement.constructionstick.root.title', 'Palos de Construcción')
  event.add('advancement.constructionstick.template_angel.desc', '¡Estoy colocando en el aire, wo-oah!')
  event.add('advancement.constructionstick.template_angel.title', 'Plantilla de Palo Ángel')
  event.add('advancement.constructionstick.template_battery.desc', 'Potencia tu juego de construcción')
  event.add('advancement.constructionstick.template_battery.title', 'Plantilla de Batería')
  event.add('advancement.constructionstick.template_destruction.desc', 'Destructor de bloques')
  event.add('advancement.constructionstick.template_destruction.title', 'Plantilla de Destrucción')
  event.add('advancement.constructionstick.template_replacement.desc', 'Fuera lo viejo, dentro lo nuevo')
  event.add('advancement.constructionstick.template_replacement.title', 'Plantilla de Reemplazo')
  event.add('advancement.constructionstick.template_unbreakable.desc', '¡No hay límites!')
  event.add('advancement.constructionstick.template_unbreakable.title', 'Plantilla irrompible')

  event.add('constructionstick.alias.emi.construction', 'Construcción')
  event.add('constructionstick.alias.emi.construction_wand', 'Varita de Construcción')
  event.add('constructionstick.alias.emi.wand', 'Varita')

  event.add('constructionstick.configuration.AngelFalling', 'Caída Ángel')
  event.add('constructionstick.configuration.AngelFalling.tooltip', 'Coloca bloques debajo mientras caes más de 10 bloques con la mejora de ángel (puede salvarte de caídas o del vacío)')
  event.add('constructionstick.configuration.BEList', 'Lista de Entidades de Bloque')
  event.add('constructionstick.configuration.BEList.tooltip', 'Lista blanca/negra para Entidades de Bloque. Permite o bloquea bloques con entidades. Puedes agregar IDs de bloque como minecraft:chest o IDs de mod como minecraft')
  event.add('constructionstick.configuration.BEWhitelist', 'Lista Blanca de Entidades de Bloque')
  event.add('constructionstick.configuration.BEWhitelist.tooltip', 'Si está en TRUE, trata BEList como lista blanca; si no, como lista negra')
  event.add('constructionstick.configuration.MaxRange', 'Rango Máximo')
  event.add('constructionstick.configuration.MaxRange.tooltip', 'Rango máximo de colocación (0: ilimitado). Afecta a todos los palos y está pensado para prevenir lag, no para balancear el juego.')
  event.add('constructionstick.configuration.SimilarBlocks', 'Bloques Similares')
  event.add('constructionstick.configuration.SimilarBlocks.tooltip', 'Bloques a tratar como iguales en modo Similar. Introduce los IDs separados por ;')
  event.add('constructionstick.configuration.UndoHistory', 'Historial de Deshacer')
  event.add('constructionstick.configuration.UndoHistory.tooltip', 'Número de operaciones que se pueden deshacer')

  event.add('constructionstick.configuration.angel', 'Mejora Ángel')
  event.add('constructionstick.configuration.angel.tooltip', 'Límite de bloques de destrucción del palo (0 para desactivar)')
  event.add('constructionstick.configuration.batteryStorage', 'Capacidad de Batería')
  event.add('constructionstick.configuration.batteryStorage.tooltip', 'Almacenamiento de energía de la batería')
  event.add('constructionstick.configuration.batteryUsage', 'Uso de Batería')
  event.add('constructionstick.configuration.batteryUsage.tooltip', 'Consumo de energía por bloque')
  event.add('constructionstick.configuration.blockentity', 'Entidad de Bloque')
  event.add('constructionstick.configuration.blockentity.tooltip', 'Configuración de Entidades de Bloque')

  event.add('constructionstick.configuration.copper_stick', 'Palo de Cobre')
  event.add('constructionstick.configuration.copper_stick.tooltip', 'Configuración del Palo de Cobre')
  event.add('constructionstick.configuration.destruction', 'Mejora de Destrucción')
  event.add('constructionstick.configuration.destruction.tooltip', 'Límite de bloques de destrucción del palo (0 para desactivar)')
  event.add('constructionstick.configuration.diamond_stick', 'Palo de Diamante')
  event.add('constructionstick.configuration.diamond_stick.tooltip', 'Configuración del Palo de Diamante')
  event.add('constructionstick.configuration.durability', 'Durabilidad')
  event.add('constructionstick.configuration.durability.tooltip', 'Durabilidad del palo')
  event.add('constructionstick.configuration.iron_stick', 'Palo de Hierro')
  event.add('constructionstick.configuration.iron_stick.tooltip', 'Configuración del Palo de Hierro')
  event.add('constructionstick.configuration.limit', 'Límite de Colocación')
  event.add('constructionstick.configuration.limit.tooltip', 'Distancia máxima de colocación con mejora de ángel (0 para desactivar)')
  event.add('constructionstick.configuration.misc', 'Varios')
  event.add('constructionstick.configuration.misc.tooltip', 'Configuraciones varias')
  event.add('constructionstick.configuration.netherite_stick', 'Palo de Netherita')
  event.add('constructionstick.configuration.netherite_stick.tooltip', 'Configuración del Palo de Netherita')
  event.add('constructionstick.configuration.upgradeable', 'Mejorable')
  event.add('constructionstick.configuration.upgradeable.tooltip', 'Permite mejorar el palo combinándolo con una mejora en la mesa de herrería.')
  event.add('constructionstick.configuration.wooden_stick', 'Palo Pegajoso')
  event.add('constructionstick.configuration.wooden_stick.tooltip', 'Configuración del Palo Pegajoso')

  event.add('constructionstick.tooltip.blocks', 'Máx. %d bloques')
  event.add('constructionstick.tooltip.shift', 'Presiona [SHIFT]')
  event.add('constructionstick.tooltip.storage', '%s/%s RF almacenado')
  event.add('constructionstick.tooltip.upgrades', 'Mejoras del Palo:')
  event.add('constructionstick.tooltip.upgrades_tip', 'Aplica la plantilla en la mesa de herrería')

  event.add('item.constructionstick.copper_stick', 'Palo de Cobre')
  event.add('item.constructionstick.diamond_stick', 'Palo de Diamante')
  event.add('item.constructionstick.iron_stick', 'Palo de Hierro')
  event.add('item.constructionstick.netherite_stick', 'Palo de Netherita')
  event.add('item.constructionstick.template_angel', 'Plantilla de Palo Ángel')
  event.add('item.constructionstick.template_battery', 'Plantilla de Batería')
  event.add('item.constructionstick.template_destruction', 'Plantilla de Destrucción')
  event.add('item.constructionstick.template_replacement', 'Plantilla de Reemplazo')
  event.add('item.constructionstick.template_unbreakable', 'Plantilla Irrompible')
  event.add('item.constructionstick.wooden_stick', 'Palo Pegajoso')

  event.add('itemGroup.constructionstick.tab', 'Palos de Construcción')
  event.add('key.constructionstick.category', 'Palos de Construcción')
  event.add('key.constructionstick.change_direction', 'Cambiar Dirección')
  event.add('key.constructionstick.change_restriction', 'Cambiar Restricción')
  event.add('key.constructionstick.change_upgrade', 'Cambiar Mejora')
  event.add('key.constructionstick.open_gui', 'Abrir Opciones del Palo')
  event.add('key.constructionstick.show_previous', 'Mostrar Anterior')
  event.add('key.constructionstick.undo', 'Deshacer Operación')

  event.add('stat.constructionstick.use_stick', 'Bloques colocados usando el Palo')

  //iron furnaces

  // === Ítems ===
  event.add('item.ironfurnaces.upgrade_iron', 'Mejora de Horno de Piedra a Hierro')
  event.add('item.ironfurnaces.upgrade_gold', 'Mejora de Horno de Hierro a Oro')
  event.add('item.ironfurnaces.upgrade_diamond', 'Mejora de Horno de Oro a Diamante')
  event.add('item.ironfurnaces.upgrade_emerald', 'Mejora de Horno de Diamante a Esmeralda')
  event.add('item.ironfurnaces.upgrade_obsidian', 'Mejora de Horno de Esmeralda a Obsidiana')
  event.add('item.ironfurnaces.upgrade_crystal', 'Mejora de Horno de Diamante a Cristal')
  event.add('item.ironfurnaces.upgrade_obsidian2', 'Mejora de Horno de Cristal a Obsidiana')
  event.add('item.ironfurnaces.upgrade_netherite', 'Mejora de Horno de Obsidiana a Netherita')
  event.add('item.ironfurnaces.item_heater', 'Receptor de Calor Inalámbrico')
  event.add('item.ironfurnaces.augment_blasting', 'Aumento: Fundición')
  event.add('item.ironfurnaces.augment_smoking', 'Aumento: Ahumado')
  event.add('item.ironfurnaces.augment_speed', 'Aumento: Velocidad')
  event.add('item.ironfurnaces.augment_fuel', 'Aumento: Eficiencia de Combustible')
  event.add('item.ironfurnaces.augment_factory', 'Aumento: Fábrica')
  event.add('item.ironfurnaces.augment_generator', 'Aumento: Generador')
  event.add('item.ironfurnaces.gui', 'Aumento: Configuración de Inventario')
  event.add('item.ironfurnaces.item_spooky', 'Horno Embrujado')
  event.add('item.ironfurnaces.item_xmas', 'Papel de Regalo para Hornos')
  event.add('item.ironfurnaces.rainbow_core', 'Núcleo Arcoíris')
  event.add('item.ironfurnaces.rainbow_plating', 'Revestimiento Arcoíris')
  event.add('item.ironfurnaces.rainbow_coal', 'Carbón Arcoíris')
  event.add('item.ironfurnaces.upgrade_copper', 'Mejora de Horno de Piedra a Cobre')
  event.add('item.ironfurnaces.upgrade_silver', 'Mejora de Horno de Cobre a Plata')
  event.add('item.ironfurnaces.upgrade_silver2', 'Mejora de Horno de Hierro a Plata')
  event.add('item.ironfurnaces.upgrade_iron2', 'Mejora de Horno de Cobre a Hierro')
  event.add('item.ironfurnaces.upgrade_gold2', 'Mejora de Horno de Plata a Oro')
  event.add('item.ironfurnaces.item_copy', 'Vinculador de Configuración de Horno')

  // === Pestaña Creativa ===
  event.add('itemGroup.ironfurnaces', 'Hornos de Hierro')

  // === Bloques ===
  event.add('block.ironfurnaces.iron_furnace', 'Horno de Hierro')
  event.add('block.ironfurnaces.gold_furnace', 'Horno Dorado')
  event.add('block.ironfurnaces.diamond_furnace', 'Horno de Diamante')
  event.add('block.ironfurnaces.emerald_furnace', 'Horno de Esmeralda')
  event.add('block.ironfurnaces.obsidian_furnace', 'Horno de Obsidiana')
  event.add('block.ironfurnaces.crystal_furnace', 'Horno de Cristal')
  event.add('block.ironfurnaces.netherite_furnace', 'Horno de Netherita')
  event.add('block.ironfurnaces.copper_furnace', 'Horno de Cobre')
  event.add('block.ironfurnaces.silver_furnace', 'Horno de Plata')
  event.add('block.ironfurnaces.million_furnace', 'Horno Arcoíris')
  event.add('block.ironfurnaces.heater', 'Transmisor de Calor Inalámbrico')

  // === ATM ===
  event.add('block.ironfurnaces.allthemodium_furnace', 'Horno de Allthemodium')
  event.add('block.ironfurnaces.vibranium_furnace', 'Horno de Vibranium')
  event.add('block.ironfurnaces.unobtainium_furnace', 'Horno de Unobtainium')
  event.add('container.ironfurnaces.allthemodium_furnace', 'Horno de Allthemodium')
  event.add('container.ironfurnaces.vibranium_furnace', 'Horno de Vibranium')
  event.add('container.ironfurnaces.unobtainium_furnace', 'Horno de Unobtainium')
  event.add('item.ironfurnaces.upgrade_allthemodium', 'Mejora de Horno de Netherita a Allthemodium')
  event.add('item.ironfurnaces.upgrade_vibranium', 'Mejora de Horno de Allthemodium a Vibranium')
  event.add('item.ironfurnaces.upgrade_unobtainium', 'Mejora de Horno de Vibranium a Unobtainium')

  // === Interfaz / GUI ===
  event.add('container.ironfurnaces.iron_furnace', 'Horno de Hierro')
  event.add('container.ironfurnaces.gold_furnace', 'Horno Dorado')
  event.add('container.ironfurnaces.diamond_furnace', 'Horno de Diamante')
  event.add('container.ironfurnaces.emerald_furnace', 'Horno de Esmeralda')
  event.add('container.ironfurnaces.obsidian_furnace', 'Horno de Obsidiana')
  event.add('container.ironfurnaces.crystal_furnace', 'Horno de Cristal')
  event.add('container.ironfurnaces.netherite_furnace', 'Horno de Netherita')
  event.add('container.ironfurnaces.copper_furnace', 'Horno de Cobre')
  event.add('container.ironfurnaces.silver_furnace', 'Horno de Plata')
  event.add('container.ironfurnaces.million_furnace', 'Horno Arcoíris')
  event.add('container.ironfurnaces.wireless_energy_heater', 'Calentador Inalámbrico')

  // === Categorías JEI ===
  event.add('ironfurnaces.jei_category_regular', 'Aumento: Generador')
  event.add('ironfurnaces.jei_category_blasting', 'Generador | Fundición')
  event.add('ironfurnaces.jei_category_smoking', 'Generador | Ahumado')

  // === Tooltips ===
  event.add('tooltip.ironfurnaces.cooktime', 'Tiempo de cocción')
  event.add('tooltip.ironfurnaces.upgrade_right_click', 'Agáchate y haz clic derecho para mejorar')
  event.add('tooltip.ironfurnaces.xmas_right_click', 'Haz clic derecho en el horno para envolverlo como regalo')
  event.add('tooltip.ironfurnaces.xmas1', '¿Pero el papel no se quemará?')
  event.add('tooltip.ironfurnaces.xmas2', 'Agáchate y haz clic derecho en un horno para abrir el regalo')
  event.add('tooltip.ironfurnaces.spooky_right_click', 'Haz clic derecho en el horno para embrujarlo')
  event.add('tooltip.ironfurnaces.spooky1', '3spooky5me')
  event.add('tooltip.ironfurnaces.spooky2', 'Agáchate y haz clic derecho en un horno para quitar la maldición')
  event.add('tooltip.ironfurnaces.heater', 'Vinculado a: ')
  event.add('tooltip.ironfurnaces.heater_not_bound', 'Aún no está vinculado a una fuente de energía')
  event.add('tooltip.ironfurnaces.heater_tip', 'Coloca en la ranura de combustible del horno')
  event.add('tooltip.ironfurnaces.heater_tip1', 'Solo funciona desde el nivel de Hierro en adelante')
  event.add('tooltip.ironfurnaces.augment_right_click', 'Haz clic derecho para insertar el aumento')
  event.add('tooltip.ironfurnaces.augment_speed_pro', '+Reduce a la mitad el tiempo de cocción.')
  event.add('tooltip.ironfurnaces.augment_speed_con', '-Usa el doble de combustible.')
  event.add('tooltip.ironfurnaces.augment_fuel_pro', '+El combustible calienta el horno el doble.')
  event.add('tooltip.ironfurnaces.augment_fuel_con', '-Reduce la velocidad de cocción un 25%.')
  event.add('tooltip.ironfurnaces.augment_factory_pro', '+Convierte el horno en una fábrica.')
  event.add('tooltip.ironfurnaces.augment_factory_con', '-Usa energía en lugar de combustible.')
  event.add('tooltip.ironfurnaces.augment_generator_pro', '+El calor del horno genera energía.')
  event.add('tooltip.ironfurnaces.augment_generator_con', '-El horno ya no puede fundir objetos.')

  // === Actualizaciones ===
  event.add('ironfurnaces.update.speech', '¡Hay una actualización disponible para Iron Furnaces!')
  event.add('ironfurnaces.update.failed', '¡Falló la comprobación de actualización de Iron Furnaces! Revisa los registros para más información.')

  //extended crafting
  // Grupo
  event.add('itemGroup.extendedcrafting', 'Artesanía Extendida')

  // Bloques
  event.add('block.extendedcrafting.luminessence_block', 'Bloque de Luminessencia')
  event.add('block.extendedcrafting.black_iron_block', 'Bloque de Hierro Negro')
  event.add('block.extendedcrafting.redstone_ingot_block', 'Bloque de Lingote de Redstone')
  event.add('block.extendedcrafting.enhanced_redstone_ingot_block', 'Bloque de Lingote de Redstone Mejorado')
  event.add('block.extendedcrafting.ender_ingot_block', 'Bloque de Lingote del Ender')
  event.add('block.extendedcrafting.enhanced_ender_ingot_block', 'Bloque de Lingote del Ender Mejorado')
  event.add('block.extendedcrafting.crystaltine_block', 'Bloque de Cristaltina')
  event.add('block.extendedcrafting.the_ultimate_block', 'Bloque Definitivo')
  event.add('block.extendedcrafting.nether_star_block', 'Bloque de Estrella del Nether')
  event.add('block.extendedcrafting.flux_star_block', 'Bloque de Estrella de Flujo')
  event.add('block.extendedcrafting.ender_star_block', 'Bloque de Estrella del Ender')
  event.add('block.extendedcrafting.frame', 'Marco de Hierro Negro')
  event.add('block.extendedcrafting.pedestal', 'Pedestal')
  event.add('block.extendedcrafting.crafting_core', 'Núcleo de Artesanía')
  event.add('block.extendedcrafting.basic_table', 'Mesa de Artesanía Básica')
  event.add('block.extendedcrafting.advanced_table', 'Mesa de Artesanía Avanzada')
  event.add('block.extendedcrafting.elite_table', 'Mesa de Artesanía Élite')
  event.add('block.extendedcrafting.ultimate_table', 'Mesa de Artesanía Definitiva')
  event.add('block.extendedcrafting.basic_auto_table', 'Mesa de Artesanía Automática Básica')
  event.add('block.extendedcrafting.advanced_auto_table', 'Mesa de Artesanía Automática Avanzada')
  event.add('block.extendedcrafting.elite_auto_table', 'Mesa de Artesanía Automática Élite')
  event.add('block.extendedcrafting.ultimate_auto_table', 'Mesa de Artesanía Automática Definitiva')
  event.add('block.extendedcrafting.compressor', 'Compresor Cuántico')
  event.add('block.extendedcrafting.ender_alternator', 'Alternador del Ender')
  event.add('block.extendedcrafting.ender_crafter', 'Creador del Ender')
  event.add('block.extendedcrafting.auto_ender_crafter', 'Creador Automático del Ender')
  event.add('block.extendedcrafting.flux_alternator', 'Alternador de Flujo')
  event.add('block.extendedcrafting.flux_crafter', 'Creador de Flujo')
  event.add('block.extendedcrafting.auto_flux_crafter', 'Creador Automático de Flujo')

  // Ítems
  event.add('item.extendedcrafting.luminessence', 'Luminessencia')
  event.add('item.extendedcrafting.black_iron_ingot', 'Lingote de Hierro Negro')
  event.add('item.extendedcrafting.redstone_ingot', 'Lingote de Redstone')
  event.add('item.extendedcrafting.enhanced_redstone_ingot', 'Lingote de Redstone Mejorado')
  event.add('item.extendedcrafting.ender_ingot', 'Lingote del Ender')
  event.add('item.extendedcrafting.enhanced_ender_ingot', 'Lingote del Ender Mejorado')
  event.add('item.extendedcrafting.crystaltine_ingot', 'Lingote de Cristaltina')
  event.add('item.extendedcrafting.the_ultimate_ingot', 'Lingote Definitivo')
  event.add('item.extendedcrafting.black_iron_nugget', 'Pepita de Hierro Negro')
  event.add('item.extendedcrafting.redstone_nugget', 'Pepita de Redstone')
  event.add('item.extendedcrafting.enhanced_redstone_nugget', 'Pepita de Redstone Mejorada')
  event.add('item.extendedcrafting.ender_nugget', 'Pepita del Ender')
  event.add('item.extendedcrafting.enhanced_ender_nugget', 'Pepita del Ender Mejorada')
  event.add('item.extendedcrafting.crystaltine_nugget', 'Pepita de Cristaltina')
  event.add('item.extendedcrafting.the_ultimate_nugget', 'Pepita Definitiva')
  event.add('item.extendedcrafting.black_iron_slate', 'Losa de Hierro Negro')

  event.add('item.extendedcrafting.basic_catalyst', 'Catalizador Básico')
  event.add('item.extendedcrafting.advanced_catalyst', 'Catalizador Avanzado')
  event.add('item.extendedcrafting.elite_catalyst', 'Catalizador Élite')
  event.add('item.extendedcrafting.ultimate_catalyst', 'Catalizador Definitivo')
  event.add('item.extendedcrafting.redstone_catalyst', 'Catalizador de Redstone')
  event.add('item.extendedcrafting.enhanced_redstone_catalyst', 'Catalizador de Redstone Mejorado')
  event.add('item.extendedcrafting.ender_catalyst', 'Catalizador del Ender')
  event.add('item.extendedcrafting.enhanced_ender_catalyst', 'Catalizador del Ender Mejorado')
  event.add('item.extendedcrafting.crystaltine_catalyst', 'Catalizador de Cristaltina')
  event.add('item.extendedcrafting.the_ultimate_catalyst', 'Catalizador Definitivo')

  event.add('item.extendedcrafting.basic_component', 'Componente Básico')
  event.add('item.extendedcrafting.advanced_component', 'Componente Avanzado')
  event.add('item.extendedcrafting.elite_component', 'Componente Élite')
  event.add('item.extendedcrafting.ultimate_component', 'Componente Definitivo')
  event.add('item.extendedcrafting.redstone_component', 'Componente de Redstone')
  event.add('item.extendedcrafting.enhanced_redstone_component', 'Componente de Redstone Mejorado')
  event.add('item.extendedcrafting.ender_component', 'Componente del Ender')
  event.add('item.extendedcrafting.enhanced_ender_component', 'Componente del Ender Mejorado')
  event.add('item.extendedcrafting.crystaltine_component', 'Componente de Cristaltina')
  event.add('item.extendedcrafting.the_ultimate_component', 'Componente Definitivo')

  event.add('item.extendedcrafting.flux_star', 'Estrella de Flujo')
  event.add('item.extendedcrafting.ender_star', 'Estrella del Ender')
  event.add('item.extendedcrafting.handheld_table', 'Mesa de Artesanía Portátil')
  event.add('item.extendedcrafting.recipe_maker', 'Creador de Recetas')
  event.add('item.extendedcrafting.singularity', 'Singularidad de %s')
  event.add('item.extendedcrafting.ultimate_singularity', 'Singularidad Definitiva')

 
  //budding crystals
  // Comandos
  event.add('commands.buddingcrystals.crystal_exists', "Ya existe un archivo para la definición del cristal llamado '%s'")
  event.add('commands.buddingcrystals.crystal_exported', "Definición de cristal '%s' exportada")
  event.add('commands.buddingcrystals.crystal_overwritten', "Definición de cristal '%s' exportada, el archivo existente fue sobrescrito")
  event.add('commands.buddingcrystals.crystals_exported', "Se exportaron %d de %d definiciones de cristales integradas, se omitieron %d archivos existentes")
  event.add('commands.buddingcrystals.crystals_overwritten', "Se exportaron %d de %d definiciones de cristales integradas, se sobrescribieron %d archivos existentes")
  event.add('commands.buddingcrystals.export_error', "Se produjo un error al exportar la definición del cristal '%s': %s")
  event.add('commands.buddingcrystals.no_such_crystal', "No existe ningún cristal llamado '%s'")

  // Configuración
  event.add('config.buddingcrystals.enable_crafting_budding_amethyst', "Permitir craftear el bloque de amatista brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_diamond', "Permitir craftear el bloque de diamante brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_emerald', "Permitir craftear el bloque de esmeralda brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_fluix', "Permitir craftear el bloque de fluix brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_fluorite', "Permitir craftear el bloque de fluorita brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_glowstone', "Permitir craftear el bloque de piedra luminosa brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_lapis_lazuli', "Permitir craftear el bloque de lapislázuli brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_nether_quartz', "Permitir craftear el bloque de cuarzo del Nether brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_prismarine', "Permitir craftear el bloque de prismarina brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_redstone', "Permitir craftear el bloque de redstone brotante")
  event.add('config.buddingcrystals.enable_crafting_budding_salt', "Permitir craftear el bloque de sal brotante")

  // Ítems y grupo creativo
  event.add('item.buddingcrystals.crystal_catalyst', "Catalizador de Cristales")
  event.add('itemGroup.buddingcrystals', "Cristales Brotantes")

  // Mensajes de configuración
  event.add('msg.config.buddingcrystals.additional_sets_client', "El cliente tiene conjuntos adicionales de cristales: %s")
  event.add('msg.config.buddingcrystals.additional_sets_server', "El servidor tiene conjuntos adicionales de cristales: %s")
  event.add('msg.config.buddingcrystals.check_files_match', "Asegúrate de que el servidor y el cliente tengan los mismos archivos en el directorio de configuración de cristales.")

  //botany pots
  // Genéricas
  event.add('block.botanypots.botany_pot_mega', 'Maceta Botánica Mega')
  event.add('block.botanypots.botany_pot_mega_hopper', 'Maceta Botánica Mega con Tolva')

  // Roble
  event.add('block.botanypots.oak_botany_pot_mega', 'Maceta Botánica Mega de Roble')
  event.add('block.botanypots.oak_botany_pot_mega_hopper', 'Maceta Botánica Mega de Roble con Tolva')

  // Abeto
  event.add('block.botanypots.spruce_botany_pot_mega', 'Maceta Botánica Mega de Abeto')
  event.add('block.botanypots.spruce_botany_pot_mega_hopper', 'Maceta Botánica Mega de Abeto con Tolva')

  // Abedul
  event.add('block.botanypots.birch_botany_pot_mega', 'Maceta Botánica Mega de Abedul')
  event.add('block.botanypots.birch_botany_pot_mega_hopper', 'Maceta Botánica Mega de Abedul con Tolva')

  // Jungla
  event.add('block.botanypots.jungle_botany_pot_mega', 'Maceta Botánica Mega de Jungla')
  event.add('block.botanypots.jungle_botany_pot_mega_hopper', 'Maceta Botánica Mega de Jungla con Tolva')

  // Acacia
  event.add('block.botanypots.acacia_botany_pot_mega', 'Maceta Botánica Mega de Acacia')
  event.add('block.botanypots.acacia_botany_pot_mega_hopper', 'Maceta Botánica Mega de Acacia con Tolva')

  // Roble Oscuro
  event.add('block.botanypots.dark_oak_botany_pot_mega', 'Maceta Botánica Mega de Roble Oscuro')
  event.add('block.botanypots.dark_oak_botany_pot_mega_hopper', 'Maceta Botánica Mega de Roble Oscuro con Tolva')

  // Carmesí (Nether)
  event.add('block.botanypots.crimson_botany_pot_mega', 'Maceta Botánica Mega Carmesí')
  event.add('block.botanypots.crimson_botany_pot_mega_hopper', 'Maceta Botánica Mega Carmesí con Tolva')

  // Distorsionada (Nether)
  event.add('block.botanypots.warped_botany_pot_mega', 'Maceta Botánica Mega Distorsionada')
  event.add('block.botanypots.warped_botany_pot_mega_hopper', 'Maceta Botánica Mega Distorsionada con Tolva')


})

ClientEvents.lang('en_us', event => { 

 event.add('block.ultimatefoods.nether_star_block', 'Nether Star Block')

})