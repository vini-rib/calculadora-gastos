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
                <td><button class="remove-btn">Remover</button></td>
            `;
            expenseList.appendChild(newRow);

            // Atualiza o total exibido no HTML
            totalExpensesDisplay.textContent = `Total: R$ ${totalExpenses.toFixed(2)}`;

            // Adiciona evento de remoção ao botão
            newRow.querySelector('.remove-btn').addEventListener('click', () => {
                const index = Array.from(expenseList.children).indexOf(newRow);
                expenses.splice(index, 1); // Remove o valor do array de despesas
                newRow.remove(); // Remove a linha da tabela

                // Recalcula o total de gastos
                const updatedTotal = expenses.reduce((acc, curr) => acc + curr, 0);
                totalExpensesDisplay.textContent = `Total: R$ ${updatedTotal.toFixed(2)}`;
            });

            // Reseta o formulário
            expenseForm.reset();
        }
    });
});