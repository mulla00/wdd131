const modal = document.getElementById("service-modal");
const modalContent = document.getElementById("modal-details");
const closeModal = document.querySelector(".close-modal");

const serviceData = {
     air: {
          title: "Air Freight",
          content: "Our reliable air freight provides express delivery options, global airport-to-airport services, hazardous goods handling, and temperature controlled options."
     },
     sea: {
          title: "Sea Freight",
          content: "Our cost-effective sea freight provides full container load, less than container load, break bulk and project cargo, and roll-on roll-off services for larger volume of load."
     },
     road: {
          title: "Road Transport",
          content: "Our efficient road transportation provides full truck load, less truck load, oversized cargo transport, and last-mile delivery for domestic shipping."
     },
     rail: {
          title: "Rail Freight",
          content: "Our environmentally friendly rail freight provides intermodal container transport, bulk cargo solution, transcontinental rail services, and green logistics solutions for long-distance shipment."
     },
     warehouse: {
          title: "Warehousing",
          content: "Our secure and flexible warehouse provides short and long-term storage, inventory management, pick and pack services, and distribution center operations to optimize your supply chain."
     },
     customs: {
          title: "Customs Clearance",
          content: "Our expert customs clearance services provide import and export documentation, customs brokerage, duty and tax calculations,  and compliance consulting to help navigate complex international regulations."
     }
};

document.querySelectorAll(".open-modal-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.service;
    const data = serviceDetails[key];

    if (data) {
      modalContent.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
      `;
      modal.style.display = "flex";
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});