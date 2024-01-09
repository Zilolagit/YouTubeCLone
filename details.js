let videoId = JSON.parse(localStorage.getItem("clickedVideo"))
let detailVideo = null
let videoChannel = null
let oldComments = document.querySelector(".old-comments")
let commentNew = ""
let commentCount = document.querySelector(".comment-count")

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

    for (let i = 0 ; i < detailVideo.comments.length; i++) {
        commentNew += `
        <div class="old-comment">
        <img src="${detailVideo.comments[i].image}" alt="jack">
        <div>
            <h3>${detailVideo.comments[i].name} <span>${detailVideo.comments[i].created}</span></h3>
            <p>${detailVideo.comments[i].text}</p>
            <div class="comment-action">
                <img src="images/like.png" alt="like">
                <span>${detailVideo.comments[i].likes}</span>
                <img src="images/dislike.png" alt="dislike">
                <span>${detailVideo.comments[i].dislikes}</span>
                <span>REPLY</span>
                <a href="#">All Replies</a>
            </div>
        </div>
    </div>
    `
}

    oldComments.innerHTML = commentNew

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


    let vidH4 = document.createElement("h4")
    vidH4.innerText = `${detailVideo.comments.length} Comments`
    commentCount.append(vidH4)

    console.log();
    let vidP;
    let descArray = detailVideo.desc.split(". ")
    for (let i =0; i < descArray.length; i++) {
        vidP = document.createElement("p")
        vidP.innerText = descArray[i]
        commentCount.append(vidP)
    }
}

detailedVideo()


