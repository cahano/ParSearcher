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
                <span>&copy; 2023 ParSearch</span>
            </footer>
        </div>
        )
}

