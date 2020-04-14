console.log("hello");
console.log(residential);

var container = document.getElementById('container-id');
var data = {
        categories: residential.State,
        series: [
            {
                name: '1960',
                data: residential['1960']
            },
            {
                name: '2017',
                data: residential['2017']
            }
        ]
    };
// line chart
tui.chart.lineChart(container, data);