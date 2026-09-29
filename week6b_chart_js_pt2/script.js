//fetch data from Citi Bikes
async function getBikeData() {
    const [statusRes, infoRes] = await Promise.all([
        fetch('https://gbfs.citibikenyc.com/gbfs/en/station_status.json'),
        fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
    ]);

    //await acts the same way as .then() here
    const statusData = await statusRes.json();
    const infoData = await infoRes.json();

    return {
        statuses: statusData.data.stations,
        infos: infoData.data.stations,
        ttl: statusData.ttl // seconds until this data may be stale — used later
    };
}

//joins data into a single javascript object based on station id
function joinStationData(statuses, infos) {
    return statuses.map(status => {
        const info = infos.find(i => i.station_id === status.station_id);
        return {
            id: status.station_id,
            name: info ? info.name : 'Unknown Station',
            bikesAvailable: status.num_bikes_available,
            docksAvailable: status.num_docks_available,
            isRenting: status.is_renting === 1
        };
    });
}

let bikeChart; // declared outside so it persists across calls

async function renderChart() {
    const { statuses, infos, ttl } = await getBikeData();
    const joined = joinStationData(statuses, infos);

    const topStations = joined
        .filter(station => station.isRenting)
        .sort((a, b) => b.bikesAvailable - a.bikesAvailable)
        .slice(0, 10);

    const names = topStations.map(s => s.name);
    const bikes = topStations.map(s => s.bikesAvailable);
    const docks = topStations.map(s => s.docksAvailable);

    if (bikeChart) {
        // chart already exists — update its data instead of making a new one
        bikeChart.data.labels = names;
        bikeChart.data.datasets[0].data = bikes;
        bikeChart.update();
    } else {
        // first time — create the chart
        bikeChart = new Chart(document.getElementById('bikeChart'), {
            type: 'bar',
            data: {
                labels: names,
                datasets: [
                    { label: 'Bikes Available', data: bikes },
                    { label: 'Docks Available', data: docks }
                ]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    // show when this refresh happened
    document.getElementById('lastUpdated').textContent =
        `Last updated: ${new Date().toLocaleTimeString()}`;

    // schedule the NEXT refresh based on how long this data is valid for,
    // rather than an arbitrary fixed number
    setTimeout(renderChart, ttl * 1000);
}

renderChart();