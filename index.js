ready(function() {
  function getWorld() {
    return utils.getPlayerObject().getWorld();
  }

  function spawnGhast() {
    var drone = new Drone();
    drone.up(20);
    getWorld().spawnCreature(drone.getLocation(), org.bukkit.entity.CreatureType.GHAST);
  }

  function spawnDragon() {
    var drone = new Drone();
    drone.up(20);
    getWorld().spawnCreature(drone.getLocation(), org.bukkit.entity.CreatureType.ENDER_DRAGON);
  }

  function rainVillagers() {
    var drone = new Drone();
    drone.up(20);
    for(var i = 0; i < 10; i++) {
      drone.fwd(1);
      getWorld().spawnEntity(drone.getLocation(), org.bukkit.entity.EntityType.VILLAGER);
    }
  }

  function _spawnHorses(type) {
    var drone = new Drone();
    drone.up(20);
    for(var i = 0; i < 10; i++) {
      drone.fwd(1);
      var entity = getWorld().spawnEntity(drone.getLocation(), 
                             org.bukkit.entity.EntityType.HORSE);
      entity.setVariant(type);
    }
  }

  function rainDonkeys() {
    _spawnHorses(org.bukkit.entity.Horse.Variant.DONKEY);
  }

  function rainUndead() {
    _spawnHorses(org.bukkit.entity.Horse.Variant.SKELETON_HORSE);
  }

  command("villagers", rainVillagers);
  command("donkeys", rainDonkeys);
  command("undead", rainUndead);
  command("ghast", spawnGhast);
  command("dragon", spawnDragon);
});
