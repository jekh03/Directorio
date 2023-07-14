function showContent(id) {
  // Oculta todo el contenido
  document.getElementById("entretenimiento").classList.add("Encabezado");
  document.getElementById("educacion").classList.add("Encabezado");
  document.getElementById("deportes").classList.add("Encabezado");
  document.getElementById("ai").classList.add("Encabezado");
  document.getElementById("otros").classList.add("Encabezado");

  if (id === 'inicio') {
    document.querySelector(".Inicio").classList.remove("Encabezado");
  } else {
    document.querySelector(".Inicio").classList.add("Encabezado");
    document.getElementById(id).classList.remove("Encabezado");
  }
}

function mostrarInformacion(img) {
  var overlay = img.nextElementSibling;
  var imageInfo = overlay.nextElementSibling;
  
  var allOverlays = document.getElementsByClassName("overlay");
  var allImageInfos = document.getElementsByClassName("image-info");
  
  // Ocultar todas las informaciones y overlays
  for (var i = 0; i < allOverlays.length; i++) {
    allOverlays[i].style.display = "none";
    allImageInfos[i].style.display = "none";
  }
  
  overlay.style.display = "block";
  imageInfo.style.display = "block";
  
  overlay.onclick = function() {
    overlay.style.display = "none";
    imageInfo.style.display = "none";
  };
}

//ANIMACION DE BOLTEAR TARJETA
let timeoutId = null;

function mostrarInformacion(elemento) {
  clearTimeout(timeoutId);

  const flipCardInner = elemento.querySelector('.flip-card-inner');
  const isFlipped = flipCardInner.style.transform === 'rotateY(180deg)';

  if (isFlipped) {
    flipCardInner.style.transform = 'rotateY(0deg)';
    elemento.parentNode.classList.remove('clicked');
  } else {
    flipCardInner.style.transform = 'rotateY(180deg)';
    elemento.parentNode.classList.add('clicked');
    timeoutId = setTimeout(() => {
      flipCardInner.style.transform = 'rotateY(0deg)';
      elemento.parentNode.classList.remove('clicked');
    }, 5000);
  }
}


  