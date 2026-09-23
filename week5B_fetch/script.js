fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
        const html = data.results
            .filter(person => person.dob.age >= 30)
            .map(person => `
                <div class="profile-card">
                <img src="${person.picture.medium}" alt="${person.name.first}">
                <h3>${person.name.first} ${person.name.last}</h3>
                <p>${person.location.city}, ${person.location.country}</p>
                </div>
            `)
            .join(""); // combine array of strings into one string

        document.getElementById("people-list").innerHTML = html;
    });

//challenge solution 
fetch("https://randomuser.me/api/?results=50")
    .then(response => response.json())
    .then(data => {
        const html = data.results 
            .filter(person => person.location.country == 'United States')
            .map(person => `
               <ul> 
                <li>${person.name.first} ${person.name.last}</li>
                <li>${person.email}</li>
               </ul>

            `)
            .join(""); 
        document.getElementById("people-country-list").innerHTML = html; 
    }); 
