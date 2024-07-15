function convertTo12HourFormat(time24) {
  // Extract hours and minutes from the 24-hour time string
  let [hours, minutes] = time24.split(':');

  // Convert hours from string to number
  hours = parseInt(hours, 10);

  // Determine the period (AM or PM)
  let period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Format the hours and minutes with leading zeros if necessary
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Construct the 12-hour formatted time string
  return `${hours}:${minutes} ${period}`;
}

// Example usage:
let time24 = '14:18';
let time12 = convertTo12HourFormat(time24);
console.log(time12); // Output: 02:18 PM

export default convertTo12HourFormat;
