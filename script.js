let subscribers = ""
let video = ""
let subscribedList = document.querySelector(".subscribed-list")
let menuIcon = document.querySelector(".menu-icon")
let sidebar = document.querySelector(".sidebar")
let container = document.querySelector(".container")
let listContainer = document.querySelector(".list-container")
for (let i = 0; i < channels.length; i++) {
    subscribers += `<a href="javascript:void(0)"><img src="${channels[i].image}" alt="${channels[i].name}"><p>${channels[i].name}</p></a>`
}
subscribedList.innerHTML = subscribers

function videoDetail(i) {
    localStorage.setItem("clickedVideo", i)
    for (let i = 0; i < videos.length; i++) {
        console.log(videos[i]);
    }
}

for (let i = 0; i < videos.length; i++) {
    video += `
<div class="vid-list">
    <a href="play-video.html" onclick="videoDetail(${videos[i].id})">
        <img src="${videos[i].image}" alt="thumbnail" class="thumbnail">
    </a>
    <div class="flex-div">
        <img src="${videos[i].image}" alt="jack">
        <div class="vid-info">
            <a href="play-video.html">Best channel to learn coding that help you to be a web developer</a>
            <p>${videos[i].ownerName}</p>
            <p>${videos[i].views.toFixed()} Views &bull; ${videos[i].created}</p>
        </div>
    </div>
</div>`
}

listContainer.innerHTML = video

menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}