//
// For misc ts/tsx funcs
//


// Used for converting numeric string to thousands (',')
export function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
// footer
export const Pagefooter = () => {
    return (
        <div>
            <footer className='footer'>
                <span>&copy; 2023 Caliburn</span>
            </footer>
        </div>
        )
}

// URL Addresses for APIs //

// URL for Brandon's local tornado
export let API_URL:string = 'https://108.35.159.142/'
// URL for heroku tornado
// export let API_URL:string = 'https://parsearcher-api-c4c5fa341782.herokuapp.com/' 
