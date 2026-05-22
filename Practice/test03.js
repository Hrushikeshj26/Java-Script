//  Async/Await API

const apiURL = "https://fakestoreapi.com/products";

async function getPremiumElectronics() {
  try {
    // 1. fetching and Data into JSON
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Network response was not okay!");
    } else {
      const data = await response.json();

      // 2. Filter the Data into Category electronic and Price more than 100
      let filteredData = data.filter(
        (item) => item.category == "electronics" && item.price > 100,
      );

      // 3. cleanup filtered Data
      let cleanupData = filteredData.map((item) => {
        return {
          id: item.id,
          productName: item.title,
          price: item.price,
        };
      });

      // 4. Final array console.log
      console.log(cleanupData);
    }
  } catch (error) {
    console.log("Error aa gaya bhai:", error);
  }
}

// Function call
getPremiumElectronics();
