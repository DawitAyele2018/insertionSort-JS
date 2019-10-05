/* 
    # start from the second element
    # compare the 2nd elemnt with the 1st elment, swap if necessary 
    # Contiune to the next elemnt compare it with and compare with sorted portion of the array 
    # place the element in the correct spot
    # repeat this to the end of the element
*/


const inserationSort = function(arr){
    for(var i=1; i< arr.length; i++){
        let temp = arr[i];
        console.log(arr);
        for(var j = i-1; j >= 0 && temp < arr[j] ;j--){
                arr[j+1] =arr[j];
     
        }
        arr[j+1] = temp;

    }
    return arr;
}

// temp 4

console.log(inserationSort([3,4,5,1,8]))
 //             j   i         3,4 5

// worrrest possible case
// As the length of the array increases we have to make n number of comparisons.

 /* 
        # very good if the data is coming on online algorithm
 */
//  Inseration sort and Bubble sort has a best case time complexity of O(n)