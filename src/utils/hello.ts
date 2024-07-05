import moment from "moment";

function hello(): string {
  const house: number = +moment().format('H');

  switch(true) {
    case house > 18: 
      return 'Good evening';
    case house > 10: 
      return 'Good afternoon';
    case house > 4: 
      return 'Good morning';
    default:
      return 'Good night'  
  }
}

export default hello;