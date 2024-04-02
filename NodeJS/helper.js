exports.success = (message, data) => {
  return { message, data };
};

exports.getUniqueID = (pokemons) => {
  const pokemonsIds = pokemons.map((pokemon) => pokemon.id);
  const maxID = pokemonsIds.reduce((a, b) => Math.max(a, b), 0);
  const uniqueID = maxID + 1;

  return uniqueID;
};
