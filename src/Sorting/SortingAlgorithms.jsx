const animationSorting = (animations, setArray, speed) => {
    const delay=1200-speed;
    animations.forEach((animation, i) => {
        setTimeout(() => {
            setArray([...animation]);
        }, i * delay);
    });
}

export const bubbleSort = (array, setArray, speed=200) => {
    let tempArray = [...array];
    let animations = [];

    for (let i = 0; i < tempArray.length; i++) {
        for (let j = 0; j < tempArray.length - i - 1; j++) {
            if (tempArray[j] > tempArray[j + 1]) {
                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
                animations.push([...tempArray]);
            }
        }
    }
    animationSorting(animations, setArray, speed);
    setArray(tempArray);
}





export const selectionSort = (array, setArray, speed) => {
    let tempArray = [...array];
    let animations = [];

    for (let i = 0; i < tempArray.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < tempArray.length; j++) {
            if (tempArray[j] < tempArray[minIndex]) {
                minIndex = j;
            }
        }

        let temp = tempArray[i];
        tempArray[i] = tempArray[minIndex];
        tempArray[minIndex] = temp;
        animations.push([...tempArray]);
    }

    setArray(tempArray);
    animationSorting(animations, setArray, speed);
}



export const insertionSort = (array, setArray, speed) => {
    let tempArray = [...array];
    let animations = [];

    for (let i = 1; i < tempArray.length; i++) {
        let key = tempArray[i];
        let j = i - 1;

        while (j >= 0 && tempArray[j] > key) {
            tempArray[j + 1] = tempArray[j];
            animations.push([...tempArray]);
            j--;
        }

        tempArray[j + 1] = key;
        animations.push([...tempArray]);
    }

    setArray(tempArray);
    animationSorting(animations, setArray, speed);
}




export const mergeSort = (array, setArray, speed) => {
    // let tempArray = [...array];
    let animations = [];
    let temp = [...array];

    const merge = (tempArray, l, m, r) => {
        let n1 = m - l + 1;
        let n2 = r - m;

        let L = new Array(n1);
        let R = new Array(n2);

        for (let i = 0; i < n1; i++) {
            L[i] = tempArray[l + i];
        }

        for (let j = 0; j < n2; j++) {
            R[j] = tempArray[m + 1 + j];
        }

        let i = 0;
        let j = 0;
        let k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                tempArray[k] = L[i];
                i++;
            } else {
                tempArray[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            tempArray[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            tempArray[k] = R[j];
            j++;
            k++;
        }

        animations.push([...tempArray]);
    }

    const mergeSortHelper = (tempArray, l, r) => {
        if (l < r) {
            let m = Math.floor((l + r) / 2);
            mergeSortHelper(tempArray, l, m);
            mergeSortHelper(tempArray, m + 1, r);
            merge(tempArray, l, m, r);
        }
    }

    mergeSortHelper(temp, 0, temp.length - 1);
    setArray(temp);
    animationSorting(animations, setArray, speed);
}




export const quickSort = (array, setArray, speed) => {
    let tempArray = [...array];
    let animations = [];

    const partition = (tempArray, low, high) => {
        let pivot = tempArray[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (tempArray[j] < pivot) {
                i++;
                let temp = tempArray[i];
                tempArray[i] = tempArray[j];
                tempArray[j] = temp;
                animations.push([...tempArray]);
            }
        }

        let temp = tempArray[i + 1];
        tempArray[i + 1] = tempArray[high];
        tempArray[high] = temp;
        animations.push([...tempArray]);

        return i + 1;
    }

    const quickSortHelper = (tempArray, low, high) => {
        if (low < high) {
            let pi = partition(tempArray, low, high);
            quickSortHelper(tempArray, low, pi - 1);
            quickSortHelper(tempArray, pi + 1, high);
        }
    }

    quickSortHelper(tempArray, 0, tempArray.length - 1);
    setArray(tempArray);
    animationSorting(animations, setArray, speed);
}




export const heapSort = (array, setArray, speed) => {
    let tempArray = [...array];
    let animations = [];

    const heapify = (tempArray, n, i) => {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < n && tempArray[l] > tempArray[largest]) {
            largest = l;
        }

        if (r < n && tempArray[r] > tempArray[largest]) {
            largest = r;
        }

        if (largest !== i) {
            let swap = tempArray[i];
            tempArray[i] = tempArray[largest];
            tempArray[largest] = swap;
            animations.push([...tempArray]);

            heapify(tempArray, n, largest);
        }
    }

    const heapSortHelper = (tempArray) => {
        let n = tempArray.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(tempArray, n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            let temp = tempArray[0];
            tempArray[0] = tempArray[i];
            tempArray[i] = temp;
            animations.push([...tempArray]);

            heapify(tempArray, i, 0);
        }
    }

    heapSortHelper(tempArray);
    setArray(tempArray);
    animationSorting(animations, setArray, speed);
}



