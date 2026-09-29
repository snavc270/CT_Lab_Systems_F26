// basic bar graph 
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            { label: 'Steps', data: [8, 6, 9, 7, 10, 12, 5] },
            { label: 'Active Minutes', data: [45, 30, 60, 40, 55, 90, 20] }
        ]
    }
});

//raw JSON data 
const sleepDataJSON = `[
  { "day": "Mon", "hoursSlept": 6.5, "mood": 6 },
  { "day": "Tue", "hoursSlept": 7.0, "mood": 7 },
  { "day": "Wed", "hoursSlept": 5.5, "mood": 4 },
  { "day": "Thu", "hoursSlept": 8.0, "mood": 8 },
  { "day": "Fri", "hoursSlept": 6.0, "mood": 5 },
  { "day": "Sat", "hoursSlept": 9.0, "mood": 9 },
  { "day": "Sun", "hoursSlept": 7.5, "mood": 7 }
]`;

//parse JSON data into js objects 
const sleepData = JSON.parse(sleepDataJSON);

//store data we want to plot into arrays
const days = sleepData.map(entry => entry.day);
const hours = sleepData.map(entry => entry.hoursSlept);
const moods = sleepData.map(entry => entry.mood);

//create the chart we want to see 
new Chart(document.getElementById('sleepChart'), {
    type: 'line',   // changes chart to a line graph 
    data: {
        labels: days,
        //plots two sets of data for us 
        datasets: [
            {
                label: 'Hours Slept',
                data: hours,
                backgroundColor: 'rgba(99, 102, 241, 0.6)',   // bar fill / point fill
                borderColor: 'rgb(99, 102, 241)',             // line / border color
                borderWidth: 2,
                tension: 0.3   // (line charts only) — curves the line instead of sharp angles
            },
            { label: 'Mood', data: moods }

        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'top' },
            tooltip: { enabled: true },
            title: { display: true, text: 'Sleep This Week' }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

