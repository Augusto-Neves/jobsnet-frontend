import React from "react";
import * as S from "./styled";

export default function Footer() {
  return (
    <>
      <S.Footer>
        <S.FooterContainer>
          <div>
            <span>
              Desenvolvido com <i className="fas fa-heart"></i> durante a Start
              Tech/
              <a href="https://www.gama.academy/" target="blank" rel="noreferrer">
                Gama-Academy
              </a>
            </span>
          </div>
          <S.Social>
            <ul>
              <li>
                <a
                  href="https://linkedin.com/in/augustonevesdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Augusto-Neves"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="mailto:augusto.agt1995@gmail.com">
                  <i className="fas fa-envelope fa-2x"></i>
                </a>
              </li>
            </ul>
          </S.Social>
        </S.FooterContainer>
      </S.Footer>
    </>
  );
}
