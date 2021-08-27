import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './styled';
import Logo from '../../assets/img/Logo.png'

export default function Header() {
    return (
        <S.Header>
            <S.Container>
                <S.Logo
                    src={Logo}
                    alt="Logo Jobs Net"
                />
                {/* Nav Bar */}
                <S.Nav>
                    <S.List>
                        <S.ListItem> <Link to='/'>Início</Link> </S.ListItem>
                        <S.ListItem> <a href="#areas">Áreas</a> </S.ListItem>                        
                        <S.ListItem> <a href="#contact">Candidate-se</a> </S.ListItem>                        
                    </S.List>
                </S.Nav>
            </S.Container>
        </S.Header>
    );
}