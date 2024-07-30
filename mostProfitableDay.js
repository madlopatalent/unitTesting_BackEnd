export default function mostProfitableDay(salesData){
    const dayMap = {};
    for(let i=0; i<salesData.length; i++){
      const sale = salesData[i];
      dayMap[sale.day] = 0;
    }
    for(let i=0; i<salesData.length; i++){
      const sale = salesData[i];
      var currentDayTotal = dayMap[sale.day];
      currentDayTotal += sale.sales;
      dayMap[sale.day] = currentDayTotal;
    }
    var currentDayMaxSales = 0;
    var currentDay = "";
    for(const saleDay in dayMap){
      const currentDaySales = dayMap[saleDay];
      if(currentDaySales > currentDayMaxSales){
        currentDayMaxSales = currentDaySales;
        currentDay = saleDay;
      }
    }
    return currentDay;
  }