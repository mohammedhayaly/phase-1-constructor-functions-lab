function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

// Driver constructor function
function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// PickupLocation constructor function
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

// Test the constructor functions
const myScooter = new Scooter(2022, "Red", "ABC123");
console.log(myScooter.year); // Output: 2022
console.log(myScooter.color); // Output: Red
console.log(myScooter.model); // Output: ABC123

const driver1 = new Driver("John Doe", 30, 5);
console.log(driver1.name); // Output: John Doe
console.log(driver1.age); // Output: 30
console.log(driver1.experience); // Output: 5

const location1 = new PickupLocation("123 Main St", "New York");
console.log(location1.address); // Output: 123 Main St
console.log(location1.city); // Output: New York
