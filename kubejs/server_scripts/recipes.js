ServerEvents.recipes(event => {
    // 4 Sticks zu 1 Eichenholzplanke
    event.shaped(
      'minecraft:oak_planks', // Ergebnis
      [
        'SS', // Crafting-Muster
        'SS'  // S steht für Stick
      ],
      {
        S: 'minecraft:stick' // Definition was S im Muster bedeutet
      }
    )
  })
