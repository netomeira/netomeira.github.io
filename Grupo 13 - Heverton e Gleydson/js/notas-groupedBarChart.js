function notas_groupedBarChart(ctx) {

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Dir Adm","Dir Cons","Intr Dir","Dir Civ","Socio","Filos"],
            datasets: [
                {
                    label: "Aluno",
                    backgroundColor: "#3e95cd",
                    data: [9, 9.3, 8, 7.5, 8.3, 10]
                }, {
                    label: "Turma",
                    backgroundColor: "#8e5ea2",
                    data: [8, 8.5, 7.8, 7, 10, 9.2]
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: false,
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    stacked: false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: 'Notas - 2º Período - 2018.1'
            }
        }
    });

}