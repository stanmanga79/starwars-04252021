const express = require("express");

const PORT = process.env.PORT || 3000;

// Data 
//TODO: Refactors characters to Class > Object Literals.. 
const characters = [
    {

        name: 'Yoda',
        role: 'Jedi Master',
        age: 900,
        forcePoints: 2000,
        nickname: 'yoda'
    },
    {
        name: 'Darth Maul',
        role: 'Sith Lord',
        age: 200,
        forcePoints: 80,
        nickname: 'darthmaul'
    },
    {
        name: 'Obi wan kenobi',
        role: 'Jedi Master',
        age: 55,
        forcePoints: 600,
        nickname: 'obi'
    }
]

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static('./public'));
app.use(express.static('./test'));

//View (HTML) / API (JSON) ??
app.get('/', function (req, res) {
    //TODO: Return HTML view.. 
    //res.send('Welcome to my Star Wars Express app..')
    res.sendFile(`${__dirname}/public/views/index.html`);
})

app.get('/add', function (req, res) {
    //TODO: Return HTML view.. 
    //res.send('Welcome to my Star Wars Express app..')
    res.sendFile(`${__dirname}/public/views/add.html`);
})

//View (HTML) / API (JSON) *
app.get('/api/characters', (req, res) => {
    console.log(`Successfully send Characters to Client :)`)
    res.json(characters)
})

//Parameter route example...
//View (HTML) / API (JSON) *
app.get('/api/characters/:nickname', (req, res) => {
    console.log(`You are requesting character ${req.params.nickname}..`)
    const requestedCharacter = characters.findIndex(x => x.nickname.toLowerCase() === req.params.nickname.toLowerCase()) > -1 ? characters.find(x => x.nickname.toLowerCase() === req.params.nickname.toLowerCase()) : { name: 'No Character found..' }
    res.json(requestedCharacter);
});

//View (HTML) / API (JSON) *
app.post('/api/characters', (req, res) => {
    console.log(`Creating new character (stanman)`);
    const newCharacter = req.body;
    characters.push(newCharacter);
    res.json(newCharacter);
})


app.listen(PORT, () => {
    console.log(`App is currently running on port ${PORT}`)
})


