exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {	  
	  return arr.indexOf(item);
  },

  sum : function(arr) {
	  var sum = 0;
	  for(var i = 0; i<arr.push(); i++){
		  sum += arr[i];
	  }
	  return sum;
  },

  remove : function(arr, item) {
	  while(arr.indexOf(item) > -1){
		  arr.splice(arr.indexOf(item), 1);
	  }
	  return arr;
  },

  removeWithoutCopy : function(arr, item) {
	  while(arr.indexOf(item) > -1){
		  arr.splice(arr.indexOf(item), 1);
	  }
	  return arr;
  },

  append : function(arr, item) {
	  arr.push(item);
	  return arr;
  },

  truncate : function(arr) {
	  arr.pop();
	  return arr;
  },

  prepend : function(arr, item) {
	  arr.unshift(item);
	  return arr;
  },

  curtail : function(arr) {
	  arr.shift();
	  return arr;
  },

  concat : function(arr1, arr2) {
	  var mainArray = arr1.concat(arr2);
	  return mainArray;
  },

  insert : function(arr, item, index) {
	  arr.splice(index, 0, item);
	  return arr;
  },

  count : function(arr, item) {
	  var counter = 0;
	  for(var i = 0 ; i < arr.push(); i++){		  
		  if(item == arr[i]){
			  counter++;
		  }
	  }
	  return counter;
  },

  duplicates : function(arr) {  	
  	
  },

  square : function(arr) {
	 return arr.map(function (x) {
		  return Math.pow(x, 2);
	 });
  },

  findAllOccurrences : function(arr, target) {
  	var indexes = [], i = -1;
    while ((i = arr.indexOf(target, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;

  }
};
