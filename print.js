
// print.js
document.getElementById('nav-print').addEventListener('click', () => {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const loan = parseFloat(document.getElementById('loan').value) || 0;
    const education = parseFloat(document.getElementById('education').value) || 0;
    const travel = parseFloat(document.getElementById('travel').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;

    const maxPercentage = 15;
    const maxValues = income * (maxPercentage / 100);

    let reportMessage = 'Your expenditures are below 15%.';
    let isOutOfBound = false;
    let exceededCategories = [];

    if (loan > maxValues) {
        isOutOfBound = true;
        exceededCategories.push('Loan');
    }
    if (education > maxValues) {
        isOutOfBound = true;
        exceededCategories.push('Education');
    }
    if (travel > maxValues) {
        isOutOfBound = true;
        exceededCategories.push('Travel');
    }
    if (rent > maxValues) {
        isOutOfBound = true;
        exceededCategories.push('Rent');
    }
    if (food > maxValues) {
        isOutOfBound = true;
        exceededCategories.push('Food');
    }

    if (isOutOfBound) {
        reportMessage = 'The following expenditures have crossed the limit: ' + exceededCategories.join(', ') + '.';
    }

    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('print-page').style.display = 'block';
    document.getElementById('print-message').innerHTML = `
        <p>${reportMessage}</p>
        <div class="report-columns">
            <div class="column">
                <h2>Actual Expenditures</h2>
                <ul>
                    <li>Loan: ${loan.toFixed(2)}</li>
                    <li>Education: ${education.toFixed(2)}</li>
                    <li>Travel: ${travel.toFixed(2)}</li>
                    <li>Rent: ${rent.toFixed(2)}</li>
                    <li>Food: ${food.toFixed(2)}</li>
                </ul>
            </div>
            <div class="column">
                <h2>Recommended Expenditures</h2>
                <ul>
                    <li>Loan: ${maxValues.toFixed(2)}</li>
                    <li>Education: ${maxValues.toFixed(2)}</li>
                    <li>Travel: ${maxValues.toFixed(2)}</li>
                    <li>Rent: ${maxValues.toFixed(2)}</li>
                    <li>Food: ${maxValues.toFixed(2)}</li>
                </ul>
            </div>
        </div>
        <p>Saving: ${income - (loan + education + travel + rent + food)}</p>
    `;

    window.print();
})