import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button";
import * as S from "./styled";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
  });
  return (
    <>
      <S.FormWrapper>
        <form className="row g-3">
          <h4>Dados Pessoais</h4>
          <hr />
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Nome <span>*</span>
            </label>
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                console.log(e.target.value);
              }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Vaga pretendida <span>*</span>
            </label>
            <select
              id=""
              className="form-select"
              required
              defaultValue={"default"}
            >
              <option value="default" disabled>
                Escolha uma Área...
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="UX Design">Ux Design</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="birthDate" className="form-label">
              Data de Nascimento <span>*</span>
            </label>
            <input
              className="form-control"
              id="birthDate"
              name="birthDate"
              type="date"
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Estado Civil
            </label>
            <select id="" className="form-select" defaultValue={"default"}>
              <option value="default" disabled>
                Atualmente estou...
              </option>
              <option value="solteiro (a)">Solteiro (a)</option>
              <option value="casado (a)">Casado (a)</option>
              <option value="viúvo (a)">Viúvo (a)</option>
              <option value="divorciado (a)">Divorciado (a)</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Gênero
            </label>
            <select id="" className="form-select" defaultValue={"default"}>
              <option value="default" disabled>
                Meu gênero é...
              </option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="prefiro não dizer">Prefiro não dizer</option>
            </select>
          </div>

          <div className="col-md-2">
            <label htmlFor="" className="form-label">
              Cep <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Apenas números"
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Rua
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-2">
            <label htmlFor="" className="form-label">
              Número <span>*</span>
            </label>
            <input type="text" className="form-control" required />
          </div>

          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Bairro
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Cidade
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-2">
            <label htmlFor="" className="form-label">
              Estado
            </label>
            <select id="" className="form-select" defaultValue={"default"}>
              <option value="default" disabled>
                Seu estado...
              </option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá </option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal </option>
              <option value="ES">Espírito Santo </option>
              <option value="GO">Goiás </option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso </option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará </option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco </option>
              <option value="PI">Piauí </option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo </option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="" className="form-label">
              Telefone 1
            </label>
            <input type="tel" className="form-control" />
          </div>
          <div className="col-md-3">
            <label htmlFor="" className="form-label">
              Telefone 2
            </label>
            <input type="tel" className="form-control" />
          </div>

          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Celular <span>*</span>
            </label>
            <input type="tel" className="form-control" />
          </div>

          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              LinkedIn
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-4">
            <label htmlFor="" className="form-label">
              Email <span>*</span>
            </label>
            <input type="email" className="form-control" required />
          </div>

          <h4>Documentos</h4>
          <hr />

          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Identidade <span>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              required
              placeholder="Apenas números"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              CPF <span>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              required
              placeholder="Apenas números"
            />
          </div>

          <div className="col-6">
            <div className="form-check">
              <label htmlFor="" className="form-check-label">
                Possui habilitação?
              </label>
              <input type="checkbox" className="form-check-input"></input>
            </div>
          </div>

          <div className="col-6">
            <div className="form-check">
              <label htmlFor="" className="form-check-label">
                Possui veículo?
              </label>
              <input type="checkbox" className="form-check-input"></input>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-center">
            <Button type="submit" value="Cadastrar"></Button>
          </div>
        </form>
      </S.FormWrapper>
    </>
  );
}
