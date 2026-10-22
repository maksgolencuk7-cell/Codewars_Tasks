function longest(arr, n) {
  let copy = arr.slice(); 
    let result = "";

    for (let i = 0; i < n; i++) {
        let maxIndex = 0;
        
       
        for (let j = 1; j < copy.length; j++) {
            if (copy[j].length > copy[maxIndex].length) {
                maxIndex = j;
            }
        }
   
        result = copy[maxIndex];
      
        copy.splice(maxIndex, 1);
    }

    return result;
}
