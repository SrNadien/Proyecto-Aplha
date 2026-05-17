//Avaritia Por Srnadien Prohibido Su Uso Externo
ServerEvents.recipes((nadien) => {

   //mesa extrema
   nadien.remove({ output: 'avaritia:extreme_crafting_table' });
   nadien.remove({ id: 'avaritia:extreme_crafting_table' });

  //diamond lattice
  nadien.remove({ output: "avaritia:diamond_lattice" });
  nadien.shaped("avaritia:diamond_lattice", ["X X", " D ", "X X"], {
      X: "#c:gems/diamond",
      D: "mekanism:dirty_netherite_scrap",
    })
    .id("nadien_tweaks:latituddediamantes");

  //casco infinito
  nadien.remove({ output: "avaritia:infinity_helmet" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_helmet",
      [
        "  NNNNN  ",
        " NIIIIIN ",
        " N XIX N ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NI I IN ",
      ],
      {
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:infinity_helmet");

  //Pechera Cosmica
  nadien.remove({ output: "avaritia:infinity_chestplate" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_chestplate",
      [
        " NN   NN ",
        "NNN   NNN",
        "NNN   NNN",
        " NIIIIIN ",
        " NIIXIIN ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NIIIIIN ",
        "  NNNNN  ",
      ],
      {
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:infinity_chestplate");

  //Pantalones Infinitos
  nadien.remove({ output: "avaritia:infinity_pants" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_pants",
      [
        "NNNNNNNNN",
        "NIIIXIIIN",
        "NINNXNNIN",
        "NIN   NIN",
        "NCN   NCN",
        "NIN   NIN",
        "NIN   NIN",
        "NIN   NIN",
        "NNN   NNN",
      ],
      {
        C: "avaritia:crystal_matrix_ingot",
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:infinity_pants");

  // //botas infinitas
  nadien.remove({ output: "avaritia:infinity_boots" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_boots",
      [
        " NNN NNN ",
        " NIN NIN ",
        " NIN NIN ",
        "NNIN NINN",
        "NIIN NIIN",
        "NNNN NNNN",
      ],
      {
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
      }
    )
    .id("nadien_tweaks:infinity_boots");

  //espada del cosmos
  nadien.remove({ output: "avaritia:infinity_sword" });
  nadien.recipes.create.mechanical_crafting(
    "avaritia:infinity_sword",
    [
      "       II",
      "      III",
      "     III ",
      "    III  ",
      " C III   ",
      "  CII    ",
      "  NC     ",
      " N  C    ",
      "X        ",
    ],
    {
      C: "avaritia:crystal_matrix_ingot",
      I: "avaritia:infinity_ingot",
      N: "avaritia:neutron_ingot",
      X: "avaritia:infinity_catalyst",
    }
  );

   //espada infinita 1
  nadien.remove({output: 'ultimatefoods:infinity_1_sword'})
  nadien.recipes.create.mechanical_crafting("ultimatefoods:infinity_1_sword",
      [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        ",
      ],
      {
        C: "avaritia:crystal_matrix_ingot",
        I: "avaritia:crystal_matrix",
        N: "avaritia:neutron",
        X: "avaritia:crystal_matrix",
      }
    )
    .id("nadien_tweaks:infinitysworduno");

   //espada del cosmos (balanced)
  nadien.remove({output: 'ultimatefoods:infinity_sword_balanced'})
  nadien.recipes.create.mechanical_crafting("ultimatefoods:infinity_sword_balanced",
      [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        ",
      ],
      {
        C: "avaritia:crystal_matrix_ingot",
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:cosmosswordbalanced");

  //skullfire
  nadien.remove({ output: "avaritia:blaze_sword" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:blaze_sword",
      [
        "       IX",
        "      IXI",
        "     IXI ",
        "    IXI  ",
        " B IXI   ",
        "  BXI    ",
        "  WB     ",
        " W  B    ",
        "D        ",
      ],
      {
        B: "minecraft:bone",
        D: "minecraft:nether_star",
        I: "avaritia:crystal_matrix_ingot",
        W: "#minecraft:logs",
        X: "minecraft:blaze_powder",
      }
    )
    .id("nadien_tweaks:blaze_sword");

  //        //arco multidisparo
  nadien.remove({ output: "avaritia:infinity_bow" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_bow",
      [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X   W",
        "I   W",
        " I  W",
        "  I W",
        "   II",
      ],
      {
        X: "avaritia:infinity_catalyst",
        I: "avaritia:infinity_ingot",
        W: "minecraft:white_wool",
      }
    )
    .id("nadien_tweaks:arco_de_los_dioses");

  //destructor de mundos
  nadien.remove({ output: "avaritia:infinity_pickaxe" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_pickaxe",
      [
        " IIIIIII ",
        "IIIIXIIII",
        "II  N  II",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
      ],
      {
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:wold_breaker");

  //pala planetaria
  nadien.remove({ output: "avaritia:infinity_shovel" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_shovel",
      [
        "      III",
        "     IIXI",
        "      III",
        "     N I ",
        "    N    ",
        "   N     ",
        "  N      ",
        " N       ",
        "N        ",
      ],
      {
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:palainfinita");

  //hacha de la naturaleza
  nadien.remove({ output: "avaritia:infinity_axe" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_axe",
      [
        "   I   ",
        "  IIIII",
        "  IIXI ",
        "   IN  ",
        "    N  ",
        "    N  ",
        "    N  ",
        "    N  ",
        "    N  ",
      ],
      {
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:hachainfinita");

  //azada del la tierra verde
  nadien.remove({ output: "avaritia:infinity_hoe" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_hoe",
      [
        "     N ",
        "   IIII",
        "  IIIII",
        "  I  XI",
        "     N ",
        "     N ",
        "     N ",
        "     N ",
        "     N ",
      ],
      {
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:azadainfinita");

  //albondigas cosmicas
  nadien.remove({ output: "avaritia:cosmic_meatballs" });
  nadien.recipes.create.mechanical_crafting(
      "avaritia:cosmic_meatballs",
      ["ABCDEFGHI", "JKLM     "],
      {
        A: {
          item: "minecraft:porkchop",
        },
        B: {
          item: "minecraft:beef",
        },
        C: {
          item: "minecraft:mutton",
        },
        D: {
          item: "minecraft:cod",
        },
        E: {
          item: "minecraft:salmon",
        },
        F: {
          item: "minecraft:tropical_fish",
        },
        G: {
          item: "minecraft:pufferfish",
        },
        H: {
          item: "minecraft:rabbit",
        },
        I: {
          item: "minecraft:chicken",
        },
        J: {
          item: "minecraft:rotten_flesh",
        },
        K: {
          item: "minecraft:spider_eye",
        },
        L: {
          item: "minecraft:egg",
        },
        M: {
          item: "avaritia:neutron_nugget",
        },
      }).id("nadien_tweaks:cosmic_meatballs");

  //estofado ultimo
  nadien.remove({ output: "avaritia:ultimate_stew" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:ultimate_stew",
      [
        "ABCDEFGHI",
        "JKLMOPQRS",
        "TUVWXYZab",
        "cdefghijk",
        "lmnopqrst",
        "uvwxyz   ",
      ],
      {
        A: "minecraft:apple",
        B: "minecraft:golden_apple",
        C: "minecraft:bread",
        D: "minecraft:kelp",
        E: "minecraft:cocoa_beans",
        F: "minecraft:cake",
        G: "minecraft:glistering_melon_slice",
        H: "minecraft:carrot",
        I: "minecraft:poisonous_potato",
        J: "minecraft:chorus_fruit",
        K: "minecraft:beetroot",
        L: "minecraft:mushroom_stew",
        M: "minecraft:honey_bottle",
        O: "minecraft:sweet_berries",
        P: "farmersdelight:apple_pie",
        Q: "farmersdelight:sweet_berry_cheesecake",
        R: "farmersdelight:chocolate_pie",
        S: "farmersdelight:melon_popsicle",
        T: "farmersdelight:fruit_salad",
        U: "farmersdelight:mixed_salad",
        V: "farmersdelight:nether_salad",
        W: "farmersdelight:barbecue_stick",
        X: "farmersdelight:egg_sandwich",
        Y: "farmersdelight:chicken_sandwich",
        Z: "farmersdelight:hamburger",
        a: "farmersdelight:bacon_sandwich",
        b: "farmersdelight:mutton_wrap",
        c: "farmersdelight:dumplings",
        d: "farmersdelight:stuffed_potato",
        e: "farmersdelight:cabbage_rolls",
        f: "farmersdelight:cooked_rice",
        g: "farmersdelight:beef_stew",
        h: "farmersdelight:chicken_soup",
        i: "farmersdelight:vegetable_soup",
        j: "farmersdelight:fish_stew",
        k: "farmersdelight:fried_rice",
        l: "farmersdelight:pumpkin_soup",
        m: "farmersdelight:baked_cod_stew",
        n: "farmersdelight:noodle_soup",
        o: "farmersdelight:bacon_and_eggs",
        p: "farmersdelight:pasta_with_meatballs",
        q: "farmersdelight:pasta_with_mutton_chop",
        r: "farmersdelight:roasted_mutton_chops",
        s: "farmersdelight:vegetable_noodles",
        t: "farmersdelight:steak_and_potatoes",
        u: "farmersdelight:ratatouille",
        v: "ultimatefoods:cajita_feliz",
        w: "create:blaze_cake",
        x: "create:chocolate_glazed_berries",
        y: "create:honeyed_apple",
        z: "avaritia:neutron_nugget",
      }
    )
    .id("nadien_tweaks:estofado_ultimo");

  //perla destructora
  nadien.remove({ output: "avaritia:endest_pearl" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:endest_pearl",
      [
        "   AAA   ",
        " AABBBAA ",
        " ABBBBBA ",
        "ABBBDBBBA",
        "ABBDCDBBA",
        "ABBBDBBBA",
        " ABBBBBA ",
        " AABBBAA ",
        "   AAA   ",
      ],
      {
        A: "minecraft:end_stone",
        B: "minecraft:ender_pearl",
        C: "minecraft:nether_star",
        D: "avaritia:neutron_ingot",
      }
    )
    .id("nadien_tweaks:endest_pearl");

  //compresor
  nadien.remove({ output: "extendedcrafting:compressor" });
  nadien.recipes.create
    .mechanical_crafting(
      "extendedcrafting:compressor",
      [
        "IIIHHHIII",
        "X N   N X",
        "I N   N I",
        "X N   N X",
        "RNN O NNR",
        "X N   N X",
        "I N   N I",
        "X N   N X",
        "IIIXIXIII",
      ],
      {
        N: "avaritia:neutron_ingot",
        H: "minecraft:hopper",
        I: "minecraft:iron_block",
        O: "avaritia:endest_pearl",
        X: "avaritia:crystal_matrix_ingot",
        R: "minecraft:redstone_block",
      }
    )
    .id("nadien_tweaks:extendedcrafting_compressor");
  //colector de neutrones
  nadien.remove({ output: "avaritia:neutron_collector" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:neutron_collector",
      [
        "IIQQQQQII",
        "I QQQQQ I",
        "I  RRR  I",
        "X RRRRR X",
        "I RRXRR I",
        "X RRRRR X",
        "I  RRR  I",
        "I       I",
        "IIIXIXIII",
      ],
      {
        I: "#c:storage_blocks/iron",
        X: "avaritia:crystal_matrix_ingot",
        R: "#c:storage_blocks/redstone",
        Q: "#c:storage_blocks/quartz",
      }
    )
    .id("nadien_tweaks:neutron_collector");

  //colector de neutrones Dense
  nadien.remove({ output: "avaritia:dense_neutron_collector" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:dense_neutron_collector",
      ["aaa", "aga", "aaa"],
      {
        a: "avaritia:neutron_collector",
        g: "avaritia:neutron_gear",
      }
    )
    .id("nadien_tweaks:neutroncollectordense");

  //colector de neutrones Denser
  nadien.remove({ output: "avaritia:denser_neutron_collector" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:denser_neutron_collector",
      ["aaa", "aga", "aaa"],
      {
        a: "avaritia:dense_neutron_collector",
        g: "avaritia:neutron_gear",
      }
    )
    .id("nadien_tweaks:neutroncollectordenser");
  //colector de neutrones Densest
  nadien.remove({ output: "avaritia:densest_neutron_collector" });
  nadien.recipes.create.mechanical_crafting("avaritia:densest_neutron_collector",
      [
        "CC     CC",
        "C  BBB  C",
        "  AAAAA  ",
        " BAXXXAB ",
        " BAXYXAB ",
        " BAXXXAB ",
        "  AAAAA  ",
        "C  BBB  C",
        "CC     CC",
      ],
      {
        A: "minecraft:redstone_block",
        B: "avaritia:neutron_ingot",
        C: "avaritia:neutron_gear",
        X: "avaritia:denser_neutron_collector",
        Y: "extendedcrafting:flux_star_block",
      }).id("nadien_tweaks:neutroncollectordensest");

  //infinity catalyst
nadien.remove({id: 'avritia:infinity_catalyst_eternal' })
nadien.remove({id: 'avritia:infinity_catalyst_craft' })
nadien.remove({id: 'avritia:infinity_catalyst' })
  nadien.recipes.createMechanicalCrafting(
 "avaritia:infinity_catalyst",
  ["ABCDEFGHI", "J        "],
 {
A:  "avaritia:diamond_lattice",
B:  "avaritia:crystal_matrix_ingot",
C:  "avaritia:neutron_pile",
D:  "avaritia:neutron_nugget",
E:  "avaritia:neutron_ingot",
F:  "avaritia:record_fragment",
G:  "avaritia:endest_pearl",
H:  "avaritia:ultimate_stew",
I:  "avaritia:cosmic_meatballs",
J:  'avaritia:eternal_singularity',
}).id("nadien_tweaks:infinity_catalyst");

  //ethernal singularity
  nadien.remove({ output: "avaritia:eternal_singularity" });
  nadien.remove({ id: "avaritia:eternal_singularity" });
  nadien.custom({
    type: "extendedcrafting:shapeless_table",
    tier: 4,
    ingredients: [
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:soul_berry_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:esmarelda_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:crafting_table_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:track_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:flux_block_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:certus_quartz_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:nether_star_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:record_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:caca_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:induction_cassing_singuarity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id": "extendedcrafting:uranium_cake",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:neutronium_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:pellet_polonium_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:uraninite_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:cheese_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:dark_iron_ingot_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:source_gem_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:xp_jelly_baby_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:nadienite_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:balloon_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:andesite_cassing_singularity",
        },
        type: "neoforge:components",
      },
      {
        items: "extendedcrafting:singularity",
        components: {
          "extendedcrafting:singularity_id":
            "extendedcrafting:quantum_alloy_singularity",
        },
        type: "neoforge:components",
      },
    ],
    result: {
      id: "avaritia:eternal_singularity",
    },
  });

  //lingote infinito
  nadien.remove({ output: "avaritia:infinity_ingot" });
  nadien.remove({ id: "avaritia:infinity_ingot" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_ingot",
      ["NNNNNNNNN", "NCIICIICN", "NICCICCIN", "NCIICIICN", "NNNNNNNNN"],
      {
        C: {
          item: "avaritia:crystal_matrix_ingot",
        },
        N: {
          item: "avaritia:neutron_ingot",
        },
        I: {
          item: "avaritia:infinity_catalyst",
        },
      }
    )
    .id("nadien_tweaks:infinityingot");

  //endless cake
  nadien.remove({output: "avaritia:endless_cake" })
  nadien.recipes.create.mechanical_crafting("avaritia:endless_cake", ["aaa", "bcb", "ded"], {
      a: {
        item: "minecraft:milk_bucket",
      },
      b: {
        item: "minecraft:sugar",
      },
      c: {
        item: "minecraft:dragon_egg",
      },
      d: {
        tag: "c:crops/wheat",
      },
      e: {
        item: "avaritia:infinity_ingot",
      },
    })
    .id("nadien_tweaks:tartainfinita");

  //infinity totem
  nadien.remove({output: "avaritia:infinity_totem" })
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_totem",
      [
        "   NNN   ",
        "  NIIIN  ",
        "  NYIYN  ",
        "CCCIIICCC",
        " CCIIICC ",
        "  NIIIN  ",
        "  NNNNN  ",
        "   CCC   ",
        "    C    ",
      ],
      {
        C: {
          item: "avaritia:crystal_matrix_ingot",
        },
        I: {
          item: "avaritia:infinity_nugget",
        },
        N: {
          item: "avaritia:neutron_ingot",
        },
        Y: {
          item: "minecraft:totem_of_undying",
        },
      }
    )
    .id("nadien_tweaks:toteminfinito");

  //star fuel
  nadien.remove({output: "avaritia:star_fuel" })
  nadien.recipes.create
    .mechanical_crafting("avaritia:star_fuel", ["ccc", "cxc", "ccc"], {
      c: {
        item: "allthecompressed:coal_block_9x",
      },
      x: {
        item: "avaritia:infinity_catalyst",
      },
    })
    .id("nadien_tweaks:starfuel");

  //infinite bucket
  nadien.remove({output: "avaritia:infinity_bucket" })
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:infinity_bucket",
      [
        "NN     NN",
        "NNX   XNN",
        "NBBX XBBN",
        "NBBI IBBN",
        "NBBI IBBN",
        "NBBIIIBBN",
        "NNBBBBBNN",
        " NNBBBNN ",
        "  NNNNN  ",
      ],
      {
        B: "minecraft:bucket",
        I: "avaritia:infinity_ingot",
        N: "avaritia:neutron_ingot",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:infinitybucket");

  //crystal pickaxe
  nadien.remove({output: "avaritia:crystal_pickaxe" })
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:crystal_pickaxe",
      [
        " CCCWCCC ",
        "CWWWWWWWC",
        "CW  N  WC",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
      ],
      {
        C: "avaritia:crystal_matrix_ingot",
        W: "avaritia:crystal_matrix",
        N: "avaritia:neutron",
      }
    )
    .id("nadien_tweaks:crystalpickaxe");

  //cofre compreso
  nadien.remove({ output: "avaritia:compressed_chest" });
  nadien.recipes.create
    .mechanical_crafting("avaritia:compressed_chest", ["ccc", "cgc", "ccc"], {
      c: "minecraft:chest",
      g: "avaritia:neutron_gear",
    })
    .id("nadien_tweaks:cofrecompreso");

  //cofre infinito
  nadien.remove({ output: "avaritia:infinity_chest" });
  nadien.recipes.create.mechanical_crafting("avaritia:infinity_chest", ["mxn", "xyx", "mxn"], {
      m: "minecraft:crafting_table",
      n: "minecraft:furnace",
      x: "avaritia:infinity_ingot",
      y: "avaritia:compressed_chest",
    })
    .id("nadien_tweaks:infinity_chest");

  //sculk crafting
  nadien.remove({ output: "avaritia:sculk_crafting_table" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:sculk_crafting_table",
      ["aba", "cxc", "ada"],
      {
        a: "minecraft:echo_shard",
        b: "minecraft:sculk_shrieker",
        c: "minecraft:sculk",
        d: "minecraft:sculk_catalyst",
        x: "extendedcrafting:ultimate_table",
      }
    )
    .id("nadien_tweaks:sculk_crafting_table");

  //end crafting table
  nadien.remove({ output: "avaritia:end_crafting_table" });
  nadien.recipes.create.mechanical_crafting("avaritia:end_crafting_table",
      ["bcccb", "dfifd", "dgagd", "dhjhd", "beeeb"],
      {
        a: "avaritia:nether_crafting_table",
        b: "minecraft:end_crystal",
        c: "minecraft:end_portal_frame",
        d: "minecraft:obsidian",
        e: "minecraft:dragon_breath",
        f: "minecraft:purpur_pillar",
        g: "minecraft:end_stone_bricks",
        h: "minecraft:end_stone",
        i: "minecraft:ender_eye",
        j: "minecraft:ender_chest",
      }
    )
    .id("nadien_tweaks:end_crafting_table");

  //nether ctafting tabe
  nadien.remove({ output: "avaritia:nether_crafting_table" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:nether_crafting_table",
      ["cbc", "dad", "efe"],
      {
        a: "avaritia:sculk_crafting_table",
        b: "minecraft:respawn_anchor",
        c: "minecraft:wither_skeleton_skull",
        d: "minecraft:netherrack",
        e: "minecraft:netherite_ingot",
        f: "minecraft:nether_star",
      }
    )
    .id("nadien_tweaks:nether_crafting_table");

  //enchanced core
  nadien.remove({ output: "avaritia:enhancement_core" });
  nadien.remove({ id: "avaritia:enhancement_core" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:enhancement_core",
      [
        "   PPP   ",
        " NPCCCPN ",
        " PABBBAP ",
        "PCBBXBBCP",
        "PCBXEXBCP",
        "PCBBXBBCP",
        " PABBBAP ",
        " NPCCCPN ",
        "   PPP   ",
      ],
      {
        A: "avaritia:crystal_matrix",
        B: "avaritia:infinity_nugget",
        C: "avaritia:crystal_matrix_ingot",
        E: "avaritia:endest_pearl",
        N: "avaritia:neutron_ingot",
        P: "avaritia:neutron_pile",
        X: "avaritia:infinity_catalyst",
      }
    )
    .id("nadien_tweaks:enhancement_core");

  //extreme smithing table
  nadien.remove({ output: "avaritia:extreme_smithing_table" });
  nadien.recipes.create
    .mechanical_crafting(
      "avaritia:extreme_smithing_table",
      [
        "aaaaaaaaa",
        "bccfgfccb",
        "bcdhhhdcb",
        "lfhijihfl",
        "eghjkjhge",
        "lfhijihfl",
        "bcdhhhdcb",
        "bccfgfccb",
        "bleeeeelb",
      ],
      {
        a: "avaritia:neutron",
        b: "avaritia:neutron_ingot",
        c: "avaritia:diamond_lattice",
        d: "avaritia:blaze_cube",
        e: "avaritia:crystal_matrix",
        f: "avaritia:infinity_nugget",
        g: "avaritia:infinity_ingot",
        h: "avaritia:neutron_gear",
        i: "avaritia:infinity_catalyst",
        j: "minecraft:smithing_table",
        k: "avaritia:extreme_crafting_table",
        l: "avaritia:crystal_matrix_ingot",
      }).id("nadien_tweaks:extreme_smithing_table");

      //smithing template
nadien.remove({ output: 'avaritia:upgrade_smithing_template' })
nadien.remove({ id: 'avaritia:upgrade_smithing_template' })
nadien.recipes.create.mechanical_crafting('avaritia:upgrade_smithing_template',
[
  " aaabaaa ",
  " accecca ",
  " acefeca ",
  "dijkelmnd",
  "dogphqgrd",
  "dstufvwxd",
  " acdfdca ",
  " accecca ",
  " aaabaaa "
],
{
  a: "avaritia:crystal_matrix_ingot",
  b: "avaritia:crystal_matrix",
  c: "avaritia:neutron_ingot",
  d: "avaritia:neutron_pile",
  e: "avaritia:infinity_nugget",
  f: "avaritia:infinity_ingot",
  g: "avaritia:infinity_catalyst",
  h: "minecraft:netherite_upgrade_smithing_template",
  i: "minecraft:sentry_armor_trim_smithing_template",
  j: "minecraft:dune_armor_trim_smithing_template",
  k: "minecraft:coast_armor_trim_smithing_template",
  l: "minecraft:wild_armor_trim_smithing_template",
  m: "minecraft:ward_armor_trim_smithing_template",
  n: "minecraft:eye_armor_trim_smithing_template",
  o: "minecraft:vex_armor_trim_smithing_template",
  p: "minecraft:tide_armor_trim_smithing_template",
  q: "minecraft:snout_armor_trim_smithing_template",
  r: "minecraft:rib_armor_trim_smithing_template",
  s: "minecraft:spire_armor_trim_smithing_template",
  t: "minecraft:wayfinder_armor_trim_smithing_template",
  u: "minecraft:shaper_armor_trim_smithing_template",
  v: "minecraft:silence_armor_trim_smithing_template",
  w: "minecraft:raiser_armor_trim_smithing_template",
  x: "minecraft:host_armor_trim_smithing_template"
}).id("nadien_tweaks:upgrade_smithing_template")

nadien.remove({ output: 'avaritia:neutron_compressor' })
nadien.remove({ id: 'avaritia:neutron_compressor' })
nadien.recipes.create.mechanical_crafting('avaritia:neutron_compressor',
[
  "IIBHHHBII",
  "C N   N C",
  "I N   N I",
  "C N   N C",
  "RNN O NNR",
  "C N   N C",
  "I N   N I",
  "C N   N C",
  "IIBCICBII"
],
{
  B: "extendedcrafting:compressor",
  C: "avaritia:crystal_matrix_ingot",
  H: "minecraft:hopper",
  I: "minecraft:iron_block",
  N: "avaritia:neutron_ingot",
  O: "avaritia:neutron",
  R: "minecraft:redstone_block"
}).id("nadien_tweaks:neutron_compressor")

nadien.remove({ output: 'avaritia:infinity_trident' })
nadien.remove({ id: 'avaritia:infinity_trident' })
nadien.recipes.create.mechanical_crafting('avaritia:infinity_trident',
[
  "     I  I",
  "    I  I ",
  "   CAAI  ",
  "    AXA I",
  "    PAAI ",
  "   N  C  ",
  "  N      ",
  " C       ",
  "A        "
],
{
  A: "avaritia:crystal_matrix",
  C: "avaritia:crystal_matrix_ingot",
  I: "avaritia:infinity_ingot",
  N: "avaritia:neutron_ingot",
  P: "minecraft:heart_of_the_sea",
  X: "avaritia:infinity_catalyst"
}).id("nadien_tweaks:infinity_trident")

nadien.remove({ output: 'avaritia:infinity_shield' })
nadien.remove({ id: 'avaritia:infinity_shield' })

nadien.recipes.create.mechanical_crafting('avaritia:infinity_shield',
[
  " MNNCNNM ",
  " NCCDCCN ",
  " NSIIISN ",
  " NIAAAIN ",
  " NIAXAIN ",
  " NIAAAIN ",
  " NSIIISN ",
  " NCCDCCN ",
  " MNNCNNM "
],
{
  A: "avaritia:crystal_matrix",
  C: "avaritia:crystal_matrix_ingot",
  D: "avaritia:diamond_lattice",
  I: "avaritia:infinity_ingot",
  M: "avaritia:neutron",
  N: "avaritia:neutron_ingot",
  S: "minecraft:shield",
  X: "avaritia:infinity_catalyst"
}).id("nadien_tweaks:infinity_shield")

nadien.remove({ output: 'avaritia:infinity_mace' })
nadien.remove({ id: 'avaritia:infinity_mace' })
nadien.recipes.create.mechanical_crafting('avaritia:infinity_mace',
[
  "     CC C",
  "    CIIC ",
  "    CIMIC",
  "     CIIC",
  "    N CC ",
  "   D     ",
  "  N      ",
  " N       ",
  "C        "
],
{
  C: "avaritia:crystal_matrix_ingot",
  D: "minecraft:breeze_rod",
  I: "avaritia:infinity_nugget",
  M: "minecraft:heavy_core",
  N: "avaritia:neutron_ingot"
}).id("nadien_tweaks:infinity_mace")

nadien.remove({ output: 'avaritia:infinity_umbrella' })
nadien.remove({ id: 'avaritia:infinity_umbrella' })
nadien.recipes.create.mechanical_crafting('avaritia:infinity_umbrella',
[
  " IBNND  C",
  " INENNNA ",
  " XINNNBN ",
  "  INNFNND",
  "   INNNNN",
  "   NINNGN",
  "  N  IINB",
  " B    XII",
  "ACC      "
],
{
  A: "avaritia:crystal_matrix",
  B: "avaritia:neutron",
  C: "avaritia:crystal_matrix_ingot",
  D: "avaritia:neutron_nugget",
  E: "minecraft:flint_and_steel",
  F: "minecraft:water_bucket",
  G: "minecraft:trident",
  I: "avaritia:infinity_ingot",
  N: "avaritia:neutron_ingot",
  X: "avaritia:infinity_nugget"
}).id("nadien_tweaks:infinity_umbrella")

nadien.remove({ output: 'avaritia:denser_neutron_compressor' })
nadien.remove({ id: 'avaritia:denser_neutron_compressor' })
nadien.recipes.create.mechanical_crafting('avaritia:denser_neutron_compressor',
[
  "ABB F BBA",
  "BCC   CCB",
  "BCDEEEDCB",
  "  EGGGE  ",
  "F EGEGE F",
  "  EGGGE  ",
  "BCDEEEDCB",
  "BCC   CCB",
  "ABB F BBA"
],
{
  A: "avaritia:neutron_gear",
  B: "avaritia:neutron_pile",
  C: "avaritia:blaze_cube",
  D: Item.of('avaritia:singularity', '{avaritia:singularity_id:"avaritia:gold"}'),
  E: "avaritia:blaze_cube_block",
  F: "minecraft:gold_block",
  G: "avaritia:dense_neutron_compressor"
}).id("nadien_tweaks:denser_neutron_compressor")

nadien.remove({ output: 'avaritia:densest_neutron_collector' })
nadien.remove({ id: 'avaritia:densest_neutron_collector' })
nadien.recipes.create.mechanical_crafting('avaritia:densest_neutron_collector',
[
  "CC     CC",
  "C  BBB  C",
  "  AAAAA  ",
  " BAXXXAB ",
  " BAXYXAB ",
  " BAXXXAB ",
  "  AAAAA  ",
  "C  BBB  C",
  "CC     CC"
],
{
  A: "minecraft:redstone_block",
  B: "avaritia:neutron_ingot",
  C: "avaritia:neutron_gear",
  X: "avaritia:denser_neutron_collector",
  Y: Item.of('avaritia:singularity', '{avaritia:singularity_id:"avaritia:redstone"}')
}).id("nadien_tweaks:densest_neutron_collector")

nadien.remove({ output: 'avaritia:densest_neutron_compressor' })
nadien.remove({ id: 'avaritia:densest_neutron_compressor' })
nadien.recipes.create.mechanical_crafting('avaritia:densest_neutron_compressor',
[
  "CC     CC",
  "C  BBB  C",
  "  AAAAA  ",
  " BAXXXAB ",
  " BAXYXAB ",
  " BAXXXAB ",
  "  AAAAA  ",
  "C  BBB  C",
  "CC     CC"
],
{
  A: "minecraft:redstone_block",
  B: "avaritia:neutron_ingot",
  C: "avaritia:neutron_gear",
  X: "avaritia:denser_neutron_compressor",
  Y: Item.of('avaritia:singularity', '{avaritia:singularity_id:"avaritia:redstone"}')
}).id("nadien_tweaks:densest_neutron_compressor")

})
