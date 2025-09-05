// ===== Generate 24-hour time slots =====
const timeColumn = document.querySelector(".time-column");
const dayColumns = document.querySelector(".day-columns");

// Fill time column (0–23)
for (let hour = 0; hour < 24; hour++) {
  const div = document.createElement("div");
  const label =
    hour === 0
      ? "12 AM"
      : hour < 12
      ? hour + " AM"
      : hour === 12
      ? "12 PM"
      : hour - 12 + " PM";
  div.textContent = label;
  timeColumn.appendChild(div);
}

// Fill each day column with 24 rows
dayColumns.querySelectorAll(".day").forEach((day) => {
  for (let i = 0; i < 24; i++) {
    const slot = document.createElement("div");
    slot.classList.add("hour-slot");
    slot.style.height = "60px"; // Match time-column height
    day.appendChild(slot);
  }
});
