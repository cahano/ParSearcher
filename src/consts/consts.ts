//
// For misc ts/tsx funcs
//


// Used for converting numeric string to thousands (',')
export function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// URL Addresses for APIs //
// URL for AWS cert retreival
export let CERT_URL:string = 'https://a28vgy9uqf.execute-api.us-east-1.amazonaws.com/prod'
// URL for Brandon's local tornado
export let API_URL:string = 'https://parsearch.info/'