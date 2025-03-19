  ServerEvents.recipes(event => {
    // 4 Sticks zu 1 Eichenholzplanke
    event.shaped(
      'woodenbucket:wooden_bucket', // Ergebnis
      [
        'S S', // Crafting-Muster
        ' S '
      ],
      {
        S: 'minecraft:bamboo_block' // Definition was S im Muster bedeutet
      }
    )
  })
