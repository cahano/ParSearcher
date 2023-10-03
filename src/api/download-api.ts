//
// Axios Download - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';


export async function FileDownload(url: string): Promise<void> {

    const res = await axios.get(url,
                                { responseType: 'arraybuffer' })

    console.log('FILE DONWLOAD DATA')
    console.log(res.data)

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

    return Promise.resolve();
}
