document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('costCalculator');
    const tableBody = document.getElementById('tableBody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const area = parseFloat(document.getElementById('area').value);
      const houseArea = parseFloat(document.getElementById('houseArea').value);
  
      if (isNaN(area) || isNaN(houseArea)) {
        alert('Пожалуйста, введите числовые значения для площадей.');
        return;
      }
  
      const cost = calculateCost(area, houseArea);
      addToTable(area, houseArea, cost);
      saveToLocalStorage();
    });
  
    function calculateCost(area, houseArea) {
      const costPerSquareMeter = 500;
      return (area * 0.5 + houseArea) * costPerSquareMeter;
    }
  
    function addToTable(area, houseArea, cost) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${area}</td>
        <td>${houseArea}</td>
        <td>${cost}</td>
      `;
      tableBody.appendChild(newRow);
    }
  
    function saveToLocalStorage() {
      const rows = tableBody.innerHTML;
      localStorage.setItem('tableRows', rows);
    }
  
    const savedRows = localStorage.getItem('tableRows');
    if (savedRows) {
      tableBody.innerHTML = savedRows;
    }
});