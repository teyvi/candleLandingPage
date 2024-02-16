let listItems = document.getElementsByTagName("li");
console.log(listItems);

for(let i = 0; i < 9; i++) {
    let listItem = listItems[i];

    listItem.onmouseover = function (events){
        listItem.innerHTML = listItem.innerHTML.toUpperCase();
        listItem.style.textDecoration = "underline";
        listItem.style.cursor = "pointer";
    }
    listItem.onmouseout = function (events) {
        listItem.innerHTML = listItem.innerHTML.toLowerCase();
        listItem.style.textDecoration = "none";
        listItem.style.cursor = "grab";
    }



//    plays video 
function openVideoPopup(videoFileName, title) {
    var videoPath = '/asset/videos/' + videoFileName;
    
    document.getElementById('videoFrame').src = videoPath;
    document.getElementById('videoPopupTitle').innerText = title;
    document.getElementById('videoPopup').style.display = 'block';
}

function closeVideoPopup() {
    document.getElementById('videoPopup').style.display = 'none';
    // Pause the video when closing the popup
    var videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
}

