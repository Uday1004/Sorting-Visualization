// import React, { useState } from 'react'
// import { bubbleSort } from './SortingAlgorithms'
// import SortingChart from './SortingChart'
// import { Button } from '@mui/material'

// export default function SortingVisualize() {
//     const [data, setData] = useState([30, 10, 50, 20,80,55,35,21, 40]);

//     return (
//         <div style={{ textAlign: 'center'}}>
//             <SortingChart data={data} />
//             <Button variant="contained" onClick={() => bubbleSort(data, setData)}>Sort
//             </Button>
//         </div>
//     )
// }



function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 0 + 1) + 0);
}

export const generateRandomArray = (size) => {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(getRandomNumber());
    }
    return array;
}
