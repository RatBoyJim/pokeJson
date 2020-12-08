use pokemon_team;
db.dropDatabase();

db.pokemon.insertMany([
    {
        name: "bulbasaur",
        wins: 2,
        losses: 5
    },
    {
        name: "ivysaur",
        wins: 1,
        losses: 3
    },
    {
        name: "venusaur",
        wins: 4,
        losses: 1
    },
    {
        name: "charmander",
        wins: 4,
        losses: 1
    },
    {
        name: "charmeleon",
        wins: 5,
        losses: 2
    },
    {
        name: "charizard",
        wins: 3,
        losses: 3
    },
    {
        name: "squirtle",
        wins: 2,
        losses: 3
    },
    {
        name: "wartortle",
        wins: 6,
        losses: 4
    },
    {
        name: "blastoise",
        wins: 4,
        losses: 5
    },
    {
        name: "caterpie",
        wins: 1,
        losses: 2
    },
    {
        name: "metapod",
        wins: 1,
        losses: 1
    },
    {
        name: "butterfree",
        wins: 2,
        losses: 5
    },
    {
        name: "weedle",
        wins: 5,
        losses: 2
    },
    {
        name: "kakuna",
        wins: 3,
        losses: 3
    },
    {
        name: "beedrill",
        wins: 4,
        losses: 3
    },
    {
        name: "pidgey",
        wins: 1,
        losses: 3
    },
    {
        name: "pidgeotto",
        wins: 6,
        losses: 2
    },
    {
        name: "pidgeot",
        wins: 4,
        losses: 3
    },
    {
        name: "rattata",
        wins: 5,
        losses: 0
    },
    {
        name: "raticate",
        wins: 0,
        losses: 3
    }
])