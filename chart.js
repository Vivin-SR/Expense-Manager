const generate=document.getElementById("submit");
let amt=document.getElementById("ibox");
let housing=((amt/100));
console.log(housing);
// const workAmt = parseInt(documnet.getElementById("").value)


google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(create());
      function create(){
    
        var data = google.visualization.arrayToDataTable([
          ['INCOME', 'EXPENSE'],
          ['SAVINGS', 20  ],
          ['FOOD',      25],
          ['CLOTHING',  15],
          ['ENTERTAINMENT', 10],
          ['RENT&INSURANCE',    15],
          ['MEDICAL', 10],
          ['TRANSPORTATION',5]
        ]);

        var options = {
          title: 'BUDGET EQUALISER',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
    }