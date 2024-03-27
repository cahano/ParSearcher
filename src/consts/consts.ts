//
// For misc ts/tsx funcs
//


// Private Routes
export const PRIVATE_ROUTES:String[] = ["/landing", "/core"]

// Used for converting numeric string to thousands (',')
export function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// URL Addresses for APIs //
// URL for AWS cert retreival
export let CERT_URL:string = 'https://a28vgy9uqf.execute-api.us-east-1.amazonaws.com/prod'
