// ===== LOGIN BUTTON =====
const myButton = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

myButton.addEventListener('click', () => {
    messageParagraph.textContent = 'Button was clicked!';
    myButton.style.backgroundColor = 'blue';
    myButton.style.color = 'white';
});

// ===== CALENDAR =====
const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Set header text
    monthYear.textContent = date.toLocaleString('default', { month: 'long' }) + ' ' + year;

    // Clear old cells
    calendarBody.innerHTML = '';

    // First day of month + number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let row = document.createElement('tr');

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement('td'));
    }

    // Fill days
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('td');
        cell.textContent = day;

        // Highlight today
        const today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            cell.style.backgroundColor = '#cce5ff';
            cell.style.fontWeight = 'bold';
        }

        row.appendChild(cell);

        // Start new row after Saturday
        if ((firstDay + day) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }

    // Append last row if not empty
    if (row.children.length > 0) {
        calendarBody.appendChild(row);
    }
}

// Navigation
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);
