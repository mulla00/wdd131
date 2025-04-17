// Product array to populate the select options
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

// Populate the select element with product options
const productSelect = document.getElementById("product");
products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Use localStorage to track the number of reviews
window.onload = function () {
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);
  console.log(`Total reviews submitted: ${reviewCount}`);
};

// Star rating system
const stars = document.querySelectorAll('.rating label');

stars.forEach(star => {
    star.addEventListener('click', function() {
        stars.forEach(s => s.style.color = "#999"); // Reset all stars
        this.style.color = "#FFD700"; // Highlight selected star
        let prev = this.previousElementSibling;
        while (prev) {
            prev.style.color = "#FFD700"; // Highlight previous stars
            prev = prev.previousElementSibling;
        }
    });
});