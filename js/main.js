const prevImage = document.getElementById("prev");
const nextImage = document.getElementById("next");
const mainImage = document.getElementById("mainImage");
const imagesListHomepage = ["https://picsum.photos/788/561", "https://picsum.photos/789/563", "https://picsum.photos/790/563", "https://picsum.photos/786/561"];

let imageIndex = 0;

//function has argument - because we will have few gallersies, arg is array, each page = different image array
const nextImageChange = (imagesSource) => {
    imageIndex++;

    // when user sees the last image from array, index should be again 0 to loop images and prevent 404
    if (imageIndex == imagesSource.length) {
        imageIndex = 0;
    }
   
    mainImage.src = imagesSource[imageIndex];
}

const prevImageChange = (imagesSource) => {
    imageIndex--;

    // index cannot be -1 , we should loop images what means show the last image in arrray 
    if (imageIndex == -1) {
        imageIndex = imagesSource.length - 1;
    }

    mainImage.src = imagesSource[imageIndex];
}

//swiped-right and swiped-left - e listeners from very light pure-swipe library
nextImage.addEventListener("click", () => nextImageChange(imagesListHomepage))
mainImage.addEventListener("swiped-right", () => nextImageChange(imagesListHomepage))

prevImage.addEventListener("click", () => prevImageChange(imagesListHomepage))
mainImage.addEventListener("swiped-left", prevImageChange(imagesListHomepage))

