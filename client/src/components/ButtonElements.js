import styled from "styled-components";
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ $primary }) => ($primary ? '#e1affd' : '#010606')};
    white-space: nowrap;
    padding: 12px 30px; // Default to smaller size for mobile
    color: ${({ $dark }) => ($dark ? '#010606' : '#e1affd')};
    font-size: 16px; // Default to smaller font size for mobile
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ $dark }) => ($dark ? '#010606' : '#e1affd')};
        color: ${({ $primary }) => ($primary ? '#e1affd' : '#010606')};
        outline: 1px solid #010606;
        border: 1px solid #e1affd;
    }

    // Media query for tablets and above
    @media screen and (min-width: 768px) {
        padding: ${({ $big }) => ($big ? '14px 48px' : '12px 30px')}; // Bigger padding on larger screens
        font-size: ${({ $fontBig }) => ($fontBig ? '20px' : '16px')}; // Bigger font size on larger screens
    }
`;
