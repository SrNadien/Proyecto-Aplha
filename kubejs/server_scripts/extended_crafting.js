ServerEvents.recipes(nadien => {
 
//eliminadas 
nadien.remove({output: ['extendedcrafting:ultimate_singularity', 'extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot']}) 
    
 //    ==================Functions================
//  Compresor
   function compresor(output, energia, input, catalyst, cantidad) {
    nadien.custom({
  "type": "extendedcrafting:compressor",
  "power_cost": energia,
  "ingredient": {
    "item": input,
    "count": cantidad
  },
  "catalyst": {
    "item": catalyst
  },
  "result": {
    "id": output
  }
}).id(`Nadien_tweaks:compressor/${output.replace(':', '/')}`)
      //example add compresor
      //compresor(output, energia, input, catalyst, cantidad)//
}	  

 function combinacion(output, energia, input, item1, item2, item3, item4, item5, item6, item7, item8, cantidad) {
    nadien.custom({
  "type": "extendedcrafting:combination",
  "power_cost": energia,
  "input": {
    "item": input
  },
  "ingredients": [
    {
      "item": item1
    },
    {
      "item": item2
    },
    {
      "item": item3
    },
    {
      "item": item4
    },
    {
      "item": item5
    },
    {
      "item": item6
    },
    {
      "item": item7
    },
    {
      "item": item8
    }
  ],
  "result": {
    "id": output,
    "count": cantidad
  }
}).id(`Nadien_tweaks:compressor/${output.replace(':', '/')}`)
      //example add combinacion
      //combinacion(output, energia, input, item1, item2, item3, item4, item5, item6, item7, item8, cantidad)//
  //    ==================Functions End================
}

//placa de hierro oscuro
nadien.recipes.create.pressing('extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot').id('nadien_tweaks:blackironslate')

//hierro oscuro
nadien.recipes.create.mixing('extendedcrafting:black_iron_ingot', ['create:brass_ingot', 'create:bar_of_chocolate']).superheated().id('nadien_tweaks:blackiron')

//ultimate singularity
nadien.remove({output: 'extendedcrafting:ultimate_singularity'})
 
//black iron frame
nadien.replaceInput({id: 'extendedcrafting:frame'}, 'extendedcrafting:black_iron_slate', 'industrialforegoing:machine_frame_supreme')
})