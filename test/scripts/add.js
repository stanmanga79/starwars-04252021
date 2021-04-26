const addBtn = document.getElementById('add-btn');

let charName = document.getElementById("name")
let charRole = document.getElementById("role")
let charAge = document.getElementById("age")
let charForce = document.getElementById("force-points")


addBtn.addEventListener('click', () => {
    // let newCharacter = {
    //     name: charName.value,
    //     role: charRole.value,
    //     age: charAge.value,
    //     forcePoints: charForce.value,
    //     nickname: charName.value
    // }

    let mockCharacter = {
        name: charName.value,
        role: charRole.value,
        age: charAge.value,
        forcePoints: charForce.value,
        nickname: charName.value.toLowerCase()
    }

    console.log(`Send Character ${mockCharacter.name} to Server.. Stand by..`);

    fetch('/api/characters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mockCharacter)
    }).then(function (response) {
        return response.json();
    }).then(character => {
        console.log(`Successfully create the Character (${character.name})`);
        alert(`Successfully create the Character (${character.name})`)
    })

})


// Question: What is "e" short for?
// addBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     // Question: What does this code do?
//     let charName = document.getElementById('name').value.trim();
//     let charRole = document.getElementById('role').value.trim();
//     let charAge = document.getElementById('age').value.trim();
//     let charFp = document.getElementById('force-points').value.trim();

//     let newCharacter = {
//         name: charName,
//         role: charRole,
//         age: parseInt(charAge),
//         forcePoints: parseInt(charFp),
//     };

//     // Question: What does this code do??
//     fetch('/api/characters', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newCharacter),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('add.html', data);
//             alert(`Adding character: ${data.name}`);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// });