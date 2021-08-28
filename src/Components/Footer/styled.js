import styled, { keyframes } from 'styled-components';

export const Footer = styled.footer`
    margin-top: 5rem;
    color: #fff;
    background-color: #731E9A;
`;

const beat = keyframes`
    0%,
    40%,
    70%,
    100% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.4);
    }

    50%,
    80% {
        transform: scale(1.2);
    }
`
export const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: .8rem;

    text-align: center;
    
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 2%;
   
    div span {        
        a{
            color: #fff;
            text-decoration: none;
            transition: 0.5s;

            &:hover{
                text-decoration: underline;
            }
        }

        i{
            cursor: pointer;
            color: #ff0000;
            
            &:hover{
                animation: ${beat} 2s ease-out infinite;
            }
        }
    }

    @media screen and (max-width:552px){        
        justify-content: center;        
    }
`;

export const Social = styled.div`    
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        gap: .5rem;
        list-style: none;

        a{  
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            
            i{
                transition: .2s ease-in-out;
            }
            
            & i:hover{                
                transform: scale(1.12);
            }
        }
    }    
`;