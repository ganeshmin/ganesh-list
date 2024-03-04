class GaneshList {
    constructor() {
      this.ganeshItems = [];
    }
  
    addItem(item) {
      this.ganeshItems.push(item);
      console.log(`Added ${item} to the Ganesh list.`);
    }
  
    removeItem(item) {
      const index = this.ganeshItems.indexOf(item);
      if (index !== -1) {
        this.ganeshItems.splice(index, 1);
        console.log(`Removed ${item} from the Ganesh list.`);
      } else {
        console.log(`${item} is not found in the Ganesh list.`);
      }
    }
  
    displayList() {
      console.log('Ganesh List:');
      this.ganeshItems.forEach((item, index) => console.log(`${index + 1}. ${item}`));
    }
  }
  
  // Example usage:
  const ganeshList = new GaneshList();
  ganeshList.addItem('Ganesh Idol');
  ganeshList.addItem('Modak Sweets');
  ganeshList.displayList();
  ganeshList.removeItem('Ganesh Idol');
  ganeshList.displayList();
  