import styled from 'styled-components';
import Navigation from 'react-sticky-nav';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 2%;
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 450px){
        justify-content: center;
    }
`;

export const Header = styled(Navigation)`    
    width: 100vw;
    height: auto;    

    border: 1px solid #ccc;
    background: rgba( 255, 255, 255, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    
    z-index: 9999;
`;

export const Logo = styled.img`
    margin: .50rem 0;
    width: 9rem;
    height: auto;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const ListItem = styled.li`
   padding: .50rem;

   a{
    display: block;
    color: #731E9A;
    text-decoration: none;
    font-size: 1.2rem ;
    font-weight: 600;
    transition: .5s;
    cursor: pointer;
    
    &:hover{
        color: #F6921D;
    }
    
    @media screen and (max-width: 400px){
        font-size: 1rem;
    }
   }
`;
