import moment from 'moment';

export const formatDate = (date) => {
    console.log(date);

    const parsedDate = moment(date, 'YYYY-MM-DD', true); 

    if (parsedDate.isValid()) {
        return parsedDate.format('YYYY-MM-DD'); 
    } else {
        console.warn("Invalid date format. Expected DD/MM/YYYY. Received:", date);
        return null; 
    }
};

export const getNow = () => {
    return moment().format(); 
};
