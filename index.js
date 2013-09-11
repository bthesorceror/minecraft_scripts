ready(function() {
  function getWorld() {
    return utils.getPlayerObject().getWorld();
  }

  function liftedDrone() {
    return (new Drone()).up(20);
  }

  function rainDrone(cb) {
    var drone = liftedDrone();
    for(var i = 0; i < 10; i++) {
      cb(drone.fwd(1));
    }
  }

  function spawnGhast() {
    var drone = liftedDrone();
    getWorld().spawnCreature(drone.getLocation(), org.bukkit.entity.CreatureType.GHAST);
  }

  function spawnDragon() {
    var drone = liftedDrone();
    getWorld().spawnCreature(drone.getLocation(), org.bukkit.entity.CreatureType.ENDER_DRAGON);
  }

  function rainVillagers() {
    rainDrone(function(drone) {
      getWorld().spawnEntity(drone.getLocation(), org.bukkit.entity.EntityType.VILLAGER);
    });
  }

  function _spawnHorses(type) {
    rainDrone(function(drone) {
      var entity = getWorld().spawnEntity(drone.getLocation(), 
                             org.bukkit.entity.EntityType.HORSE);
      entity.setVariant(type);
    });
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
