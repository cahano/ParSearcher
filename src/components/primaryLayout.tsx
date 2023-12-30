//
// Primary Layout for Caliburn Site - used for *protected routes*
//

interface Props { children: JSX.Element | JSX.Element[] }

export const PrimaryLayout = ({ children }: Props) => {

    return (
        <div>
            {children}
        </div>
    )

}
