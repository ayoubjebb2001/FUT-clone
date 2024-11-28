const players = [
    {
        "name": "Ismael Saibari",
        "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
        "position": "CM",
        "nationality": "Morocco",
        "flag": "https://cdn.sofifa.net/flags/ma.png",
        "club": "PSV",
        "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
        "attributes" :[ {
            "rating": 83,
            "pace": 89,
            "shooting": 78,
            "passing": 80,
            "dribbling": 86,
            "defending": 55,
            "physical": 84
        }
        ]
    },
    {
        "name": "Gianluigi Donnarumma",
        "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
        "position": "GK",
        "nationality": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "club": "Paris Saint-Germain",
        "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
        "attributes" :[ {
        "rating": 89,
        "diving": 88,
        "handling": 84,
        "kicking": 75,
        "reflexes": 90,
        "speed": 50,
        "positioning": 85
        }]
    }
];

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
function addPlayer() {
    const playerName = document.getElementById('player-name').value;
    const playerPosition = document.getElementById('player-position').value;
    const nationalitySelect = document.getElementById('player-nationality');
    const clubSelect = document.getElementById('player-club');
    const playerRating = document.getElementById('player-rating').value;

    const newPlayer = {
        name: playerName,
        position: playerPosition,
        photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
        nationality: nationalitySelect.value,
        flag: nationalitySelect.options[nationalitySelect.selectedIndex].getAttribute("data-flag-url"),
        club: clubSelect.value,
        logo: clubSelect.options[clubSelect.selectedIndex].getAttribute("data-flag-url"),
        rating : playerRating
    };

    if (playerPosition === 'GK') {
        newPlayer.diving = document.getElementById('gk-diving').value;
        newPlayer.handling = document.getElementById('gk-handling').value;
        newPlayer.kicking = document.getElementById('gk-kicking').value;
        newPlayer.reflexes = document.getElementById('gk-reflexes').value;
        newPlayer.speed = document.getElementById('gk-speed').value;
        newPlayer.positioning = document.getElementById('gk-positioning').value;
        
    } else {
        newPlayer.pace = document.getElementById('player-pace').value;
        newPlayer.shooting = document.getElementById('player-shooting').value;
        newPlayer.passing = document.getElementById('player-passing').value;
        newPlayer.dribbling = document.getElementById('player-dribbling').value;
        newPlayer.defending = document.getElementById('player-defending').value;
        newPlayer.physical = document.getElementById('player-physical').value;
    }

    players.push(newPlayer);
    updatePlayerList();
}

function updatePlayerList() {
    playerList.innerHTML = '';
    players.forEach((player) => {
        // create player card 
        createPlayerCard(player);
    });
}

function createPlayerCard(playerData) {
    // Create card container
    const card = document.createElement('div');
    card.className = 'bg-[url(/img/badge_gold.webp)]  p-4 shadow-md relative flex flex-col items-center';

    // Player Photo
    const playerPhoto = document.createElement('img');
    playerPhoto.src = playerData.photo; // URL of the player's photo
    playerPhoto.alt = `${playerData.name} Photo`;
    playerPhoto.className = 'w-24 h-24 rounded-full mb-2';

    // Nationality Flag
    const nationalityFlag = document.createElement('img');
    nationalityFlag.src = playerData.flag; // URL of the nationality flag
    nationalityFlag.alt = `${playerData.nationality} Flag`;
    nationalityFlag.className = 'w-8 h-8 absolute top-2 right-2';

    // Club Logo
    const clubLogo = document.createElement('img');
    clubLogo.src = playerData.logo; // URL of the club logo
    clubLogo.alt = `${playerData.club} Logo`;
    clubLogo.className = 'w-12 h-12 mb-2';

    // Player Name
    const playerName = document.createElement('h3');
    playerName.className = 'text-xl font-bold text-green-600';
    playerName.textContent = playerData.name;

    // Player Position
    const playerPosition = document.createElement('p');
    playerPosition.className = 'text-sm text-gray-400';
    playerPosition.textContent = playerData.position;

    // Player Rating
    const playerRating = document.createElement('p');
    playerRating.className = 'text-sm text-gray-400';
    playerRating.textContent = `Rating: ${playerData.rating}`;

    // Player Attributes


    // Append elements to card
    card.appendChild(nationalityFlag);
    card.appendChild(playerPhoto);
    card.appendChild(playerName);
    card.appendChild(playerPosition);
    card.appendChild(playerRating);
    card.appendChild(clubLogo);

    // Append card to player list
    playerList.appendChild(card);
}



// document.addEventListener("DOMContentLoaded", updatePlayerList);