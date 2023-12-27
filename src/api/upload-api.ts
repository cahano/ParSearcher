//
// Axios Upload - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';

export async function axiosPDFPost(files: FormData, url: string): Promise<void> {

    // Getting AWS S3 signed credential
    let cert_call = await axios.get(url,
            {
                // headers: {
                //     "Content-Type": "application/pdf",
                // },

                data: {
                    operation: "get_s3_signed_url",
                    payload: {
                        "bucket_stage": "dev",
                        "filename": files.get.name,
                        "owner_tag": "admin"
                    }
                }

            }
        )

    console.log(cert_call.data)

    let signed_url: string = cert_call.data.body

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

