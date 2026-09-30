const drinkData = `[
    { "Name": "Sia", "drink": "Coffee", "cupAmount": 2 },
    { "Name": "Jamie", "drink": "Matcha", "cupAmount": 5},
    { "Name": "Bianca", "drink": "Coffee", "cupAmount": 2},
    { "Name": "Olivia", "drink": "Soda", "cupAmount": 10},
    { "Name": "Lakshita", "drink": "Coffee", "cupAmount": 4},
    { "Name": "I", "drink": "Tea", "cupAmount": 4},
    { "Name": "Kaylen", "drink": "Boba", "cupAmount": 7},
    { "Name": "Courtney", "drink": "Coffee", "cupAmount": 4},
    { "Name": "Shazia", "drink": "Matcha", "cupAmount": 3},
    { "Name": "Melanie", "drink": "Soda", "cupAmount": 7},
    { "Name": "Mannat", "drink": "Coffee", "cupAmount": 9},
    { "Name": "Krista", "drink": "Boba", "cupAmount": 5},
    { "Name": "Ana", "drink": "Tea", "cupAmount": 1},
    { "Name": "Bruno", "drink": "Tea", "cupAmount": 6},
    { "Name": "Eva", "drink": "Boba", "cupAmount": 4},
    { "Name": "Melinda", "drink": "Matcha", "cupAmount": 8}
]`;;

//transform our JSON into js array 
const students = JSON.parse(drinkData);

//create a variable to store unique drink values 
// const drinks = [...new Set(students.map(s => s.drink))];
// console.log(drinks); 

// OR 
const allDrinks = students.map(s => s.drink);

//only stores the unique drink values
const drinks = allDrinks.filter((drink, index) => {
  return allDrinks.indexOf(drink) === index;
});

const colors = [
  "red", "orange", "gold", "green", "teal", "blue", "purple", "pink",
  "brown", "gray", "navy", "olive", "coral", "salmon", "violet", "crimson"
];

const datasets = [];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const studentData = [];

  for (const drink of drinks) {
    if (drink === student.drink) {
      studentData.push(student.cupAmount);
    } else {
      studentData.push(0);
    }
  }

  datasets.push({
    label: student.Name,
    data: studentData,
    backgroundColor: colors[i]
  });
}
// OR
// use nested .map functions instead of nested for loop; each student is it's own dataset 
// const datasets = students.map((s, i) => ({
//   label: s.Name,
//   // 0 everywhere except this student's drink
//   data: drinks.map(d => (d === s.drink ? s.cupAmount : 0)),
//   backgroundColor: `hsl(${(i * 360) / students.length}, 70%, 60%)`
// }));

// 4. Build the chart
const ctx = document.getElementById('drinkCanvas');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: drinks,
    datasets: datasets
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      title: { display: true, text: 'Drinks per day, by type and student' }
    },
    scales: {
      x: { stacked: true, title: { display: true, text: 'Type of drink' } },
      y: { stacked: true, title: { display: true, text: 'Number of drinks' } }
    }
  }
});