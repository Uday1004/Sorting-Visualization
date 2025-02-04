import React from "react";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort,
  heapSort,
} from "../Sorting/SortingAlgorithms";
import SortingChart from "../Sorting/SortingChart";
import { generateRandomArray } from "../Sorting/SortingVisualize";

function LandignPage() {
  const [data, setData] = React.useState(null);
  const [sizeOfArray, setSizeOfArray] = React.useState(10);
  const [speed, setSpeed] = React.useState(200);
  const [selectalgo, setSelectalgo] = React.useState("");

  const delay = 2000 - speed;

  const handleSort = () => {
    switch (selectalgo) {
      case "BS":
        bubbleSort(data, setData, delay);
        break;
      case "SS":
        selectionSort(data, setData, delay);
        break;
      case "IS":
        insertionSort(data, setData, delay);
        break;
      case "MS":
        mergeSort(data, setData, delay);
        break;
      case "QS":
        quickSort(data, setData, delay);
        break;
      case "HS":
        heapSort(data, setData, delay);
        break;
      default:
        alert("Please select a sorting algorithm");
    }
  };

  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-2 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mb-3">
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Sorting Visualization</span>
              </div>
            </li>
            <li>
              <div className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group dark:text-white ">
                <i className="bi bi-search fs-5 w-5 h-6 group-hover:text-gray-400 transitionis duration-75 dark:text-gray-400 dark:group-hover:text-white"></i>

                <form className="max-w-sm ml-4">
                  <select
                    id="countries_disabled"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setSelectalgo(e.target.value)}
                  >
                    <option selected>Sorting Algorithms</option>
                    <option value="BS">Bubble Sort</option>
                    <option value="SS">Selection Sort</option>
                    <option value="IS">Insertion Sort</option>
                    <option value="MS">Merge Sort</option>
                    <option value="QS">Quick Sort</option>
                    <option value="HS">Heap Sort</option>
                  </select>
                </form>
              </div>
            </li>

            <li>
              <div className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <i className="bi bi-file-bar-graph fs-5 w-5 h-6 group-hover:text-gray-400 transitionis duration-75 dark:text-gray-400 dark:group-hover:text-white"></i>

                <form className="max-w-sm w-full ml-4">
                  <input
                    type="number"
                    id="number-input"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Size of Array (1-50)"
                    required
                    max={50}
                    min={1}
                    onChange={(e) => {
                      const value = Math.max(1, Math.min(50, e.target.value));
                      setSizeOfArray(value);
                    }}
                  />
                </form>
              </div>
            </li>
            <li>
              <div
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="bi bi-alarm fs-5 w-5 h-5 group-hover:text-gray-400 transitionis duration-75 dark:text-gray-400 dark:group-hover:text-white"></i>
                <span>
                  <label
                    className="text-gray p-2 mx-2 h-5 items-center"
                    htmlFor="customRange2"
                  >
                    Speed (sec)
                  </label>
                </span>
              </div>

              <div className="range" data-mdb-range-init>
                <input
                  type="range"
                  className="form-range px-2"
                  min="200"
                  max="1000"
                  step="200"
                  id="customRange2"
                  style={{ width: "200px" }}
                  value={speed}
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                />
                <div className="flex justify-between text-xs px-1 mt-0">
                  <span>200s</span>
                  <span>400s</span>
                  <span>600s</span>
                  <span>800s</span>
                  <span>1000s</span>
                </div>
              </div>
            </li>
            <li>
              <button
                className="flex items-center btn btn-primary mx-auto px-2 w-100 justify-content-center rounded-lg  text-white"
                onClick={() => setData(generateRandomArray(sizeOfArray))}
              >
                <div className="flex-1  text-center">Generate Dataset</div>
              </button>
            </li>
            <li>
              <button
                className="flex items-center btn btn-success mx-auto px-2 w-100 justify-content-center  rounded-lg  text-white"
                onClick={handleSort}
              >
                <div className="flex-1  text-center">Start</div>
              </button>
            </li>
            {/* <li>
              <button className="flex items-center btn btn-warning mx-auto px-2 w-100 justify-content-center text-gray-900 rounded-lg  text-white">
                <div className="flex-1  text-center">Reset</div>
              </button>
            </li> */}
            <li>
              <button className="flex items-center btn btn-danger mx-auto px-2 w-100 justify-content-center text-white rounded-lg ">
                <div className="flex-1  text-center ">Stop</div>
              </button>
            </li>
            <li>
              <div
                className="flex items-center mt-4 text-sm text-yello-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400"
                role="alert"
              >
                <div>
                  <i className="bi bi-exclamation-triangle fs-6 mr-2 dark:text-yellow-400 w-5 h-6 group-hover:text-gray-400 transitionis duration-75 dark:group-hover:text-white"></i>
                  <span className="">
                    For visualization by entering data yourself please enter the
                    data separated by (,) comma
                  </span>
                  <div className="mt-1 bg-gray-700 p-1 "> Ex: 1, 2, 3,...</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div className="sm:ml-64 flex justify-center p-4 bg-gray-800">
        <div className="text-center w-full">
          <p className="text-gray-900 text-6xl dark:text-white">
            Sorting Visualization
          </p>
        </div>
      </div>
      <div className="container w-full">
        <div
          className="col-10 sm:ml-64 h-full bg-white-700 flex justify-center items-center"
          style={{ height: "60vh" }}
        >
          {data === null ? null : <SortingChart data={data} />}
        </div>
      </div>
      <div className="sm:ml-64 flex bg-gray-800 min-h-[24.5vh] items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full text-center p-4">
          <div className="col-span-1 text-gray-900 text-2xl dark:text-white bg-gray-700 rounded p-4">
            Time Complexity: <span className="mx-2">&#123;Time&#125;</span>
          </div>
          <div className="col-span-1 text-gray-900 text-2xl dark:text-white bg-gray-700 rounded p-4">
            Space Complexity: <span className="mx-2">&#123;Space&#125;</span>
          </div>
          <div className="col-span-1 text-gray-900 text-2xl dark:text-white bg-gray-700 rounded p-4">
            Comparison Count: <span className="mx-2">&#123;number&#125;</span>
          </div>
          <div className="col-span-1 text-gray-900 text-2xl dark:text-white bg-gray-700 rounded p-4">
            Efficiency: <span className="mx-2">&#123;String&#125;</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandignPage;


