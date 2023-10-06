//
// Axios Download - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';


// Initiaties py-side parsing
export async function StartPyParse(url: string): Promise<void> {

    await axios.get(url)
    return Promise.resolve()

}


// Attempting to ping tornado api until response code is correct

let apiTimeout = setTimeout(PollFileDownload, 5000);

export async function PollFileDownload(url: string): Promise<void>{

    const res = await axios.get(url,
                            { responseType: 'arraybuffer' })

    console.log(res.status == 200)

    if (res.status == 200) {

        console.log('FILE DONWLOAD DATA')
        console.log(res.status)

        // Blob object for storing output xlsx contents
        const blob = new Blob([res.data],
                            { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },)

        // Creating download link element
        const URL = window.URL.createObjectURL(blob);
        const output_el = document.createElement('a');
        output_el.href = URL;

        // Simulating link click
        output_el.download = 'parsed_output.xlsx';
        output_el.click();

        clearTimeout(apiTimeout);

        return Promise.resolve()
        

    }else{

        console.log('RE-POLLING DOWNLOAD API')

        // clearTimeout(apiTimeout);
        // If not 200, rerun I think?
        setTimeout(PollFileDownload, 5000);
        // Failure case. If required, alert the user.

    }
    };


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

