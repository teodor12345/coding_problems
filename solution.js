
arr = [1,2,3,4,5,6,7,8]
k = [12]


function checkPair(arr,k){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] == k) return true;
        }
      }
      return false;


  
}