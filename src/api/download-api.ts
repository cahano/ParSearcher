//
// Axios Download - connects w/ Tornado py instance (tornado_server_v1.py)
//

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';


// Initiaties py-side parsing
export async function StartPyParse(url: string): Promise<void> {

    await axios.get(url)
    
    return Promise.resolve()

}



const timeout = (time:any) =>
  new Promise((resolve) => setTimeout(resolve, time));



export function DownloadPoll(url: string, time: any): Promise<void> {


    let polling = true;

    (async function doPolling() {


        while (polling) {

            try {
                const res = await axios.get(url,
                                            { responseType: 'arraybuffer' })
                if (polling) {
                    await timeout(time);
                }
                if (polling) {
                    let result = res;
                }
                if (polling && res.status === 200) {
                    stopPolling()
                    // Blob object for storing output xlsx contents
                    const blob = new Blob([res.data],
                                        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },);
                    // Creating download link element
                    const URL = window.URL.createObjectURL(blob);
                    const output_el = document.createElement('a');
                    output_el.href = URL;
                    // Simulating link click
                    output_el.download = 'parsed_output.xlsx';
                    output_el.click();
                }
            } catch (e) {
                stopPolling();
                throw new Error("Polling cancelled due to API error");
            }
        }
    })();

    function stopPolling() {
        if (polling) {
            console.log('STOPPED POLLING - stopPolling');
            polling = false;
        } else {
            console.log('POLLING ALREADY STOPPED - stopPolling');
        }
    }

    stopPolling();
    return Promise.resolve();

}




// export function useInterval(callback: Function, delay: any) {

//     const savedCallback = useRef<Function>();

//     // Save latest callback
//     useEffect(() => {
//         savedCallback.current = callback
//     }, [callback]);

//     useEffect(() => {

//         function tick () {
//             savedCallback.current();
//         }
//         if (delay !== null) {

//             const id = setInterval(tick, delay);

//             return () => {
//                 clearInterval(id);
//             }
//         }

//     }, [callback, delay])

// }


// export async function PollFileDownload(url: string): Promise<void>{

//   const timerIdRef = useRef();
//   const [statusCode, setStatusCode] = useState(204);
//   const [isPollingEnabled, setIsPollingEnabled] = useState(true);

//   useEffect(() => {
//     const pollingCallback = () => {
//       // Your polling logic here
//       console.log('Polling...');

//       const res = axios.get(url,
//                            { responseType: 'arraybuffer' })
      
      

//       // Simulating an API failure in the polling callback
//       const shouldFail = Math.random() < 0.2; // Simulate 20% chance of API failure

//       if (shouldFail) {
//         setIsPollingEnabled(false);
//         console.log('Polling failed. Stopped polling.');
//       }
//     };

//     const startPolling = () => {
//       // pollingCallback(); // To immediately start fetching data
//       // Polling every 30 seconds
//       timerIdRef.current = setInterval(pollingCallback, 5000);
//     };

//     const stopPolling = () => {
//       clearInterval(timerIdRef.current);
//     };

//     if ((statusCode == 204) && isPollingEnabled) {
//       startPolling();
//     } else {
//       stopPolling();
//     }

//     return () => {

        

//         console.log('FILE DONWLOAD DATA')
//         console.log(res.status)

//         // Blob object for storing output xlsx contents
//         const blob = new Blob([res.data],
//                             { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },)

//         // Creating download link element
//         const URL = window.URL.createObjectURL(blob);
//         const output_el = document.createElement('a');
//         output_el.href = URL;

//         // Simulating link click
//         output_el.download = 'parsed_output.xlsx';
//         output_el.click();
//       stopPolling();
//       Promise.resolve()
//     };
//   }, [isPollingEnabled]);

// }




// Attempting to ping tornado api until response code is correct

// export async function PollFileDownload(url: string): Promise<void>{

//     let apiTimeout = setTimeout(PollFileDownload, 5000);

//     const res = await axios.get(url,
//                             { responseType: 'arraybuffer' })

//     console.log(res.status == 200)

//     if (res.status == 200) {

//         console.log('FILE DONWLOAD DATA')
//         console.log(res.status)

//         // Blob object for storing output xlsx contents
//         const blob = new Blob([res.data],
//                             { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },)

//         // Creating download link element
//         const URL = window.URL.createObjectURL(blob);
//         const output_el = document.createElement('a');
//         output_el.href = URL;

//         // Simulating link click
//         output_el.download = 'parsed_output.xlsx';
//         output_el.click();

//         clearTimeout(apiTimeout);

//         return Promise.resolve()
        

//     }else{

//         console.log('RE-POLLING DOWNLOAD API')

//         // clearTimeout(apiTimeout);
//         // If not 200, rerun I think?

//         // ATTEMPTING RECURSIVE STRUCTURE
//         PollFileDownload(url);

//         // THIS WORKS BUT IS SUPER UNSTABLE (NEED TO GET IT TO CHECK EVERY 5 SECONDS AND THEN STOP ONCE SUCCEEDED

//         // Failure case. If required, alert the user.

//     }
//     };


// export async function FileDownload(url: string): Promise<void> {

//     const res = await axios.get(url,
//                                 { responseType: 'arraybuffer' })

//     console.log('FILE DONWLOAD DATA')
//     console.log(res.data)

//     // Blob object for storing output xlsx contents
//     const blob = new Blob([res.data],
//                           { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },)

//     // Creating download link element
//     const URL = window.URL.createObjectURL(blob);
//     const output_el = document.createElement('a');
//     output_el.href = URL;

//     // Simulating link click
//     output_el.download = 'parsed_output.xlsx';
//     output_el.click();

//     return Promise.resolve();
// }

