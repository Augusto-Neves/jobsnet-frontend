import React from "react";
import * as S from "./styled";
import Header from "../../Components/Header";
import Form from "../../Components/Form";
import Footer from "../../Components/Footer";


export default function Home() {  
  return (
    <>
      <Header />
      
      <main>
        <S.Image>
          <S.Container>
            <S.HeroHeader>
              <S.Title>
                Seu próximo emprego está aqui<span>.</span>
              </S.Title>
              <S.SubTitle>Excelente lugar para trabalhar</S.SubTitle>
            </S.HeroHeader>
          </S.Container>
        </S.Image>
        <S.Container>
          <S.SectionHeader id="areas">
            <h2>
              Áreas de atuação<span>.</span>
            </h2>
            <h3>Se candidate a vagas em diversas áreas</h3>
          </S.SectionHeader>
          {/* Cards */}
          <S.JobsAreaWrapper>
            <S.JobAreasCard>
              <i className="fas fa-desktop fa-3x"></i>
              <h3>
                Frontend<span>.</span>
              </h3>
              <p>
                Trabalhe com as tecnologias mais requisitadas do mercado, como:
                React, Next, Tailwind CSS e muito mais...
              </p>
            </S.JobAreasCard>
            <S.JobAreasCard>
              <i className="fas fa-cogs fa-3x"></i>
              <h3>
                Backend<span>.</span>
              </h3>
              <p>
                Você vai trabalhar com tecnologias como: NodeJS, MongoDB,
                Graphql, Express e muitas outras...
              </p>
            </S.JobAreasCard>
            <S.JobAreasCard>
              <i className="fas fa-swatchbook fa-3x"></i>
              <h3>
                UX Design<span>.</span>
              </h3>
              <p>
                Trabalhe com prototipagem, experiência do usúario,
                desenvolvimento de produtos e muito mais...
              </p>
            </S.JobAreasCard>
          </S.JobsAreaWrapper>
          <S.SectionHeader>
            <h2>
              Candidate-se<span>.</span>
            </h2>
            <h3>Trabalhe conosco</h3>
          </S.SectionHeader>
          <section id="contact">
            <Form />
          </section>
        </S.Container>
      </main>

      <Footer />
    </>
  );
}
