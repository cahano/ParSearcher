//
// Axios Download - funcs to init parser, and ping API until output file is ready
//


import axios from 'axios';


const TIME_LIMIT_MIN = 30 //in minutes


// Initiaties py-side parsing for eventual output file download
export async function StartPyParse(url: string): Promise<void> {

    await axios.get(url)
    
    return Promise.resolve()

}

// Aux func for polling - determines time between API pings 
const timeout = (time:any) =>
  new Promise((resolve) => setTimeout(resolve, time));

// Ping inputted URL every inputted # of sec until status code '200' is received
//// Then execute client file download
export async function DownloadPoll(url: string, filename: string, time: any): Promise<void> {

    // Controls loop that pings API
    let polling = true;
    filename = filename.replace(".pdf", ".xlsx")
    filename = "output_" + filename
    // Awaiting completion of polling (i.e. awaiting response code of '200')
    await (async function doPolling() {

        while (polling) {

            try {
                console.log("Getting signed URL for file ", filename)
                let certCall = await axios.post(url,
                    {
                        operation: "get_s3_signed_get",
                        payload: {
                            "bucket_stage": "dev",
                            "filename": filename,
                            // TODO: need to get user from user login
                            "owner_tag": "admin"
                        }
                    }
                )
                
                let signedGetURL: string = <string>certCall.data 
                console.log("Got signed URL, polling for file ", filename)
                // Pinging inputted API url
                const res = await axios.get(signedGetURL,
                                            { responseType: 'arraybuffer' })
                // run polling delay (e.g. 5 seconds)
                if (polling) {
                    console.log("Wait ", time)
                    await timeout(time);
                }
                // Check status code
                if (polling && res.status === 200) {
                    // If 200, end polling and run file download
                    stopPolling();

                    console.log('POLLING STOPPED - DOWNLOADING')

                    // Blob object for storing output xlsx contents
                    const blob = new Blob([res.data],
                                        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },);
                    // Creating download link element
                    const URL = window.URL.createObjectURL(blob);
                    const output_el = document.createElement('a');
                    output_el.href = URL;
                    // Simulating link click
                    //// NEED TO MAKE THIS FILE NAME DYNAMIC - SAME AS INPUT NAME
                    output_el.download = filename;
                    output_el.click();

                    // returning promise here so state updates only AFTER download occurs
                    return Promise.resolve();
                }
            } catch (e) {
                stopPolling();
                throw new Error("Polling cancelled due to API error");
            }
        }
    })();

    // Func to stop polling
    function stopPolling() {
        if (polling) {
            console.log('STOPPED POLLING - stopPolling');
            polling = false;
        } else {
            console.log('POLLING ALREADY STOPPED - stopPolling');
        }
    }

}

