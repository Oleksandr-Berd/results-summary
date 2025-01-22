import * as SC from "./SharedLayoutStyled"

const SharedLayout = ({ children }) => {
    return ( 
        <SC.SharedLayoutStyled>
            {children}
        </SC.SharedLayoutStyled>
     );
}
 
export default SharedLayout;