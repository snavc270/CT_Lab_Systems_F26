const habitsJson = `[
  { "habit": "Drink water", "category": "Health", "streakDays": 12, "completedToday": true },
  { "habit": "Journal", "category": "Mindfulness", "streakDays": 5, "completedToday": false },
  { "habit": "Stretch", "category": "Health", "streakDays": 20, "completedToday": true },
  { "habit": "Read", "category": "Learning", "streakDays": 8, "completedToday": false }
]`;

//Parse the JSON and log a list of just the habit names.

const habits = JSON.parse(habitsJson); 
// console.log(habits); 

// console.log(habits[0].habit); 

habits.forEach(entry => {
    console.log(entry.habit); 
}); 

//habits completed today 
const habitsToday = habits.filter(entry => entry.completedToday === true);
console.log(habitsToday); 

//combined streak length
const combineStreak = habits.reduce((sum, entry) => sum + entry.streakDays, 0);
console.log(combineStreak); 

//compare each habit to the one previous 
const longest = habits.reduce((max, current) => {
    return current.streakDays > max.streakDays ? current : max; 
}, habits[0]); 

console.log(longest.habit); 

// //// more simplified javascript 
// let longest = habits[0]; 

// for (const currentHabit of habits){
//     if(currentHabit.streakDays > longest.streakDays){
//         longest = currentHabit; 
//     }
// }

// console.log(longest); 
