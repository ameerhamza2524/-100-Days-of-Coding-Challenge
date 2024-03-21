// Array of places
let places: string[] = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "New York"];

// Print original array
console.log("Original Order:");
console.log(places);

// Print array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...places].sort());

// Check original order
console.log("\nOriginal Order After Alphabetical Sort:");
console.log(places);

// Print array in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order:");
console.log([...places].sort().reverse());

// Check original order
console.log("\nOriginal Order After Reverse Alphabetical Sort:");
console.log(places);

// Reverse the order of the list
places.reverse();
console.log("\nReversed Order:");
console.log(places);

// Reverse the order again to get back to the original order
places.reverse();
console.log("\nBack to Original Order:");
console.log(places);

// Sort the array in alphabetical order
places.sort();
console.log("\nSorted Alphabetically:");
console.log(places);

// Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(places);
