// Create arrays of brand images
const brandImages1 = [
    'Serviced Brands/admiral.png',
    'Serviced Brands/amana.png',
    'Serviced Brands/bosch.png', 
    'Serviced Brands/caloric.png',
    'Serviced Brands/dacor.png',
    'Serviced Brands/electrolux.png',
    'Serviced Brands/estate.png',
    'Serviced Brands/frigidare.png',
    'Serviced Brands/gaffers&sattler.jpg',
    'Serviced Brands/ge.png',
    'Serviced Brands/hotpoint.png',
    'Serviced Brands/insinkerator.png', 
    'Serviced Brands/jenn air.png', 
    'Serviced Brands/kenmore.png'
];

const brandImages2 = [
    'Serviced Brands/kirkland.png',
    'Serviced Brands/kitchen aid.png',
    'Serviced Brands/lg.png', 
    'Serviced Brands/magicCheif.svg',
    'Serviced Brands/maytag.png',
    'Serviced Brands/roper.png',
    'Serviced Brands/samsung.png',
    'Serviced Brands/sub zero.png',
    'Serviced Brands/tappan.gif',
    'Serviced Brands/thermador.png',
    'Serviced Brands/uline.png',
    'Serviced Brands/viking.png', 
    'Serviced Brands/whirlpool.png', 
    'Serviced Brands/wolf.png'
];

// Get the brand images container element
const brandImagesContainer = document.querySelector('.brand-images-container');

// Get the two sets of brand images
const brandImages1Container = brandImagesContainer.querySelector('.brand-images-1');
const brandImages2Container = brandImagesContainer.querySelector('.brand-images-2');

// Set the initial brand images
brandImages1.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    brandImages1Container.appendChild(img);
});

// Set an interval to switch between the two sets of brand images
let index = 0;
setInterval(() => {
    if (index % 2 === 0) {
        brandImages1Container.style.opacity = 0;
        brandImages2Container.style.opacity = 1;
    } else {
        brandImages1Container.style.opacity = 1;
        brandImages2Container.style.opacity = 0;
    }
    index++;
}, 2000);

const brands = [
    "admiral.png",
    "amana.png",
    "bosch.png", 
    "caloric.png",
    "dacor.png",
    "electrolux.png",
    "estate.png",
    "frigidare.png",
    "gaffers&sattler.jpg",
    "ge.png",
    "hotpoint.png",
    "insinkerator.png", 
    "jenn air.png", 
    "kenmore.png",
    "kirkland.png",
    "kitchen aid.png",
    "lg.png", 
    "magicCheif.svg",
    "maytag.png",
    "roper.png",
    "samsung.png",
    "sub zero.png",
    "tappan.gif",
    "thermador.png",
    "uline.png",
    "viking.png", 
    "whirlpool.png", 
    "wolf.png"
];

let currentBrandIndex = 0;
const brandElements = document.querySelectorAll('.brand');

function showNextBrands() {
    for (let i = 0; i < brandElements.length; i++) {
        brandElements[i].src = "Serviced Brands/" + brands[currentBrandIndex];
        currentBrandIndex = (currentBrandIndex + 1) % brands.length;
    }
    brandImagesContainer.classList.toggle('animate');
}
    
showNextBrands(); // Show initial brands
setInterval(showNextBrands, 2000); // Show next brands every 2 seconds