// O(n) --> Linear Time

// Algorithms that are O(n) mean the number of operations increases with the number of elements.

const nemo = ['nemo'];
const everyone = ['dory', 'patrick', 'spongebob', 'santa', 'nemo'];
const large = new Array(1000).fill('nemo');

function findNemo(arr){
  for(let i = 0; i < arr.length; i++ ){
    if (arr[i] === 'nemo'){
      console.log('Found Nemo');
    }
  }
};

findNemo(everyone); 
