let players = [
        {
            "name": "Lionel Messi",
            "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
            "position": "RW",
            "nationality": "Argentina",
            "flag": "https://cdn.sofifa.net/flags/ar.png",
            "club": "Inter Miami",
            "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
            "rating": 93,
            "attributes": [
                { name: "pac", value: 85 },
                { name: "sho", value: 92 },
                { name: "pas", value: 91 },
                { name: "dri", value: 95 },
                { name: "def", value: 35 },
                { name: "phy", value: 65 }
            ]
        },
        {
            "name": "Cristiano Ronaldo",
            "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
            "position": "ST",
            "nationality": "Portugal",
            "flag": "https://cdn.sofifa.net/flags/pt.png",
            "club": "Al Nassr",
            "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
            "rating": 91,
            "attributes": [
                { name: "pac", value: 84 },
                { name: "sho", value: 94 },
                { name: "pas", value: 82 },
                { name: "dri", value: 87 },
                { name: "def", value: 34 },
                { name: "phy", value: 77 }
            ]
        },
        {
            "name": "Kevin De Bruyne",
            "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
            "position": "CM",
            "nationality": "Belgium",
            "flag": "https://cdn.sofifa.net/flags/be.png",
            "club": "Manchester City",
            "logo": "https://cdn.sofifa.net/meta/team/9/120.png",
            "rating": 91,
            "attributes": [
                { name: "pac", value: 74 },
                { name: "sho", value: 86 },
                { name: "pas", value: 93 },
                { name: "dri", value: 88 },
                { name: "def", value: 64 },
                { name: "phy", value: 78 }
            ]
        },
        {
            "name": "Kylian Mbappé",
            "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
            "position": "ST",
            "nationality": "France",
            "flag": "https://cdn.sofifa.net/flags/fr.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 92,
            "attributes": [
                { name: "pac", value: 97 },
                { name: "sho", value: 89 },
                { name: "pas", value: 80 },
                { name: "dri", value: 92 },
                { name: "def", value: 39 },
                { name: "phy", value: 77 }
            ]
        },
        {
            "name": "Virgil van Dijk",
            "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
            "position": "CB",
            "nationality": "Netherlands",
            "flag": "https://cdn.sofifa.net/flags/nl.png",
            "club": "Liverpool",
            "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
            "rating": 90,
            "attributes": [
                { name: "pac", value: 75 },
                { name: "sho", value: 60 },
                { name: "pas", value: 70 },
                { name: "dri", value: 72 },
                { name: "def", value: 92 },
                { name: "phy", value: 86 }
            ]
        },
        {
            "name": "Antonio Rudiger",
            "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
            "position": "CB",
            "nationality": "Germany",
            "flag": "https://cdn.sofifa.net/flags/de.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 88,
            "attributes": [
                { name: "pac", value: 82 },
                { name: "sho", value: 55 },
                { name: "pas", value: 73 },
                { name: "dri", value: 70 },
                { name: "def", value: 86 },
                { name: "phy", value: 86 }
            ]
        },
        {
            "name": "Neymar Jr",
            "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
            "position": "LW",
            "nationality": "Brazil",
            "flag": "https://cdn.sofifa.net/flags/br.png",
            "club": "Al-Hilal",
            "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
            "rating": 90,
            "attributes": [
                { name: "pac", value: 91 },
                { name: "sho", value: 83 },
                { name: "pas", value: 86 },
                { name: "dri", value: 94 },
                { name: "def", value: 37 },
                { name: "phy", value: 61 }
            ]
        },
        {
            "name": "Mohamed Salah",
            "photo": "https://cdn.sofifa.net/players/209/331/25_120.png",
            "position": "RW",
            "nationality": "Egypt",
            "flag": "https://cdn.sofifa.net/flags/eg.png",
            "club": "Liverpool",
            "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
            "rating": 89,
            "attributes": [
                { name: "pac", value: 93 },
                { name: "sho", value: 87 },
                { name: "pas", value: 81 },
                { name: "dri", value: 90 },
                { name: "def", value: 45 },
                { name: "phy", value: 75 }
            ]
        },
        {
            "name": "Joshua Kimmich",
            "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
            "position": "CM",
            "nationality": "Germany",
            "flag": "https://cdn.sofifa.net/flags/de.png",
            "club": "Bayern Munich",
            "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
            "rating": 89,
            "attributes": [
                { name: "pac", value: 70 },
                { name: "sho", value: 75 },
                { name: "pas", value: 88 },
                { name: "dri", value: 84 },
                { name: "def", value: 84 },
                { name: "phy", value: 81 }
            ]
        },
        {
            "name": "Jan Oblak",
            "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
            "position": "GK",
            "nationality": "Slovenia",
            "flag": "https://cdn.sofifa.net/flags/si.png",
            "club": "Atletico Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
            "rating": 91,
            "attributes": [
                { name: "div", value: 89 },
                { name: "han", value: 90 },
                { name: "kic", value: 78 },
                { name: "ref", value: 92 },
                { name: "spd", value: 50 },
                { name: "pos", value: 88 }
            ]
        },
        {
            "name": "Luka Modrić",
            "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
            "position": "CM",
            "nationality": "Croatia",
            "flag": "https://cdn.sofifa.net/flags/hr.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 88,
            "attributes": [
                { name: "pac", value: 74 },
                { name: "sho", value: 78 },
                { name: "pas", value: 89 },
                { name: "dri", value: 90 },
                { name: "def", value: 72 },
                { name: "phy", value: 65 }
            ]
        },
        {
            "name": "Vinicius Junior",
            "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
            "position": "LW",
            "nationality": "Brazil",
            "flag": "https://cdn.sofifa.net/flags/br.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 89,
            "attributes": [
                { name: "pac", value: 91 },
                { name: "sho", value: 88 },
                { name: "pas", value: 85 },
                { name: "dri", value: 94 },
                { name: "def", value: 39 },
                { name: "phy", value: 61 }
            ]
        },
        {
            "name": "Brahim Diáz",
            "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
            "position": "LW",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Real Madrid",
            "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
            "rating": 82,
            "attributes": [
                { name: "pac", value: 85 },
                { name: "sho", value: 74 },
                { name: "pas", value: 78 },
                { name: "dri", value: 85 },
                { name: "def", value: 31 },
                { name: "phy", value: 56 }
            ]
        },
        {
            "name": "Karim Benzema",
            "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
            "position": "ST",
            "nationality": "France",
            "flag": "https://cdn.sofifa.net/flags/fr.png",
            "club": "Al-Ittihad",
            "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
            "rating": 90,
            "attributes": [
                { name: "pac", value: 77 },
                { name: "sho", value: 90 },
                { name: "pas", value: 83 },
                { name: "dri", value: 88 },
                { name: "def", value: 40 },
                { name: "phy", value: 78 }
            ]
        },
        {
            "name": "Erling Haaland",
            "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
            "position": "ST",
            "nationality": "Norway",
            "flag": "https://cdn.sofifa.net/flags/no.png",
            "club": "Manchester City",
            "logo": "https://cdn.sofifa.net/meta/team/9/120.png",
            "rating": 91,
            "attributes": [
                { name: "pac", value: 89 },
                { name: "sho", value: 94 },
                { name: "pas", value: 65 },
                { name: "dri", value: 80 },
                { name: "def", value: 45 },
                { name: "phy", value: 88 }
            ]
        },
        {
            "name": "N'Golo Kanté",
            "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
            "position": "CDM",
            "nationality": "France",
            "flag": "https://cdn.sofifa.net/flags/fr.png",
            "club": "Al-Ittihad",
            "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
            "rating": 87,
            "attributes": [
                { name: "pac", value: 77 },
                { name: "sho", value: 66 },
                { name: "pas", value: 75 },
                { name: "dri", value: 82 },
                { name: "def", value: 88 },
                { name: "phy", value: 82 }
            ]
        },
        {
            "name": "Alphonso Davies",
            "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
            "position": "LB",
            "nationality": "Canada",
            "flag": "https://cdn.sofifa.net/flags/ca.png",
            "club": "Bayern Munich",
            "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
            "rating": 84,
            "attributes": [
                { name: "pac", value: 96 },
                { name: "sho", value: 68 },
                { name: "pas", value: 77 },
                { name: "dri", value: 82 },
                { name: "def", value: 76 },
                { name: "phy", value: 77 }
            ]
        },
        {
            "name": "Yassine Bounou",
            "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
            "position": "GK",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Al-Hilal",
            "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
            "rating": 84,
            "attributes": [
                { name: "div", value: 81 },
                { name: "han", value: 82 },
                { name: "kic", value: 77 },
                { name: "ref", value: 86 },
                { name: "spd", value: 38 },
                { name: "pos", value: 83 }
            ]
        },
        {
            "name": "Bruno Fernandes",
            "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
            "position": "CM",
            "nationality": "Portugal",
            "flag": "https://cdn.sofifa.net/flags/pt.png",
            "club": "Manchester United",
            "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
            "rating": 88,
            "attributes": [
                { name: "pac", value: 75 },
                { name: "sho", value: 85 },
                { name: "pas", value: 89 },
                { name: "dri", value: 84 },
                { name: "def", value: 69 },
                { name: "phy", value: 77 }
            ]
        },
        {
            "name": "Jadon Sancho",
            "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
            "position": "LW",
            "nationality": "England",
            "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
            "club": "Manchester United",
            "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
            "rating": 84,
            "attributes": [
                { name: "pac", value: 85 },
                { name: "sho", value: 74 },
                { name: "pas", value: 78 },
                { name: "dri", value: 88 },
                { name: "def", value: 34 },
                { name: "phy", value: 63 }
            ]
        },
        {
            "name": "Alexander-Arnold",
            "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
            "position": "RB",
            "nationality": "England",
            "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
            "club": "Liverpool",
            "logo": "https://cdn.sofifa.net/meta/team/8/30.png",
            "rating": 87,
            "attributes": [
                { name: "pac", value: 76 },
                { name: "sho", value: 66 },
                { name: "pas", value: 89 },
                { name: "dri", value: 80 },
                { name: "def", value: 79 },
                { name: "phy", value: 71 }
            ]
        },
        {
            "name": "Achraf Hakimi",
            "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
            "position": "RB",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Paris Saint-Germain",
            "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
            "rating": 84,
            "attributes": [
                { name: "pac", value: 91 },
                { name: "sho", value: 76 },
                { name: "pas", value: 80 },
                { name: "dri", value: 80 },
                { name: "def", value: 75 },
                { name: "phy", value: 78 }
            ]
        },
        {
            "name": "Youssef En-Nesyri",
            "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
            "position": "ST",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Fenerbahçe",
            "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
            "rating": 83,
            "attributes": [
                { name: "pac", value: 82 },
                { name: "sho", value: 82 },
                { name: "pas", value: 63 },
                { name: "dri", value: 77 },
                { name: "def", value: 36 },
                { name: "phy", value: 80 }
            ]
        },
        {
            "name": "Noussair Mazraoui",
            "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
            "position": "LB",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "Manchester United",
            "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
            "rating": 81,
            "attributes": [
                { name: "pac", value: 78 },
                { name: "sho", value: 66 },
                { name: "pas", value: 77 },
                { name: "dri", value: 83 },
                { name: "def", value: 77 },
                { name: "phy", value: 71 }
            ]
        },
        {
            "name": "Ismael Saibari",
            "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
            "position": "CM",
            "nationality": "Morocco",
            "flag": "https://cdn.sofifa.net/flags/ma.png",
            "club": "PSV",
            "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
            "rating": 83,
            "attributes": [
                { name: "pac", value: 89 },
                { name: "sho", value: 78 },
                { name: "pas", value: 80 },
                { name: "dri", value: 86 },
                { name: "def", value: 55 },
                { name: "phy", value: 84 }
            ]
        },
        {
            "name": "Donnarumma",
            "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
            "position": "GK",
            "nationality": "Italy",
            "flag": "https://cdn.sofifa.net/flags/it.png",
            "club": "Paris Saint-Germain",
            "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
            "rating": 89,
            "attributes": [
                { name: "div", value: 88 },
                { name: "han", value: 84 },
                { name: "kic", value: 75 },
                { name: "ref", value: 90 },
                { name: "spd", value: 50 },
                { name: "pos", value: 85 }
            ]
        }
    ];

    // formation configurations
const formations = {
    "4-4-2": {
        positions: [
            { position: "GK", x: 40, y: 70 },
            { position: "LB", x: 5, y: 45 },
            { position: "CB", x: 30, y: 45 },
            { position: "CB", x: 60, y: 45 },
            { position: "RB", x: 85, y: 45 },
            { position: "LM", x: 5, y: 20 },
            { position: "CM", x: 30, y: 20 },
            { position: "CM", x: 60, y: 20 },
            { position: "RM", x: 80, y: 20 },
            { position: "ST", x: 30, y: 0 },
            { position: "ST", x: 60, y: 0 }
        ]
    },
    "4-3-3": {
        positions: [
            { position: "GK", x: 40, y: 70 },
            { position: "LB", x: 5, y: 45 },
            { position: "CB", x: 30, y: 45 },
            { position: "CB", x: 60, y: 45 },
            { position: "RB", x: 85, y: 45 },
            { position: "CM", x: 25, y: 20 },
            { position: "CM", x: 45, y: 20 },
            { position: "CM", x: 65, y: 20 },
            { position: "LW", x: 10, y: 0 },
            { position: "ST", x: 45, y: 0 },
            { position: "RW", x: 80, y: 0 }
        ]
    }
};


// Function to save players to localStorage
function savePlayers() {
    localStorage.setItem('players', JSON.stringify(players));
}

// Logique JavaScript pour ajouter et gérer les joueurs sélectionnés
const playerPosition = document.getElementById('player-position');
const gkAttributes = document.getElementById('gk-attributes');
const outfieldAttributes = document.getElementById('outfield-attributes');
const formationSelect = document.getElementById('formation-select');
const addPlayerButton = document.getElementById('add-player');
const playerList = document.getElementById('player-list');
const chemistryScoreElement = document.getElementById('chemistry-score');
const playerAttributesContainer = document.getElementById('player-attributes');


playerPosition.addEventListener('change', function () {
    const position = playerPosition.value;
    if (position === 'GK') {
        gkAttributes.classList.remove('hidden');
        outfieldAttributes.classList.add('hidden');
    } else {
        gkAttributes.classList.add('hidden');
        outfieldAttributes.classList.remove('hidden');
    }
});

addPlayerButton.addEventListener('click', addPlayer);
// add player to the list
function addPlayer() {
    if (!validatePlayerForm()) {
        return;
    }
    
    const playerName = document.getElementById('player-name').value;
    const playerPosition = document.getElementById('player-position').value;
    const nationalitySelect = document.getElementById('player-nationality');
    const clubSelect = document.getElementById('player-club');
    const playerRating = document.getElementById('player-rating').value;
    const photoInput = document.getElementById('player-photo');

    let photoUrl = "https://cdn.sofifa.net/player_0.svg"; // Default photo

    // Handle photo upload if a file was selected
    if (photoInput.files && photoInput.files[0]) {
        const file = photoInput.files[0];
        photoUrl = URL.createObjectURL(file);
    }

    let attributes = [];
    
    if (playerPosition === 'GK') {
        attributes = [
            { name: "div", value: parseInt(document.getElementById('gk-diving').value) },
            { name: "han", value: parseInt(document.getElementById('gk-handling').value) },
            { name: "kic", value: parseInt(document.getElementById('gk-kicking').value) },
            { name: "ref", value: parseInt(document.getElementById('gk-reflexes').value) },
            { name: "spd", value: parseInt(document.getElementById('gk-speed').value) },
            { name: "pos", value: parseInt(document.getElementById('gk-positioning').value) }
        ];
    } else {
        attributes = [
            { name: "pac", value: parseInt(document.getElementById('player-pace').value) },
            { name: "sho", value: parseInt(document.getElementById('player-shooting').value) },
            { name: "pas", value: parseInt(document.getElementById('player-passing').value) },
            { name: "dri", value: parseInt(document.getElementById('player-dribbling').value) },
            { name: "def", value: parseInt(document.getElementById('player-defending').value) },
            { name: "phy", value: parseInt(document.getElementById('player-physical').value) }
        ];
    }

    const newPlayer = {
        name: playerName,
        position: playerPosition,
        photo: photoUrl,
        nationality: nationalitySelect.value,
        flag: nationalitySelect.options[nationalitySelect.selectedIndex].getAttribute("data-flag-url"),
        club: clubSelect.value,
        logo: clubSelect.options[clubSelect.selectedIndex].getAttribute("data-logo-url"),
        rating: parseInt(playerRating),
        attributes: attributes
    };

    players.push(newPlayer);
    savePlayers(); // Save to localStorage
    updatePlayerList();
    
    // Reset form
    document.getElementById('player-form').reset();
    // Reset photo preview if you have one
    const photoPreview = document.querySelector('.photo-preview img');
    if (photoPreview) {
        photoPreview.src = "https://cdn.sofifa.net/player_0.svg";
    }
}

// function to display players list 
function updatePlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = ''; // Clear existing cards
    // only show players that are not in the field
    players.forEach((player, index) => {
        if (!fieldPlayers.has(player.name)) {
        card = createPlayerCard(player,false);
        }
        playerList.appendChild(card);
        // Add delete button to each card
        const deleteButton = document.createElement('button');
        deleteButton.className = 'absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center m-1';
        deleteButton.innerHTML = '×';
        deleteButton.onclick = (e) => {
            e.stopPropagation();
            players.splice(index, 1);
            savePlayers();
            updatePlayerList();
        };
        card.appendChild(deleteButton);
    });


}

// function to create player card
function createPlayerCard(playerData, isFieldCard = false) {
    const card = document.createElement('div');
    card.className = `relative isolate w-[142px] text-[#4d331f] font-['Cruyff-Regular',Arial,sans-serif] text-[calc(142px*0.0557)] font-normal aspect-[0.71527778] transform scale-90 hover:scale-95 transition-transform duration-200 cursor-pointer`;

    card.innerHTML = `
        <img src="https://cdn3.futbin.com/content/fifa25/img/cards/hd/1_gold.png?fm=png&amp;ixlib=java-2.1.0&amp;verzion=4&amp;w=644&amp;s=f1df4164887bb424daae0cd265488b26" 
            alt="Card Background"
            class="aspect-[252/350] w-full rounded-lg h-full">

        <img src="${playerData.photo}"
            alt="${playerData.name}" 
            class="absolute h-auto top-[17.4%] left-[22%] w-[64.32687%]">

        <div class="flex flex-col absolute top-[22%] left-[15%] text-center">
            <div class="font-['Cruyff-Bold',sans-serif] text-[2.1373em] leading-[calc(142px*0.1032)]">
                ${playerData.rating}
            </div>
            <div class="text-[1em] font-['Cruyff-Medium',sans-serif]">
                ${playerData.position}
            </div>
        </div>

        <div class="absolute w-full flex flex-col items-center justify-evenly left-1/2 -translate-x-1/2 top-[63%] h-[calc(142px*0.33)] max-w-[calc(142px-142px*0.22)]">
            <div class="text-center max-w-full capitalize tracking-[-0.2px] font-['Cruyff-Medium',sans-serif] text-[1.5em]">
                ${playerData.name}
            </div>

            <div class="z-[4] flex text-center w-full justify-evenly">
                ${playerData.attributes.map(attr => `
                    <div class="flex flex-col items-center">
                        <div class="font-['Cruyff-Medium',sans-serif]">${attr.value}</div>
                        <div class="uppercase text-[0.77em]">${attr.name}</div>
                    </div>
                `).join('')}
            </div>

            <div class="translate-y-[-20%] flex gap-2 items-center scale-[0.8]">
                <img src="${playerData.flag}" alt="${playerData.nationality}" class="w-4 h-4 object-contain">
                <img src="${playerData.logo}" alt="${playerData.club}" class="w-4 h-4 object-contain">
            </div>
        </div>
    `;

    if (isFieldCard) {
        const removeButton = document.createElement('button');
        removeButton.className = 'absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center m-1 opacity-0 transition-opacity duration-200 hover:opacity-100 z-10';
        removeButton.innerHTML = '×';
        removeButton.onclick = (e) => {
            e.stopPropagation();
            removePlayerFromField(playerData, card.parentElement);
        };
        card.appendChild(removeButton);

        // Show remove button on hover
        card.addEventListener('mouseenter', () => {
            removeButton.style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            removeButton.style.opacity = '0';
        });
    } else {
        // Only add selection functionality for player list cards
        card.addEventListener('click', () => {
            console.log(playerData.name , playerData.rating);
            if (!fieldPlayers.has(playerData.name)) {
                const previouslySelected = document.querySelector('.selected-player');
                if (previouslySelected) {
                    previouslySelected.classList.remove('selected-player');
                }
                card.classList.add('selected-player');
                selectedPlayer = playerData;

                if (selectedSlot) {
                    placePlayerInSlot(playerData, selectedSlot);
                }
            }
        });
    }

    return card;
}


// function to create an empty slot
function createSlot(position, x, y) {
    const slot = document.createElement('div');
    slot.className = `absolute player-draggable playercard-field`;
    slot.style.left = `${x}%`;
    slot.style.top = `${y}%`;
    slot.dataset.position = position;
    
    const cardHTML = `
        <div class="slot relative text-center">
            <div class="position-circle-wrapper">
                <div class="position-circle">
                    <div class="">${position}</div>
                </div>
            </div>
            <button class="cardbutton button-reset" aria-label="Card Button">
                <img class="placeholder-img placeholder-enable-hover-shadow" src="img/placeholder-card-normal.webp">
                <div class="player-add-icon-wrapper-modern">
                    <span class="display-contents">
                        <svg class="" viewBox="0 0 36 42" fill="none" width="36">
                            <path d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z" stroke="currentColor" stroke-width="1.5"></path>
                        </svg>
                    </span>
                    <div class="absolute font-large">+</div>
                </div>
            </button>
        </div>
    `;

    slot.innerHTML = cardHTML;

    // Add click event to the slot
    slot.addEventListener('click', () => {
        // Remove highlight from previously selected slot
        if (selectedSlot) {
            selectedSlot.classList.remove('selected-slot');
        }

        // Highlight the selected slot
        slot.classList.add('selected-slot');
        selectedSlot = slot;

        // If both slot and player are selected, place the player
        if (selectedPlayer) {
            placePlayerInSlot(selectedPlayer, slot);
        }
    });

    return slot;
}

// function to update formation
function updateFormation(formationName) {
    const pitch = document.getElementById('football-pitch');
    pitch.innerHTML = ''; // Clear existing slots

    const formation = formations[formationName];
    if (!formation) return;

    formation.positions.forEach(({ position, x, y }) => {
        const slot = createSlot(position, x, y);
        pitch.appendChild(slot);
    });
}

// Add event listener for formation changes
formationSelect.addEventListener('change', (e) => {
    updateFormation(e.target.value);
});

// add form validation
function validatePlayerForm() {
    const playerName = document.getElementById('player-name').value;
    const playerPosition = document.getElementById('player-position').value;
    const nationality = document.getElementById('player-nationality').value;
    const club = document.getElementById('player-club').value;
    const rating = document.getElementById('player-rating').value;

    // Basic validation
    if (!playerName.trim()) {
        alert('Please enter player name');
        return false;
    }

    if (!playerPosition || (playerPosition !== 'GK' && playerPosition !== 'ST' 
        && playerPosition !== 'LW' && playerPosition !== 'RW' && playerPosition !== 'CM' 
        && playerPosition !== 'CDM' && playerPosition !== 'CAM' && playerPosition !== 'LM' && playerPosition !== 'RM')) {
        alert('Please select a valid position');
        return false;
    }

    if (!nationality) {
        alert('Please select a nationality');
        return false;
    }

    if (!club) {
        alert('Please select a club');
        return false;
    }

    if (!rating || rating < 0 || rating > 99) {
        alert('Please enter a valid rating between 0 and 99');
        return false;
    }

    // Validate attributes based on position
    if (playerPosition === 'GK') {
        const gkAttributes = ['diving', 'handling', 'kicking', 'reflexes', 'speed', 'positioning'];
        for (const attr of gkAttributes) {
            const value = document.getElementById(`gk-${attr}`).value;
            if (!value || value < 0 || value > 99) {
                alert(`Please enter a valid ${attr} value between 0 and 99`);
                return false;
            }
        }
    } else {
        const outfieldAttributes = ['pace', 'shooting', 'passing', 'dribbling', 'defending', 'physical'];
        for (const attr of outfieldAttributes) {
            const value = document.getElementById(`player-${attr}`).value;
            if (!value || value < 0 || value > 99) {
                alert(`Please enter a valid ${attr} value between 0 and 99`);
                return false;
            }
        }
    }

    return true;
}

//  photo preview functionality
document.getElementById('player-photo').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoPreview = document.querySelector('.h-16.w-16.object-cover.rounded-full');
            if (photoPreview) {
                photoPreview.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
});



let selectedSlot = null;
let selectedPlayer = null;
let fieldPlayers = new Set(); // Track players placed in the field

// Add function to place player in slot
function placePlayerInSlot(player, slot) {
    
    if(slot.dataset.position != 'GK' && player.position == 'GK'){
        alert("cannot place goalkeeper in this position");
        return;
    }
    const fieldCard = createPlayerCard(player, true);
    slot.innerHTML = '';
    slot.appendChild(fieldCard);
    // Add player to field players set
    fieldPlayers.add(player.name);
    
    // Reset selections
    selectedSlot.classList.remove('selected-slot');
    const selectedCardElement = document.querySelector('.selected-player');
    if (selectedCardElement) {
        selectedCardElement.classList.remove('selected-player');
    }
    selectedSlot = null;
    selectedPlayer = null;
    
    // Update player list to remove the placed player
    updatePlayerList();
}

// Add function to remove player from field
function removePlayerFromField(player, slot) {
    // Remove player from field players set
    fieldPlayers.delete(player.name);
    
    // Reset slot to empty state
    resetSlot(slot);
    
    // Update player list to show the removed player
    updatePlayerList();
}

//  function to reset slot to initial state
function resetSlot(slot) {
    const position = slot.dataset.position;
    slot.innerHTML = `
        <div class="slot relative text-center">
            <div class="position-circle-wrapper">
                <div class="position-circle">
                    <div class="">${position}</div>
                </div>
            </div>
            <button class="cardbutton button-reset" aria-label="Card Button">
                <img class="placeholder-img placeholder-enable-hover-shadow" src="/img/placeholder-card-normal.webp">
                <div class="player-add-icon-wrapper-modern">
                    <span class="display-contents">
                        <svg class="" viewBox="0 0 36 42" fill="none" width="36">
                            <path d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z" stroke="currentColor" stroke-width="1.5"></path>
                        </svg>
                    </span>
                    <div class="absolute font-large">+</div>
                </div>
            </button>
        </div>
    `;
}

// Initialize the player list when the page loads
document.addEventListener('DOMContentLoaded', () => {
    savePlayers();
    // Load players from localStorage on page load
    players = JSON.parse(localStorage.getItem('players')) || [];
    updateFormation('4-3-3');
    updatePlayerList();
    // Add form reset listener
    document.getElementById('player-form').addEventListener('reset', () => {
        const photoPreview = document.querySelector('.h-16.w-16.object-cover.rounded-full');
        if (photoPreview) {
            photoPreview.src = "https://cdn.sofifa.net/player_0.svg";
        }
    });
});