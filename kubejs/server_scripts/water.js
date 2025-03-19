// Custom recipe script for Water Condenser

// Remove the original Water Condenser recipe
ServerEvents.recipes(event => {
    // Remove the existing recipe
    event.remove({output: 'watercondenser:watercondenser'})
    
    // Add a new shaped crafting recipe for the Water Condenser
    event.shaped('watercondenser:watercondenser', [
      'III',
      ' D ',
      ' G '
    ], {
      I: 'minecraft:bamboo',     // Iron Ingots on top and bottom
      G: 'minecraft:bamboo_planks',          // Glass in the center top
      D: 'minecraft:bamboo_block'         
    })
  })
