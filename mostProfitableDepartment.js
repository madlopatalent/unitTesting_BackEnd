// Function to find the most profitable department
export default function mostProfitableDepartment(salesData) {
    const salesMap = {};
    for (let i = 0; i < salesData.length; i++) {
      const sale = salesData[i];
      if (!salesMap[sale.department]) {
        salesMap[sale.department] = 0;
      }
      salesMap[sale.department] += sale.sales;
    }
    
    let currentMaxSales = 0;
    let currentDepart = "";
    
    for (const departSale in salesMap) {
      const currentDepartSales = salesMap[departSale];
      if (currentDepartSales > currentMaxSales) {
        currentMaxSales = currentDepartSales;
        currentDepart = departSale;
      }
    }
    
    return currentDepart;
  }