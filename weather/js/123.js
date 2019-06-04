$(document).ready(function() {
    var plotOptions = {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    };
    var series =  [
        {
            // name: 'Tokyo',
            data: [23,25,28,32,31]
        },
        {
            // name: 'New York',
            data: [10,13,15,7,21]
        },
    ];
    Highcharts.setOptions({
        colors: ['#ffc200', '#03ccfb']
    });
    var json = {};
    json.series = series;
    json.plotOptions = plotOptions;
    $('#wrap').highcharts(json);
});