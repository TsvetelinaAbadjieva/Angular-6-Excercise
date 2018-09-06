import { Injectable } from '@angular/core';
import {FormControl, AbstractControl, ValidatorFn} from '@angular/forms';

const DATE_REGEX = new RegExp(/^(\d{2}|\d)\/(\d{2}|\d)\/\d{4}$/);
const TIME_REGEX = new RegExp(/^(1[0-2]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm])$/);

@Injectable()

export class DateValidatorService {

  errorMessages: {};

  constructor() {
    this.errorMessages = {
        dateFormatValidator: {
          message:'Invalid date format. Expected dd/mm/yyyy'
        },
        timeFormatValidator: {
          message: 'Invalid time format. Expected hh:mm am|pm'
        },
        dateValidator: {
          message: 'Incorrect date'
        },
        endBeforeStartDateValidator: {
          message: 'End date must be after the start date'
        },
        startTime: {
          message: 'Incorrect start time'
        },
        endTime: {
          message: 'Incorrect end time'
        },
        endTimeBeforeStartTime: {
          message: 'End time must be after the start time'
        },
    }
   }

  dateFormatValidator(control: FormControl){

    const flag = DATE_REGEX.test(control.value);
    return (!flag) ? {dateFormatValidator: true}:null;   
  }

  timeFormatValidator(control: FormControl){

    const flag = TIME_REGEX.test(control.value);
    return (!flag) ? {timeFormatValidator: true}:null;   
  }

  endBeforeStartDateValidator(startDate:Date, endDate: Date){

    return (startDate > endDate) ? {endBeforeStartDateValidator: true}: null;
  }

// https://regex101.com/r/H4dMvA/1
  stringsToDate(dateStr: string, timeStr: string) {

    if (!DATE_REGEX.test(dateStr) || !TIME_REGEX.test(timeStr)) {
      console.error('Cannot convert date/time to Date object.');
      return;
    }
    const date = new Date(dateStr);
    const timeArr = timeStr.split(/[\s:]+/); 
    let hour = parseInt(timeArr[0], 10);
    const min = parseInt(timeArr[1], 10);
    const pm = timeArr[2].toLowerCase() === 'pm';
  
    if (!pm && hour === 12) {
      hour = 0;
    }
    if (pm && hour < 12) {
      hour += 12;
    }
    date.setHours(hour);
    date.setMinutes(min);
    return date;
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const dateStr = control.value;
      // First check for m/d/yyyy format
      // If pattern is wrong, don't validate yet
      if (!DATE_REGEX.test(dateStr)) {
        return null;
      }
      // Length of months (will update for leap years)
      const monthLengthArr = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
      // Object to return if date is invalid
      const invalidObj = { 'dateValidator': true };
      // Parse the date input to integers
      const dateArr = dateStr.split('/');
      const day = parseInt(dateArr[0], 10);
      const month = parseInt(dateArr[1], 10);
      const year = parseInt(dateArr[2], 10);
      // Today's date
      const now = new Date();
  
      // Validate year and month
      if (year < now.getFullYear() || year > 3000 || month === 0 || month > 12) {
        return invalidObj;
      }
      // Adjust for leap years
      if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        monthLengthArr[1] = 29;
      }
      // Validate day
      if (!(day > 0 && day <= monthLengthArr[month - 1])) {
        return invalidObj;
      };
      // If date is properly formatted, check the date vs today to ensure future
      // This is done this way to account for new Date() shifting invalid
      // date strings. This way we know the string is a correct date first.
      const date = new Date(dateStr);
      if (date <= now) {
        return invalidObj;
      }
      return null;
    };
  }  
}
