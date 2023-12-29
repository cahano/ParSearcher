//
// Axios Upload - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';

export async function axiosPDFPost(files: FormData, filename: string, url: string): Promise<void> {

    console.log(files)
    console.log(filename)
    console.log("Getting presinged URL from S3...")
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

    console.log("S3 Response", cert_call.data)

    let signed_url: string = cert_call.data["url"]
    let fields = JSON.parse(cert_call.data["fields"])

    console.log("Uploading file to S3...")

    // Async post PDF data to AWS S3
    await axios.post(signed_url,
                    files,
                    fields
                    )

    return Promise.resolve()

}

