use pokemon_team;
db.dropDatabase();

db.pokemon.insertMany([
    {
        name: "charmander",
        wins: 1
        losses:3
    },
    {
        name: "pikachu",
        wins: 5,
        losses: 0
    }

])