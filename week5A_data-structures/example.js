const habitsJson = `[
  { "habit": "Drink water", "category": "Health", "streakDays": 12, "completedToday": true },
  { "habit": "Journal", "category": "Mindfulness", "streakDays": 5, "completedToday": false },
  { "habit": "Stretch", "category": "Health", "streakDays": 20, "completedToday": true },
  { "habit": "Read", "category": "Learning", "streakDays": 8, "completedToday": false }
]`;

const habits = JSON.parse(habitsJson); 

console.log(habitNames); 
console.log(habitNames[0].habit); //logs the first habit 

//only log habits that have been completed today 
const completedToday = habitNames.filter(entry => entry.completedToday === true); 
console.log(completedToday); 

//sum of total streak days 
const totalStreaks = habitNames.reduce((sum, entry) => sum + entry.streakDays, 0); 
console.log(`Total Streak days: ${totalStreaks} days`); 

//find habit with longest streak w/ sort 
const longestStreak = habitNames.sort((a , b) => b.streakDays - a.streakDays); 
console.log(longestStreak[0]);

//compare each habit to the one previous 
const longest = habitNames.reduce((max, current) => {
    return current.streakDays > max.streakDays ? current : max; 
}, habitNames[0]); 

console.log(longest.habit); 

// more simplified javascript 

// let longest = habitNames[0]; 

// for (const currentHabit of habitNames){
//     if(currentHabit.streakDays > longest.streakDays){
//         longest = currentHabit; 
//     }
// }

console.log(longest.habit); 