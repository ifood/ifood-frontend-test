import moment from 'moment-timezone';

function humanizeDate(date, format) {
  try {
    if (date) {
      if (moment(date, 'YYYY-MM-DD').isValid()) {
        date = moment(date, 'YYYY-MM-DD').format(format);
      }
    } else {
      date = '--';
    }
    return date;
  } catch (err) {
    console.log(err);
  }
}

function humanizeDateTime(date, format) {
  try {
    if (date) {
      if (moment(date).isValid()) {
        date = moment(date).format(format);
      }
    } else {
      date = '--';
    }
    return date;
  } catch (err) {
    console.log(err);
  }
}

function parseDate(date, fromFormat) {
  try {
    if (date) {
      if (moment(date, fromFormat).isValid()) {
        date = moment(date, fromFormat).format('YYYY-MM-DD');
      }
    }
    return date;
  } catch (err) {
    console.log(err);
  }
}

function getDuration(startTime, end) {
  try {
    const duration = moment.duration(moment(end).diff(moment(startTime)));
    return duration.asMinutes().toFixed(0);
  } catch (err) {
    console.log(err);
  }
}

export {
  humanizeDate,
  humanizeDateTime,
  parseDate,
  getDuration,
};
