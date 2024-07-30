export default function findItemsOver20(list){
    var itemsOver20 = [];
    for (let j=0; j<list.length; j++){
      const listItem = list[j];
      if(listItem.qty > 20){
        itemsOver20.push(listItem);
      }
    }
    return itemsOver20
  }