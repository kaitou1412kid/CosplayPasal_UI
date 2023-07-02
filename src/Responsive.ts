import {css} from "styled-components";


export const Mobile = (props : any)=>{
    return css`
        @media only screen and (max-width : 390px) {
            ${props}
        }
    `;
}