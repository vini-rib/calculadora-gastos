const form = document.getElementById('expense-form');

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

document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpensesDisplay = document.getElementById('total-expenses');
    const expenses = []; // Array para armazenar os valores dos gastos

    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const description = document.getElementById('description').value;
        const value = parseFloat(document.getElementById('value').value);
        const category = document.getElementById('category').value;

        if (!isNaN(value)) {
            // Adiciona o valor ao array de despesas
            expenses.push(value);

            // Calcula o total de gastos
            const totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);

            // Atualiza a tabela com o novo gasto
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${description}</td>
                <td>R$ ${value.toFixed(2)}</td>
                <td>${category}</td>
            `;
            expenseList.appendChild(newRow);

            // Atualiza o total exibido no HTML
            totalExpensesDisplay.textContent = `Total: R$ ${totalExpenses.toFixed(2)}`;

            // Reseta o formulário
            expenseForm.reset();
        }
    });
});