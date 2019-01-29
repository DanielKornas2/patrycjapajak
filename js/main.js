const prevImage = document.getElementById("prev");
const nextImage = document.getElementById("next");
const mainImage = document.getElementById("mainImage");
const imagesList = ["https://picsum.photos/788/561", "https://picsum.photos/789/563", "https://picsum.photos/790/563", "https://picsum.photos/786/561"];

let imageIndex = 0;

nextImage.addEventListener("click", () => {
    imageIndex++;
    if (imageIndex == imagesList.length) {
        imageIndex = 0;
    }
    console.log(imageIndex)
    mainImage.src = imagesList[imageIndex];
})

prevImage.addEventListener("click", () => {
    imageIndex--;
    if (imageIndex == -1) {
        imageIndex = imagesList.length - 1;
    }
    console.log(imageIndex)

    mainImage.src = imagesList[imageIndex];
})