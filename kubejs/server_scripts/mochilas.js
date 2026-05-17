//mochilas by SrNadien
ServerEvents.recipes(nadien => {

nadien.remove({output: 'sophisticatedbackpacks:backpack' })
nadien.shaped('sophisticatedbackpacks:backpack', [
    'SLS',
    'SCS',
    'LLL'
    ], {
      S: 'minecraft:string',
      L: 'kubejs:industrial_leather',
      C: 'excessive_utilities:bag_of_holding'
}).id('nadien_tweaks:mochila')




});