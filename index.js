// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
function writeCards(names, eventName) {
    const thankYouMessages = []; // Step 1: Create an empty array to hold the messages
    
    for (let i = 0; i < names.length; i++) { // Step 2: Iterate over the names array
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // Step 3: Create the message using string interpolation
      thankYouMessages.push(message); // Step 4: Add the message to the thankYouMessages array
    }
    
    return thankYouMessages; // Step 5: Return the array of messages
  }
  
  // Example usage:
  const names = ["Alice", "Bob", "Charlie"];
  const eventName = "birthday";
  const messages = writeCards(names, eventName);
  console.log(messages);
  

function countDown(num) {
  while (num >= 0) {
    console.log(num); // Log the current number
    num--; // Decrement the number by 1
  }
}

// Example usage:
countDown(10);