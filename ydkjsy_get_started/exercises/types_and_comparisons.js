"use strict";

const dayStart = "07:30";
const dayEnd = "17:45";

function formatStringTime(meetingHour, meetingMinutes) {
  return `${meetingHour.padStart(2, '0')}:${meetingMinutes.padStart(2, '0')}`;
}

function scheduleMeeting(startTime, durationMinutes) {
  /*
   * Destructuring the results of startTime
   * The results saves in the following order:
   * meetingStartHour: The hours of the given time
   * meetingStartMinutes: The minutes of the given time
   */

  let [ meetingStartHour, meetingStartMinutes ] = startTime.split(':');

  durationMinutes = Number(durationMinutes);

  if (typeof meetingStartHour == 'string' && typeof meetingStartMinutes == 'string') {
    // Determined if the given minute can converted to an hour
    let durationHours = Math.floor(durationMinutes / 60);

    // Calculated the remaining minutes
    durationMinutes = durationMinutes - (durationHours * 60);

    let meetingEndHour = Number(meetingStartHour) + durationHours;
    let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;

    // Determined if the minutes are higher than 60 (1 hour)
    if (meetingEndMinutes >= 60) {
      meetingEndHour += 1;
      meetingEndMinutes -= 60;
    }

    // Formatting the meeting time in one single string
    let meetingStart = formatStringTime(meetingStartHour, meetingStartMinutes);
    let meetingEnd = formatStringTime(String(meetingEndHour), String(meetingEndMinutes));

    return (meetingStart >= dayStart && meetingEnd <= dayEnd);
  }

  return false;
}

console.log(scheduleMeeting("7:00", 15));
console.log(scheduleMeeting("07:15", 30));
console.log(scheduleMeeting("7:30", 30));
console.log(scheduleMeeting("11:30", 60));
console.log(scheduleMeeting("17:00", 45));
console.log(scheduleMeeting("17:30", 30));
console.log(scheduleMeeting("18:00", 15));
