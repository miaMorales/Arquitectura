
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

function unidad1Boton(){
  window.location.href = "../html/unidad1.html";
}

function unidad2Boton(){
  window.location.href = "../html/unidad2.html";
}

function unidad3Boton(){
  window.location.href = "../html/unidad3.html";
}

function unidad4Boton(){
  window.location.href = "../html/unidad4.html";
}

function practicas(){
  window.location.href = "../html/practicas.html";
}

function boton1Arquitecturas(){
  if(document.getElementById("boton1").style.display == "none"){
    document.getElementById("boton1").style.display = "block";
    document.getElementById("boton2").style.display = "none";
    document.getElementById("boton3").style.display = "none";
    document.getElementById("boton4").style.display = "none";
    document.getElementById("boton5").style.display = "none";
  }
}

function boton2Memorias(){
  if(document.getElementById("boton2").style.display == "none"){
    document.getElementById("boton2").style.display = "block";
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton3").style.display = "none";
    document.getElementById("boton4").style.display = "none";
    document.getElementById("boton5").style.display = "none";
  }
}

function boton3ES(){
  if(document.getElementById("boton3").style.display == "none"){
    document.getElementById("boton3").style.display = "block";
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "none";
    document.getElementById("boton4").style.display = "none";
    document.getElementById("boton5").style.display = "none";
}
}

function boton4Buses(){
  if(document.getElementById("boton4").style.display == "none"){
    document.getElementById("boton4").style.display = "block";
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "none";
    document.getElementById("boton3").style.display = "none";
    document.getElementById("boton5").style.display = "none";
  }
}

function boton5Interrupciones(){
  if(document.getElementById("boton5").style.display == "none"){
    document.getElementById("boton5").style.display = "block";
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "none";
    document.getElementById("boton3").style.display = "none";
    document.getElementById("boton4").style.display = "none";
  }
}

function practica1(){
  window.location.href = "https://drive.google.com/file/d/1wCmh89It4Mn7LZxNhMfPahsIdFqTBXgg/view?usp=share_link";
}

function practica2(){
  window.location.href = "https://drive.google.com/file/d/1atLc7y-mgtb3fNv3HUZklrQhEilrsNeX/view?usp=share_link";
}

function practica3(){
  window.location.href = "https://drive.google.com/file/d/1widu9YApKR7n48SdI5h_Dc-Ww1sl2eCw/view?usp=share_link";
}

function gamas(){
  window.location.href = "https://drive.google.com/file/d/1mcmiUR40KVMHQl4CKOMhVfgL163dSBso/view?usp=share_link";
}

function disenio(){
  window.location.href = "https://drive.google.com/file/d/1Og8hgi3sLX24whNTAYvQteAioXHPCu4J/view?usp=share_link";
}

function cotizacion(){
  window.location.href = "https://drive.google.com/file/d/1rnxJv0kPFspf3wp9l4PWW4up_9Ua-fsR/view?usp=share_link";
}