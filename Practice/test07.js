// Async Await with resolve/reject


function fetchUserProfile() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve({ 
        name: "Hrushikesh", 
        role: "Frontend Developer", 
        location: "Belgaum" 
      });
    }, 2000);

  });
}

async function displayUser() {
    try {

        let userData = await fetchUserProfile();
        let {name, role, location} = userData;

        console.log(`Welcome ${name}, ${role} from ${location}.`);

    } catch (error) {
        
        console.log('Error fetching data');
        
    }
}

displayUser();