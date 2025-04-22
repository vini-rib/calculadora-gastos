const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const value = document.getElementById('value').value;
    const category = document.getElementById('category').value;

    const row = document.createElement('tr');
    row.innerHTML = `
                <td>${description}</td>
                <td>R$ ${parseFloat(value).toFixed(2)}</td>
                <td>${category}</td>
            `;

    expenseList.appendChild(row);

    form.reset();
});