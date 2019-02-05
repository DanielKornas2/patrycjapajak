require('../style/main.css');
const data = require('../data.json');

const toggleMenu = () => {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const logoLink = document.getElementById("logoLink");
    const infoBox = document.getElementById("infoBox");

    hamburgerMenu.addEventListener("click", () => {
        infoBox.classList.toggle("show");
        logoLink.classList.toggle("whiteColor");
        hamburgerMenu.classList.toggle("whiteColor");
    })
}

const initApp = (currentPageData) => {
    const prevImage = document.getElementById("prev");
    const nextImage = document.getElementById("next");
    const mainImage = document.getElementById("mainImage");

    if (!document.body.classList.contains('homepage')) {

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
        nextImage.addEventListener("click", () => nextImageChange(currentPageData));
        mainImage.addEventListener("swiped-right", () => nextImageChange(currentPageData));

        prevImage.addEventListener("click", () => prevImageChange(currentPageData));
        mainImage.addEventListener("swiped-left", () => prevImageChange(currentPageData));
    }

    toggleMenu();
}


const imagesListXinaliq = data.xinaliq.imagesList;
const imagesListToNieMy1 = data.toniemy1.imagesList;
const imagesListToNieMy2 = data.toniemy2.imagesList;
const imagesListTesknota = data.tesknota.imagesList;

switch (true) {
    case document.body.classList.contains('xinaliq'):
        initApp(imagesListXinaliq);
        break;
    case document.body.classList.contains('toniemy1'):
        initApp(imagesListToNieMy1);
        break;
    case document.body.classList.contains('toniemy2'):
        initApp(imagesListToNieMy2);
        break;
    case document.body.classList.contains('tesknota'):
        initApp(imagesListTesknota);
        break;
    default:
        toggleMenu();
}