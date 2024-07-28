// calculator.js
document.getElementById('nav-calculator').addEventListener('click', () => {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('input-page').style.display = 'block';
});

document.getElementById('submit-button').addEventListener('click', () => {
    const income = parseFloat(document.getElementById('income').value);
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
        reportMessage = 'The following expenditures have crossed the 15% limit: ' + exceededCategories.join(', ') + '.';
    }

    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('report-page').style.display = 'block';
    document.getElementById('report-message').innerHTML = `
        <p>${reportMessage}</p>
        <p>Recommended expenditure as 15% of income for all categories:</p>
        <ul>
            <li>Loan: ${maxValues.toFixed(2)}</li>
            <li>Education: ${maxValues.toFixed(2)}</li>
            <li>Travel: ${maxValues.toFixed(2)}</li>
            <li>Rent: ${maxValues.toFixed(2)}</li>
            <li>Food: ${maxValues.toFixed(2)}</li>
        </ul>
    `;

    const saving = income - (loan + education + travel + rent + food);
    document.getElementById('report-message').innerHTML += `
        <p>Saving: ${saving.toFixed(2)}</p>
    `;
});
