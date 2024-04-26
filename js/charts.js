document.addEventListener('DOMContentLoaded', function () {
    var barData = [20, 25, 15];
    var lineData = [6, 8, 12];
    var pieData = [200, 150, 100];

    var ctxBar = document.getElementById('priceChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Pfizer', 'Moderna', 'AstraZeneca'],
            datasets: [{
                label: 'Price in $',
                data: barData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ]
            }]
        },
        options: {
            scales: { y: { beginAtZero: true } }
        }
    });

    var ctxLine = document.getElementById('effectivenessChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Pfizer', 'Moderna', 'AstraZeneca'],
            datasets: [{
                label: 'Effectiveness in Months',
                data: lineData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                fill: true
            }]
        },
        options: {
            scales: { y: { beginAtZero: true } }
        }
    });

    var ctxPie = document.getElementById('usageChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Pfizer', 'Moderna', 'AstraZeneca'],
            datasets: [{
                label: 'Number of People Used',
                data: pieData,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }]
        }
    });
});
