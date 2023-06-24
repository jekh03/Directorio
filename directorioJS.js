document.querySelector(".search").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar envío del formulario

  var searchTerm = document.getElementById("search-input").value.toLowerCase();
  var paragraphs = document.getElementsByTagName("p"); // Cambia "p" por el elemento donde deseas buscar

  var searchResults = document.getElementById("search-results");
  searchResults.innerHTML = ""; // Limpiar resultados anteriores

  var hasResults = false; // Variable para verificar si se encontraron resultados

  for (var i = 0; i < paragraphs.length; i++) {
    var paragraphText = paragraphs[i].textContent.toLowerCase();

    if (paragraphText.includes(searchTerm)) {
      var result = document.createElement("p");
      result.textContent = paragraphs[i].textContent.trim();
      searchResults.appendChild(result);
      hasResults = true;
    }
  }

  if (!hasResults) {
    var noResults = document.createElement("p");
    noResults.textContent = "No se encontraron resultados.";
    searchResults.appendChild(noResults);
  }
});



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
  
  