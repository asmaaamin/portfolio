const returnNum = (arr) => {
	let sotrtedUniqueArr;
  
	if(arr.length){ //check if array is empty
  	for(let i=0; i<arr.length; i++){ //check if all array elemnts are numbers
    	if(typeof arr[i] !== 'number'){
      	return 'ERROR please enter only numbers array'
      }
    }
  	let sortedArr = arr.sort();
    sotrtedUniqueArr = [...new Set(sortedArr)];
  }else{
  	return "ERROR array is empty!"
  }
  for(let i=0; i<=sotrtedUniqueArr.length; i++){
		if(i !== sotrtedUniqueArr[i]){
    	return i;
    }
	}
}
