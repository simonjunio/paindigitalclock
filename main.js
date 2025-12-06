 // Function to update the clock and date
 function updateClock() {
    var now = new Date();
    
    // Get hours, minutes, and seconds with leading zeros
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Format the time as HH:MM:SS
    var timeString = hours + ':' + minutes + ':' + seconds;
    
    // Get the day, month, date, and year
    var day = now.toLocaleString('default', { weekday: 'long' });
    var month = now.toLocaleString('default', { month: 'long' });
    var date = now.getDate();
    var year = now.getFullYear();
    
    // Format the date as "Weekday, Month Day, Year"
    var dateString = day + ', ' + month + ' ' + date + ', ' + year;

    // Update the clock and date on the page
    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);
  updateClock(); // Initial call to display the time immediately