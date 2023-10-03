//
// Test Axios Upload - connects w/ Tornado py instance (tornado_server_v1.py)
//

import axios from 'axios';

export async function axiosPDFPost(files: FormData, url: string): Promise<void> {

    // Async post PDF data to api
    await axios.post(url,
                     files,
                     {
                        headers: {
                        "Content-Type": "application/pdf",
                        },
                    }
                    )

                    // .then((response) => {
                    //     // handle the response
                    //     // Manage state here
                    //     console.log(response);
                    // })
                    // .catch((error) => {
                    //     // handle errors
                    //     console.log(error);
                    // });

    return Promise.resolve()

}

