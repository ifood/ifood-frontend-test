import moment from 'moment'


const convertToIso = (selectedData) => {
    let date = moment(selectedData).toISOString();
    date = date.substring(0, date.length-1);
    console.log('toISO DATA ===', date)

    return date
}

export default convertToIso