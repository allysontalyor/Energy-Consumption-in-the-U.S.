var container = document.getElementById('plot');
var data = d3.csv("cleaned_energy_source_state.csv").then(function(energyData) {
    
    console.log(energyData);

    d3.selectAll("#selDataset").on("change", getEnergy);
    
    function getEnergy() {
        //chart.destroy()
        var chart = tui.chart
        //chart.destroy();

        //define the dropdown menu
        var dropdownMenu = d3.select("#selDataset");
  
        // Assign the value of the dropdown menu option to a variable
        var energy_type = dropdownMenu.property("value");
        console.log(energy_type);

        //calculate total energy

        var energyTypeData = energyData.filter(data => data.MSN == energy_type);
        console.log(energy_type);
        var seventeenEnergy = energyTypeData.map(energy => energy["2017"]);
        console.log(seventeenEnergy);
        var ak = seventeenEnergy[0]-0;
        console.log(ak);
        var al = seventeenEnergy[1]-0;
        var ar = seventeenEnergy[2]-0;
        var az = seventeenEnergy[3]-0;
        var ca = seventeenEnergy[4]-0;
        var co = seventeenEnergy[5]-0;
        var ct = seventeenEnergy[6]-0;
        var dc = seventeenEnergy[7]-0;
        var de = seventeenEnergy[8]-0;
        var fl = seventeenEnergy[9]-0;
        var ga = seventeenEnergy[10]-0;
        var hi = seventeenEnergy[11]-0;
        var ia = seventeenEnergy[12]-0;
        var id = seventeenEnergy[13]-0;
        var il = seventeenEnergy[14]-0;
        var ind = seventeenEnergy[15]-0;
        var ks = seventeenEnergy[16]-0;
        var ky = seventeenEnergy[17]-0;
        var la = seventeenEnergy[18]-0;
        var ma = seventeenEnergy[19]-0;
        var md = seventeenEnergy[20]-0;
        var me = seventeenEnergy[21]-0;
        var mi = seventeenEnergy[22]-0;
        var mn = seventeenEnergy[23]-0;
        var mo = seventeenEnergy[24]-0;
        var ms = seventeenEnergy[25]-0;
        var mt = seventeenEnergy[26]-0;
        var nc = seventeenEnergy[27]-0;
        var nd = seventeenEnergy[28]-0;
        var ne = seventeenEnergy[29]-0;
        var nh = seventeenEnergy[30]-0;
        var nj = seventeenEnergy[31]-0;
        var nm = seventeenEnergy[32]-0;
        var nv = seventeenEnergy[33]-0;
        var ny = seventeenEnergy[34]-0;
        var oh = seventeenEnergy[35]-0;
        var ok = seventeenEnergy[36]-0;
        var or = seventeenEnergy[37]-0;
        var pa = seventeenEnergy[38]-0;
        var ri = seventeenEnergy[39]-0;
        var sc = seventeenEnergy[40]-0;
        var sd = seventeenEnergy[41]-0;
        var tn = seventeenEnergy[42]-0;
        var tx = seventeenEnergy[43]-0;
        var us = seventeenEnergy[44]-0;
        var ut = seventeenEnergy[45]-0;
        var va = seventeenEnergy[46]-0;
        var vt = seventeenEnergy[47]-0;
        var wa = seventeenEnergy[48]-0;
        var wi = seventeenEnergy[49]-0;
        var wv = seventeenEnergy[50]-0;
        var wy = seventeenEnergy[51]-0;

        var data = {
            series: [
                {
                    code: 'US-AK',
                    data: ak
                },
                {
                    code: 'US-AL',
                    data: al
                },
                {
                    code: 'US-AR',
                    data: ar
                },
                {
                    code: 'US-AZ',
                    data: az
                },
                {
                    code: 'US-CA',
                    data: ca
                },
                {
                    code: 'US-CO',
                    data: co
                },
                {
                    code: 'US-CT',
                    data: ct
                },
                {
                    code: 'US-DC',
                    data: dc
                },
                {
                    code: 'US-DE',
                    data: de
                },
                {
                    code: 'US-FL',
                    data: fl
                },
                {
                    code: 'US-GA',
                    data: ga
                },
                {
                    code: 'US-HI',
                    data: hi
                },
                {
                    code: 'US-IA',
                    data: ia
                },
                {
                    code: 'US-ID',
                    data: id
                },
                {
                    code: 'US-IL',
                    data: il
                },
                {
                    code: 'US-IN',
                    data: ind
                },
                {
                    code: 'US-KS',
                    data: ks
                },
                {
                    code: 'US-KY',
                    data: ky
                },
                {
                    code: 'US-LA',
                    data: la
                },
                {
                    code: 'US-MA',
                    data: ma
                },
                {
                    code: 'US-MD',
                    data: md
                },
                {
                    code: 'US-ME',
                    data: me
                },
                {
                    code: 'US-MI',
                    data: mi
                },
                {
                    code: 'US-MN',
                    data: mn
                },
                {
                    code: 'US-MO',
                    data: mo
                },
                {
                    code: 'US-MS',
                    data: ms
                },
                {
                    code: 'US-MT',
                    data: mt
                },
                {
                    code: 'US-NC',
                    data: nc
                },
                {
                    code: 'US-ND',
                    data: nd
                },
                {
                    code: 'US-NE',
                    data: ne
                },
                {
                    code: 'US-NH',
                    data: nh
                },
                {
                    code: 'US-NJ',
                    data: nj

                },
                {
                    code: 'US-NM',
                    data: nm
                },
                {
                    code: 'US-NV',
                    data: nv
                },
                {
                    code: 'US-NY',
                    data: ny
                },
                {
                    code: 'US-OH',
                    data: oh
                },
                {
                    code: 'US-OK',
                    data: ok
                },
                {
                    code: 'US-OR',
                    data: or
                },
                {
                    code: 'US-PA',
                    data: pa
                },
                {
                    code: 'US-RI',
                    data: ri
                },
                {
                    code: 'US-SC',
                    data: sc
                },
                {
                    code: 'US-SD',
                    data: sd
                },
                {
                    code: 'US-TN',
                    data: tn
                },
                {
                    code: 'US-TX',
                    data: tx
                },
                {
                    code: 'US-UT',
                    data: ut
                },
                {
                    code: 'US-VA',
                    data: va
                },
                {
                    code: 'US-VT',
                    data: vt
                },
                {
                    code: 'US-WA',
                    data: wa
                },
                {
                    code: 'US-WI',
                    data: wi
                },
                {
                    code: 'US-WV',
                    data: wv
                },
                {
                    code: 'US-WY',
                    data: wy
                }
            ]
        };
        var options = {
            chart: {
                width: 900,
                height: 700,
                title: 'Percent Energy Consumption'
            },
            map: 'usa',
            legend: {
                align: 'bottom'
            },
            tooltip: {
                //suffix: '°C'
            }
        };
        var theme = {
            series: {
                startColor: '#ffefef',
                endColor: '#ac4142',
                overColor: '#75b5aa',
                borderColor: '#F4511E'
            }
        };

        // For apply theme

        // tui.chart.registerTheme('myTheme', theme);
        // options.theme = 'myTheme';
        //var chart = tui.chart
        tui.chart.mapChart(container, data, options);



    };//this bracket closes function getEnergy

});//this bracket closes the d3 call to the csv