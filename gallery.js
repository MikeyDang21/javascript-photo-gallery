function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Alt text:", previewPic.alt);
    console.log("Image src:", previewPic.src);

    var imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
