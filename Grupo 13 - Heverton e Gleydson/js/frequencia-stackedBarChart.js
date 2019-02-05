function frequencia_stackedBarChart(ctx) {

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [{
                label: 'Aluno',
                data: [95, 90, 100, 80, 75, 80, 75, 90, 95, 85, 95, 90],
                backgroundColor: [
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)',
                    'rgba(186, 155, 231, 0.2)'
                ],
                borderColor: [
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)',
                    'rgba(186, 155, 231, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Total',
                data: [5, 10, 0, 20, 25, 20, 25, 10, 5, 15, 5, 10],
                backgroundColor: [
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)',
                    'rgba(164, 215, 253, 0.2)'
                ],
                borderColor: [
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                    'rgba(164, 215, 253,1)',
                ],
                borderWidth: 1
            }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]

            },
            title: {
                display: true,
                text: 'Frequência'
            }
        }
    });

}