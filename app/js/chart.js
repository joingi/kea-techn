var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    data: {
      labels: ['1:00 pm', '4:00 pm', '7:00 pm', '10:00 pm', '1:00 Am', '4:00 Am', '7:00 Am', '10:00 Am'],
      datasets: [{
        label: 'apples',
        data: [2, 5, 3, 11, 6, 13, 17, 12],
        backgroundColor: "#3080FF"
      }, {
        label: 'oranges',
        data: [3, 6, 5, 13, 7, 14, 12, 11],
        backgroundColor: "#3AEBA9"
      }]
    }
});