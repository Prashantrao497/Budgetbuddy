document.getElementById('nav-report').addEventListener('click', function () {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('report-page').style.display = 'block';

    const income = parseFloat(document.getElementById('income').value) || 0;
    const loan = parseFloat(document.getElementById('loan').value) || 0;
    const education = parseFloat(document.getElementById('education').value) || 0;
    const travel = parseFloat(document.getElementById('travel').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;

    const maxPercentage = 15;
    const maxValues = income * (maxPercentage / 100);

    let summaryMessage = 'Your expenditures are below 15%.';
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
        summaryMessage = 'The following expenditures have crossed the limit: ' + exceededCategories.join(', ') + '.';
    }

    document.getElementById('summary-message').textContent = summaryMessage;

    document.getElementById('loan-amount').textContent = loan.toFixed(2);
    document.getElementById('loan-recommended').textContent = maxValues.toFixed(2);

    document.getElementById('education-amount').textContent = education.toFixed(2);
    document.getElementById('education-recommended').textContent = maxValues.toFixed(2);

    document.getElementById('travel-amount').textContent = travel.toFixed(2);
    document.getElementById('travel-recommended').textContent = maxValues.toFixed(2);

    document.getElementById('rent-amount').textContent = rent.toFixed(2);
    document.getElementById('rent-recommended').textContent = maxValues.toFixed(2);

    document.getElementById('food-amount').textContent = food.toFixed(2);
    document.getElementById('food-recommended').textContent = maxValues.toFixed(2);

    const totalExpenditures = loan + education + travel + rent + food;
    document.getElementById('total-savings').textContent = (income - totalExpenditures).toFixed(2);
});
