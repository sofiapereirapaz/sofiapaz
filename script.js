// CONSTANTS
const roomUL = document.getElementById("roomUL");
const roomUR = document.getElementById("roomUR");
const roomDL = document.getElementById("roomDL");
const roomDR = document.getElementById("roomDR");

const rooms = [roomUL, roomUR, roomDL, roomDR];

//VARIABLES
let projects = [

    {
        "title": "Some Kind of Place",
        "year": "2024",
        "type": "writing and editorial design",
        "covers": ["skopb_3.jpg", "skopb_1.jpg", "skopb_7.jpg"]
    },

    {
        "title": "We think about our century, we wonder what to do with our evening",
        "year": "2021",
        "type": "visual identity and editorial design",
        "covers": ["ce_1.jpg", "ce_2.jpg"]
    },

    {
        "title": "Some Kind of Place",
        "year": "2024",
        "type": "video essay",
        "covers": ["skopv_1.jpg", "skopv_4.jpg", "skopv_3.jpg"]
    },

    {
        "title": "The Parametric Truth Lab Reviews",
        "year": "2024",
        "type": "poster design proposal",
        "covers": ["tptlr_7.jpg", "tptlr_3.jpg"]
    },

    {
        "title": "The Perfect Condition to Rot",
        "year": "2023",
        "type": "video essay and poster design",
        "covers": ["tpctr_1.jpg", "tpctr_6.jpg"]
    }

];

function loadProject(project, room){
    let randomImage = project.covers[(Math.floor(Math.random() * project.covers.length))];
    room.style.backgroundImage = `url(images/${randomImage})`;
    room.innerHTML = '';
    room.insertAdjacentHTML(
        "beforeend",
        `<div class="room_info"><section class="col-50"><h2>${project.title}</h2></section><section class="col-100"><h4>${project.type}<br>${project.year}</h4></section></div>`
    );
}

function shuffle(){
    const shuffledProjects = projects.sort((a, b) => 0.5 - Math.random());
    /*for (let i=0; i<rooms.length; i++){
        loadProject(shuffledProjects[i], rooms[i]);
    }*/
    loadProject(shuffledProjects[0], rooms[0]);
    loadProject(shuffledProjects[1], rooms[1]);
    loadProject(shuffledProjects[2], rooms[3]);
}


document.getElementById('shuffle').addEventListener("click", shuffle);
shuffle();