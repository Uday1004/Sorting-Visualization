import { bubbleSort, selectionSort ,insertionSort,mergeSort,quickSort,heapSort} from "../Sorting/SortingAlgorithms";


// The following test cases are for the bubble sorting algorithms
test("bubblesort correctly sorts an array", async () => {
    let arr=[5,3,8,1,-5,-9,2,4];
    // create a copy of the array and sort it in ascending order
    let sortedArr = [...arr].sort((a, b) => a - b);
    let mocksetData=jest.fn();
    await bubbleSort(arr,mocksetData,0);
    expect(mocksetData).toHaveBeenCalledWith(sortedArr);
});


// The following test cases are for the selection sorting algorithms
test("selectionsort correctly sorts an array", async () => {
    let arr=[5,3,8,1,2,4];
    let sortedArr=[...arr].sort((a,b)=>a-b);
    
    let mocksetData=jest.fn();
    await selectionSort(arr,mocksetData,0);
    expect(mocksetData).toHaveBeenCalledWith(sortedArr);
});


// The following test cases are for the insertion sorting algorithms
test("insertionsort correctly sorts an array", async () => {
    let arr=[5,9,6,3,8,1,2,4];
    let sortedArr=[...arr].sort((a,b)=>a-b);
    
    let mocksetData=jest.fn();
    await insertionSort(arr,mocksetData,0);
    expect(mocksetData).toHaveBeenCalledWith(sortedArr);
});

// The following test cases are for the merge sorting algorithms
test("mergesort correctly sorts an array", async () => {
    let arr=[5,9,6,3,8,1,2,41,10,4];
    let sortedArr=[...arr].sort((a,b)=>a-b);
    
    let mocksetData=jest.fn();
    await mergeSort(arr,mocksetData,0);
    expect(mocksetData).toHaveBeenCalledWith(sortedArr);
});

// The following test cases are for the quick sorting algorithms
test("quicksort correctly sorts an array",async()=>{
    let arr=[45,26,3,4,15,6];
    let sortedArr=[...arr].sort((a,b)=>a-b);

    let mockdata=jest.fn();
    quickSort(arr,mockdata,0);
    expect(mockdata).toHaveBeenCalledWith(sortedArr);
})


// The following test cases are for the heap sorting algorithms
test("heapsort correctly sorts an array",async()=>{
    let arr=[16,21,34,-5,64,2];
    let sortedarr=[...arr].sort((a,b)=>a-b);

    let mockdata=jest.fn();
    heapSort(arr,mockdata,0);
    expect(mockdata).toHaveBeenCalledWith(sortedarr);
})