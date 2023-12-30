//
// Axios Upload - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';

export async function axiosPDFPost(formData: FormData, filename: string, url: string): Promise<void> {

    console.log(formData)
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
    let fields = cert_call.data["fields"]

    console.log("Uploading file to S3...")

    // Append each field to formData
    Object.entries(fields).forEach(
        ([key, value]) => formData.append(key, <string>value)
      );

    console.log("Form data: ", formData)
    // Async post PDF data to AWS S3
    await axios(url, {
        method: "post",
        data: formData,
        headers: {
            "Content-Type": "application/pdf"
        }
    }).then((result) => {
            console.log("S3 upload response: ", result.data);
        })
        .catch((error) => {
            console.log("Error: ", error.response);
        })

    return Promise.resolve()

}

