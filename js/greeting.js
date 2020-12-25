// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Sire';

// Here you can change your greetings
var gree1 = 'Perfect Day For A Revolution, ';
var gree2 = 'Today Is A Day Of Change... ';
var gree3 = 'Good afternoon, ';
var gree4 = 'The Crops Are Ripe Today, ';
var gree5 = 'The People Wait For Your Word... ';
var gree6 = 'LAY WASTE TO THE MASSES, ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3 + name;
} else  {
    document.getElementById('greetings').innerText = gree4 + name;
}
