import styled from 'styled-components';
import waves from '../../assets/img/waves.svg';

export const Image = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${waves});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 50%;    
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;    
`;

export const HeroHeader = styled.div`    
    height: 100vh;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .8rem;
`;

export const Title = styled.h1`
    font-size: 4.06rem;
    text-align: center;
    text-transform: capitalize;
    color: #731E9A;

    & > span {
        color: #F6921D;
    }

    @media screen and (max-width: 600px){
        font-size: 3rem;
    }
`;

export const SubTitle = styled.p`    
    padding: 5px;
    text-align: center;
    font-size: 1.6rem;
    color: #731E9A;
    font-weight: 400;
    background-color: #F6921D;
    border-radius: 5px;
`;

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
    padding: .625rem 2%;
    color: #731E9A;
    
    h2{
        font-size: 1.875rem;
        font-weight: 600;
        line-height: 3.12rem;
        text-transform: capitalize;

        span{
            color: #F6921D;
        }
    }

    h3{
        font-size: 1.2rem;
        font-weight: 500;        
        line-height: 3.12rem;
    }

    @media screen and (max-width:375px){
        h3{
            font-size: 1rem;
        }
    }
`;

export const JobsAreaWrapper = styled.div`
    margin: 0 2%;
    display: flex;    
    gap: 1rem;

    @media screen and (max-width:700px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const JobAreasCard = styled.div`
    width: 33.333%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    padding: 40px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background: rgba( 255, 255, 255, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    transition: all .2s;

    &:hover{
        border-top: 2px ridge #731E9A;
        border-right: 2px ridge #731E9A;
    }

    i{
        color: #731E9A;
    }

    h3{
        font-weight: 500;
        color: #731E9A;
        
        span {
            font-size: 3rem;
            color: #F6921D;
        }
    }

    p{
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.25rem;
        text-align: center;
    }

    @media screen and (max-width:700px) {
        width: 80vw;
    }
    
`;