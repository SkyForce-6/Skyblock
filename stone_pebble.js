BlockEvents.broken(event => {

  if (event.block.id === 'minecraft:stone' && event.player.mainHandItem.id === 'minecraft:air') {
    
    event.player.give('exdeorum:stone_pebble')
    
  }
})