//
// Axios Upload - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';

export async function axiosPDFPost(formData: FormData, filename: string, url: string): Promise<void> {

    console.log(filename)
    console.log("Getting presinged URL from S3...")
    let operation = "get_s3_signed_url"
    // Getting AWS S3 signed credential
    let certCall = await axios.post(url,
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

    console.log("S3 Response", certCall.data)
    
    let signedURL: string = <string>certCall.data 


    console.log("Form data: ", formData)
    console.log("Uploading file to S3...")

    let axiosMethod = operation == "get_s3_signed_url" ? "put" : "post"

    // Async post PDF data to AWS S3
    await axios.put(signedURL, formData).then((result) => {
            console.log("S3 upload response: ", result.data);
        })
        .catch((error) => {
            console.log("Error: ", error.response);
        })

    return Promise.resolve()

}

