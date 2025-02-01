export function getPaidAmount(payments) {
    if (payments) {
      let total = payments.reduce((acc, current) => acc + current.amount, 0);
      return total;
    }else{
      return 0;
    }
    
  };

 export function getRemainingAmount(payments, total_fee) {
  
    if (payments && total_fee) {
      let total_paid = payments.reduce((acc, current) => acc + current.amount, 0);
      return (total_fee - total_paid);
    }else if (total_fee) {
      return total_fee;
    }else {
      return 0;
    }
    
    
  }

  export function convertDateToSqlDate(date) {
    if (date) {
        date = new Date(date);
        const year = date.getFullYear();
        const month = ((date.getMonth() + 1) > 9) ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
        const day = (date.getDate() > 9) ? date.getDate() : `0${date.getDate()}`;
        
        return `${year}${month}${day}`;
    }
  
}