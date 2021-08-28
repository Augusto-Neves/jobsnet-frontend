import React from 'react';
import * as S from './styled'

export default function Button(props) {
    return(
        <S.Button type={props.type}>
            {props.value}
        </S.Button>
    );
}