// Așteaptă ca documentul să se încarce complet
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector(".search-form"); // Selectează formularul de căutare
    const productList = document.querySelector(".product-list"); // Selectează lista de produse
    
    // Adaugă un ascultător pentru evenimentul de submit al formularului de căutare
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Oprire comportamentului implicit de submit
  
      const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase(); // Obține termenul de căutare și elimină spațiile inutile și convertește în litere mici
  
      // Iterează prin fiecare element de produs și afișează doar cele care conțin termenul de căutare în titlu
      const products = document.querySelectorAll(".product-item");
      products.forEach(function(product) {
        const title = product.querySelector(".card-title").innerText.toLowerCase(); // Obține titlul produsului în litere mici
  
        // Verifică dacă titlul produsului conține termenul de căutare
        if (title.includes(searchTerm)) {
          product.style.display = "block"; // Afișează produsul
        } else {
          product.style.display = "none"; // Ascunde produsul dacă nu corespunde căutării
        }
      });
    });
  });
  