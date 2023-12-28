//
// Axios Upload - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';

export async function axiosPDFPost(files: FormData, filename: string, url: string): Promise<void> {

    console.log(files)
    console.log(filename)

    // Getting AWS S3 signed credential
    let cert_call = await axios.post(url,
            {
                // headers: {
                //     "Content-Type": "application/json",
                // },

                operation: "get_s3_signed_url",
                payload: {
                    "bucket_stage": "dev",
                    "filename": filename,
                    "owner_tag": "admin"
                }
            }
        )

    console.log(cert_call.data)

    let signed_url: string = cert_call.data

    // Async post PDF data to api
    await axios.post(signed_url,
                     files,
                     {
                        headers: {
                        "Content-Type": "application/pdf",
                        },
                     }
                    )

    return Promise.resolve()

}

