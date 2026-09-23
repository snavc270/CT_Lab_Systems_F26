const screenTimeJson = `[
  { "app": "Messages", "sessions": 14, "avgMinutes": 3 },
  { "app": "Instagram", "sessions": 10, "avgMinutes": 9.5 },
  { "app": "Spotify", "sessions": 5, "avgMinutes": 26 },
  { "app": "Email", "sessions": 9, "avgMinutes": 2 }
]`;

const screenTime = JSON.parse(screenTimeJson);

// Task 1: total minutes per app
//loop through every app in our JSON and store total minutes per app in an array
const appTotals = screenTime.map(entry => ({
//create a property called 'app' and put 'Messages' , 'Instagram', etc. in it
  app: entry.app,
  totalMinutes: entry.sessions * entry.avgMinutes
}));
console.log(appTotals);
// Messages: 42, Instagram: 95, Spotify: 130, Email: 18

// Task 2: which apps ate more than an hour this week?
const heavyApps = appTotals.filter(entry => entry.totalMinutes > 60);
console.log(heavyApps);
// Only Spotify (130) and Instagram (95) pass — Messages and Email don't

// Task 3: total screen time across all apps
const grandTotal = appTotals.reduce((sum, app) => sum + app.totalMinutes, 0);
console.log(`Total screen time: ${grandTotal} minutes`); // 285 minutes