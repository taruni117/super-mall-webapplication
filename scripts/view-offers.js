import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  databaseURL: "https://supermall-72728-default-rtdb.firebaseio.com/",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the 'offers' collection
const offersRef = ref(database, "offers");

// DOM Element to display offers
const offersListElement = document.getElementById("offers-list");

// Function to Fetch and Display Offers
function displayOffers() {
  onValue(offersRef, (snapshot) => {
    offersListElement.innerHTML = ""; // Clear existing content

    if (snapshot.exists()) {
      const offers = snapshot.val();

      Object.values(offers).forEach((offer) => {
        const offerElement = document.createElement("div");
        offerElement.className = "offer-item";
        offerElement.innerHTML = `
          <p><strong>Shop Name:</strong> ${offer.shopName}</p>
          <p><strong>Offer Ends On:</strong> ${offer.offerEndDate}</p>
          <p><strong>Details:</strong> ${offer.details}</p>
        `;
        offersListElement.appendChild(offerElement);
      });
    } else {
      offersListElement.innerHTML = "<p>No offers available at the moment.</p>";
    }
  }, (error) => {
    console.error("Error fetching offers:", error);
    offersListElement.innerHTML = "<p>Failed to load offers. Please try again later.</p>";
  });
}

// Call the function to display offers
displayOffers();
