
// graph.js
document.getElementById('nav-graph').addEventListener('click', () => {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('graph-page').style.display = 'block';

    const income = parseFloat(document.getElementById('income').value) || 0;
    const loan = parseFloat(document.getElementById('loan').value) || 0;
    const education = parseFloat(document.getElementById('education').value) || 0;
    const travel = parseFloat(document.getElementById('travel').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;

    const ctx = document.getElementById('finance-chart').getContext('2d');

    // Destroy existing chart if it exists
    if (window.myChart) {
        window.myChart.destroy();
    }
    
    
    
    
    // Create a new chart
    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Income', 'Loan', 'Education', 'Travel', 'Rent', 'Food'],
            datasets: [{
                label: 'Amount in USD',
                data: [income, loan, education, travel, rent, food],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
