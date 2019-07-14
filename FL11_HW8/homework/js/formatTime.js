function formatTime(minutesNumber) {
    if (minutesNumber <= 0) {
      return 'Number must be greater than 0';
    } else if (typeof(minutesNumber) !== 'number') {
      return 'Not a number';
    }
    let days = 0,
        hours = 0,
        minutes = 0;
    do {
        if (hours === 24) {
        days += 1;
        hours = 0;
      } else if (minutesNumber >= 60) {
        minutesNumber -= 60;
        hours += 1;
      } else if (minutesNumber < 60) {
        minutes += minutesNumber;
        minutesNumber -= minutesNumber;
      }
    } while (minutesNumber !== 0);
    
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
  }

formatTime(120);
formatTime(59);
formatTime(3601);