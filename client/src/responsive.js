import {css} from "styled-components";

// Smartphones (portrait)
export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 600px){
        ${props}
    }
    `;
};

// Tablets Ipads (portrait)
export const tablet = (props) => {
    return css`
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait){
        ${props}
    }
    `;
};