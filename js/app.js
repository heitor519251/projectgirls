const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //Animate links
    navLinks.forEach((link, index)=>{
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.15}s`;
      }
    });
    // Burger animation
    burger.classList.toggle('toggle');

  });

}

navSlide();

const body = document.querySelector('body');
const items = document.querySelectorAll('.img-container');
const dest = document.querySelectorAll('.dest-container');
const images = document.querySelectorAll('.item-img');
const destImages = document.querySelectorAll('.dest-img');
const imagesText = document.querySelectorAll('.img-text');
const destText = document.querySelectorAll('.dest-text');


const girlsDest = [
  {
    name: "Agatha Moon",
    srcDest: "img/SP/SaoPaulo/02 Dest/AgathaMoon-DEST.jpg",
    a: "",
  },
  {
    name: "Anna Clara",
    srcDest: "img/SP/SaoPaulo/02 Dest/AnnaClara-DEST.jpg",
    a: "",
  },
  {
    name: "Bárbara Gava",
    srcDest: "img/SP/SaoPaulo/02 Dest/BarbaraGava-DEST.jpg",
    a: "",
  },
  {
    name: "Brenda Becker",
    srcDest: "img/SP/SaoPaulo/02 Dest/BrendaBecker-DEST.jpg",
    a: "",
  },
  {
    name: "Caterina Monti",
    srcDest: "img/SP/SaoPaulo/02 Dest/CaterinaMonti-DEST.jpg",
    a: "",
  },
  {
    name: "Cristal NWK",
    srcDest: "img/SP/SaoPaulo/02 Dest/CristalNwk-DEST.jpg",
    a: "",
  },
  {
    name: "Dani Teixeira",
    srcDest: "img/SP/SaoPaulo/02 Dest/DaniTeixeira-DEST.jpg",
    a: "",
  },
  {
    name: "Hayka Castro",
    srcDest: "img/SP/SaoPaulo/02 Dest/HaykaCastro-DEST.jpg",
    a: "",
  },
  {
    name: "Heloisa",
    srcDest: "img/SP/SaoPaulo/02 Dest/Heloisa-DEST.jpg",
    a: "",
  },
  {
    name: "Isabella Ferrari",
    srcDest: "img/SP/SaoPaulo/02 Dest/IsabellaFerrari-DEST.jpg",
    a: "",
  },
  {
    name: "Isis Bellini",
    srcDest: "img/SP/SaoPaulo/02 Dest/IsisBellini-DEST.jpg",
    a: "",
  },
  {
    name: "Lara Ruiva",
    srcDest: "img/SP/SaoPaulo/02 Dest/LaraRuiva-DEST.jpg",
    a: "",
  },
  {
    name: "Larissa Cristal",
    srcDest: "img/SP/SaoPaulo/02 Dest/LarissaCristal-DEST.jpg",
    a: "",
  },
  {
    name: "Laura Pimentel",
    srcDest: "img/SP/SaoPaulo/02 Dest/LauraPimentel-DEST.jpg",
    a: "",
  },
  {
    name: "Letícia Machado",
    srcDest: "img/SP/SaoPaulo/02 Dest/LeticiaMachado-DEST.jpg",
    a: "",
  },
  {
    name: "Luiza Lins",
    srcDest: "img/SP/SaoPaulo/02 Dest/LuizaLins-DEST.jpg",
    a: "",
  },
  {
    name: "Rafa Borges",
    srcDest: "img/SP/SaoPaulo/02 Dest/RafaBorges-DEST.jpg",
    a: "",
  },
  {
    name: "Rayss Telles",
    srcDest: "img/SP/SaoPaulo/02 Dest/RayssaTelles-DEST.jpg",
    a: "",
  },
  {
    name: "Scarlet",
    srcDest: "img/SP/SaoPaulo/02 Dest/Scarlet-DEST.jpg",
    a: "",
  },
  {
    name: "Taina Indiana",
    srcDest: "img/SP/SaoPaulo/02 Dest/TainaIndiana-DEST.jpg",
    a: "",
  },
];

const girlsData = [
  {
      name : "Agatha Moon",
      srcMenu : "img/SP/SaoPaulo/01 Menu/AgathaMoon-MENU.jpg",
      a: "",
  },
  {
      name : "Aline Schwartz",
      srcMenu : "img/SP/SaoPaulo/01 Menu/AlineSchwartz-MENU.jpg",
      a: "",
  },
  {
      name : "Anna Clara",
      srcMenu : "img/SP/SaoPaulo/01 Menu/AnnaClara-MENU.jpg",
      a: "",
  },
  {
      name : "Bárbara Gava",
      srcMenu : "img/SP/SaoPaulo/01 Menu/BarbaraGava-MENU.jpg",
      a: "",
  },
  {
      name : "Brenda Becker",
      srcMenu : "img/SP/SaoPaulo/01 Menu/BrendaBecker-MENU.jpg",
      a: "",
  },
  {
      name : "Caterina Monti",
      srcMenu : "img/SP/SaoPaulo/01 Menu/CaterinaMonti-MENU.jpg",
      a: "",
  },
  {
      name : "Cristal NWK",
      srcMenu : "img/SP/SaoPaulo/01 Menu/CristalNwk-MENU.jpg",
      a: "",
  },
  {
      name : "Dani Teixeira",
      srcMenu : "img/SP/SaoPaulo/01 Menu/DaniTeixeira-MENU.jpg",
      a: "",
  },
  {
      name : "Hayka Castro",
      srcMenu : "img/SP/SaoPaulo/01 Menu/HaykaCastro-MENU.jpg",
      a: "",
  },
  {
      name : "Heloisa",
      srcMenu : "img/SP/SaoPaulo/01 Menu/Heloisa-MENU.jpg",
      a: "",
  },
  {
      name : "Isabella Ferrari",
      srcMenu : "img/SP/SaoPaulo/01 Menu/IsabellaFerrari-MENU.jpg",
      a: "",
  },
  {
      name : "Isis Bellini",
      srcMenu : "img/SP/SaoPaulo/01 Menu/IsisBellini-MENU.jpg",
      a: "",
  },
  {
      name : "Julia Venturinni",
      srcMenu : "img/SP/SaoPaulo/01 Menu/JuliaVenturinni-MENU.jpg",
      a: "",
  },
  {
      name : "Lara Ruiva",
      srcMenu : "img/SP/SaoPaulo/01 Menu/LaraRuiva-MENU.jpg",
      a: "",
  },
  {
      name : "Larissa Cristal",
      srcMenu : "img/SP/SaoPaulo/01 Menu/LarissaCristal-MENU.jpg",
      a: "",
  },
  {
      name : "Laura Pimentel",
      srcMenu : "img/SP/SaoPaulo/01 Menu/LauraPimentel-MENU.jpg",
      a: "",
  },
  {
      name : "Letícia Machado",
      srcMenu : "img/SP/SaoPaulo/01 Menu/LeticiaMachado-MENU.jpg",
      a: "",
  },
  {
      name : "Luiza Lins",
      srcMenu : "img/SP/SaoPaulo/01 Menu/LuizaLins-MENU.jpg",
      a: "",
  },
  {
      name : "Rafa Borges",
      srcMenu : "img/SP/SaoPaulo/01 Menu/RafaBorges-MENU.jpg",
      a: "",
  },
  {
      name : "Rayssa Telles",
      srcMenu : "img/SP/SaoPaulo/01 Menu/RayssaTelles-MENU.jpg",
      a: "",
  },
  {
      name : "Scarlet",
      srcMenu : "img/SP/SaoPaulo/01 Menu/Scarlet-MENU.jpg",
      a: "",
  },
  {
      name : "Taina Indiana",
      srcMenu : "img/SP/SaoPaulo/01 Menu/TainaIndiana-MENU.jpg",
      a: "",
  },
  {
      name : "Thay",
      srcMenu : "img/SP/SaoPaulo/01 Menu/Thay-MENU.jpg",
      a: "",
  },
];

shuffleImages();
shuffleDest();

function shuffleArray(arr) {
  for (let i = arr.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function shuffleDest() {
  shuffleArray(girlsDest);

  const destSrc = girlsDest.map(({ srcDest }) => srcDest);
  const destName = girlsDest.map(({ name }) => name);
  const destPage = girlsDest.map(({ a }) => a);
  const destId = girlsDest.map(({ id }) => id);
  const destIndic = girlsDest.map(({ indic }) => indic);

  for (let i = 0; i < destImages.length; i++) {
    destImages[i].src = destSrc[i];
    destImages[i].alt = destName[i];
    destText[i].textContent = destName[i];
  }

}

function shuffleImages() {
  shuffleArray(girlsData);

  const girlSrc = girlsData.map(({ srcMenu }) => srcMenu);
  const girlName = girlsData.map(({ name }) => name);
  const girlPage = girlsData.map(({ a }) => a);
  const girlId = girlsData.map(({ id }) => id);
  const girlIndic = girlsData.map(({ indic }) => indic);

  for (let i = 0; i < images.length; i++) {
    images[i].src = girlSrc[i];
    images[i].alt = girlName[i];
    imagesText[i].textContent = girlName[i];
  }

}
