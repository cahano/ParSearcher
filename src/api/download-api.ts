//
// Test Axios Download - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';

export interface parsedFile {
    file: Blob
}

export async function FileDownload(url: string): Promise<void> {

    const res = await axios.get(url,
                                { responseType: 'arraybuffer' })
                                  .then((res) => { const outputFile = 'parse_results.xlsx';
                                  console.log('FILE DONWLOAD DATA')
                                  console.log(res.data.file)
                              
                                  // Blob object for storing output xlsx contents
                                  const blob = new Blob([res.data.file])
                              
                              
                                  // XLSX FILE IS CORRUPT - NEED TO FIX
                                  // NEED TO DETERMINE IF TORNADO SIDE OR REACT SIDE FILE HANDLING
                              
                              
                                  // Creating download link element
                                  const URL = window.URL.createObjectURL(blob);
                                  const output_el = document.createElement('a');
                                  output_el.href = URL;
                              
                                  // Simulating link click
                                  output_el.download = outputFile;
                                  output_el.click(); })

    return Promise.resolve();
}
