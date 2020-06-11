class Pokemon {
    constructor(data) {
      this.name = data.name.toUpperCase();
      this.type = data.types.map(t => t.type.name).join();
      this.hp_stat = data.stats.map(e => e.stat.name === "hp" ? e.base_stat : "")
      this.attack_stat = data.stats.map(e => e.stat.name === "attack" ? e.base_stat : "")
      this.defense_stat = data.stats.map(e => e.stat.name === "defense" ? e.base_stat : "")
    }
  }
  
  export default Pokemon;