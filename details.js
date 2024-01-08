let videoId = JSON.parse(localStorage.getItem("clickedVideo"))
let detailVideo = null
let videoChannel = null


function detailedVideo() {
    for (let i = 0; i < videos.length; i++) {
        if (videoId == videos[i].id) {
            detailVideo = videos[i]
        }
        if (detailVideo != null) {
            for (let j = 0 ; j < channels.length; j++){
                if (detailVideo.channel == channels[j].id) {
                    videoChannel = channels[j]
                }
            }
        }
    }

    let tags = document.querySelector(".tags")
    let title = document.querySelector(".title")
    let likes = document.querySelector(".likes span")
    let dislikes = document.querySelector(".dislikes span")
    let channelName = document.querySelector(".publisher div p")
    let rightSideBar = document.querySelector(".right-sidebar")
    let adviceChannel = null

    console.log(channelName);



    for (let i = 0; i < detailVideo.tags.length; i++){
        let a = document.createElement("a")
        a.setAttribute("href", "#")
        a.innerText = `#${detailVideo.tags[i]}`
        tags.append(a);
    }

    title.innerText = detailVideo.title
    likes.innerText = detailVideo.likes
    dislikes.innerText = detailVideo.dislikes
    channelName.innerText = videoChannel.name

    let adviceVideo = ""
    for (let z = 0; z < videos.length; z++) {
        if (videos[z].id != detailVideo.id) {
            for (let k = 0; k < channels.length; k++){
                if (videos[z].channel == channels[k].id) {
                    adviceChannel = channels[k]
                }
            }
            adviceVideo += `
            <div class="side-video-list">
            <a href="#" class="small-thumbnail">
                <img src="${videos[z].image}" alt="thumbnail">
            </a>
            <div class="vid-info">
                <a href="#">${videos[z].title}</a>
                <p>${adviceChannel.name}</p>
                <p>${videos[z].views} Views</p>
            </div>
        </div>`
        }
    }
    rightSideBar.innerHTML = adviceVideo
}

detailedVideo()


