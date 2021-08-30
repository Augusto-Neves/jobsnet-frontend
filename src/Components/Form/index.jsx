import axios from "axios";
import React from "react";
import { useState } from "react";
import * as S from "./styled";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const [form, setForm] = useState({
    identity: "",
    cpf: "",
    name: "",
    jobOpportunity: "",
    birthDate: "",
    cellPhone: "",
    phone1: "",
    phone2: "",
    linkedin: "",
    email: "",
    gender: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    maritalStatus: "",
    hasLicence: false,
    hasVehicle: false,
  });

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post(
        "https://backendjobsnet.herokuapp.com/register",
        form
      );
      if (user.status === 200) {
        toast.success("Cadastro Realizado com sucesso", {
          duration: 6000,
        });
      }
    } catch (error) {
      setCpfError(true);
      toast.error("Houve algum erro no cadastro", {
        duration: 6000,
      });
    }
  };

  const [cpfError, setCpfError] = useState(false);

  const fetchAddress = async () => {
    const address = await axios.get(
      `https://viacep.com.br/ws/${form.cep}/json/`
    );
    setForm({
      ...form,
      street: address.data.logradouro,
      neighborhood: address.data.bairro,
      city: address.data.localidade,
      state: address.data.uf,
    });
  };

  return (
    <>
      <S.FormWrapper>
        <div className="row g-3">
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
              }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="jobOpportunity" className="form-label">
              Vaga pretendida <span>*</span>
            </label>
            <select
              id="jobOpportunity"
              name="jobOpportunity"
              className="form-select"
              required
              defaultValue={""}
              onChange={(e) => {
                setForm({ ...form, jobOpportunity: e.target.value });
              }}
            >
              <option value="" disabled>
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
              placeholder="00/00/0000"
              required
              datatype={form.birthDate}
              onChange={(e) => {
                setForm({ ...form, birthDate: e.target.value });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="maritalStatus" className="form-label">
              Estado Civil
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              className="form-select"
              defaultValue={""}
              onChange={(e) => {
                setForm({ ...form, maritalStatus: e.target.value });
              }}
            >
              <option value="" disabled>
                Atualmente estou...
              </option>
              <option value="solteiro (a)">Solteiro (a)</option>
              <option value="casado (a)">Casado (a)</option>
              <option value="viúvo (a)">Viúvo (a)</option>
              <option value="divorciado (a)">Divorciado (a)</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="gender" className="form-label">
              Gênero
            </label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              defaultValue={"default"}
              onChange={(e) => {
                setForm({ ...form, gender: e.target.value });
              }}
            >
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
            <label htmlFor="cep" className="form-label">
              Cep <span>*</span>
            </label>
            <input
              id="cep"
              name="cep"
              type="text"
              className="form-control"
              maxLength="8"
              minLength="8"
              placeholder="Apenas números"
              required
              onBlur={() => {
                fetchAddress();
              }}
              value={form.cep}
              onChange={(e) => {
                setForm({ ...form, cep: e.target.value });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="street" className="form-label">
              Rua
            </label>
            <input
              id="street"
              name="street"
              type="text"
              className="form-control"
              value={form.street}
              onChange={(e) => {
                setForm({ ...form, street: e.target.value });
              }}
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="number" className="form-label">
              Número <span>*</span>
            </label>
            <input
              id="number"
              name="number"
              type="text"
              className="form-control"
              required
              value={form.number}
              onChange={(e) => {
                setForm({ ...form, number: e.target.value });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="neighborhood" className="form-label">
              Bairro
            </label>
            <input
              id="neighborhood"
              name="neighborhood"
              type="text"
              className="form-control"
              value={form.neighborhood}
              onChange={(e) => {
                setForm({ ...form, neighborhood: e.target.value });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="city" className="form-label">
              Cidade
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="form-control"
              value={form.city}
              onChange={(e) => {
                setForm({ ...form, city: e.target.value });
              }}
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="state" className="form-label">
              Estado
            </label>
            <select
              id="state"
              name="state"
              className="form-select"
              value={form.state}
              onChange={(e) => {
                setForm({ ...form, state: e.target.value });
              }}
            >
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
            <label htmlFor="phone1" className="form-label">
              Telefone 1
            </label>
            <input
              id="phone1"
              name="phone1"
              type="tel"
              className="form-control"
              value={form.phone1}
              onChange={(e) => {
                setForm({ ...form, phone1: e.target.value });
              }}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="phone2" className="form-label">
              Telefone 2
            </label>
            <input
              id="phone2"
              name="phone2"
              type="tel"
              className="form-control"
              value={form.phone2}
              onChange={(e) => {
                setForm({ ...form, phone2: e.target.value });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="cellPhone" className="form-label">
              Celular <span>*</span>
            </label>
            <input
              id="cellPhone"
              name="cellPhone"
              type="tel"
              className="form-control"
              required
              value={form.cellPhone}
              onChange={(e) => {
                setForm({ ...form, cellPhone: e.target.value });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="linkedin" className="form-label">
              LinkedIn
            </label>
            <input
              id="linkedin"
              name="linkedin"
              type="text"
              className="form-control"
              value={form.linkedin}
              onChange={(e) => {
                setForm({ ...form, linkedin: e.target.value });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              Email <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              required
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
            />
          </div>

          <h4>Documentos</h4>
          <hr />

          <div className="col-md-6">
            <label htmlFor="identity" className="form-label">
              Identidade <span>*</span>
            </label>
            <input
              id="identity"
              name="identity"
              type="text"
              className="form-control"
              minLength="8"
              maxLength="8"
              required
              placeholder="Apenas números"
              value={form.identity}
              onChange={(e) => {
                setForm({ ...form, identity: e.target.value });
              }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="cpf" className="form-label">
              CPF <span>*</span>
            </label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              className="form-control"
              minLength="11"
              maxLength="11"
              required
              placeholder="Apenas números"
              value={form.cpf}
              onChange={(e) => {
                setForm({ ...form, cpf: e.target.value });
              }}
            />
          </div>

          <div className="col-6">
            <div className="form-check">
              <label htmlFor="hasLicence" className="form-check-label">
                Possui habilitação?
              </label>
              <input
                id="hasLicence"
                name="hasLicence"
                type="checkbox"
                className="form-check-input"
                checked={form.hasLicence}
                onChange={(e) => {
                  setForm({ ...form, hasLicence: e.target.checked });
                }}
              />
            </div>
          </div>

          <div className="col-6">
            <div className="form-check">
              <label htmlFor="hasVehicle" className="form-check-label">
                Possui veículo?
              </label>
              <input
                id="hasVehicle"
                name="hasVehicle"
                type="checkbox"
                className="form-check-input"
                checked={form.hasVehicle}
                onChange={(e) => {
                  setForm({ ...form, hasVehicle: e.target.checked });
                }}
              />
            </div>
          </div>

          <div className="col-12 d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => createCandidate()}
            >
              Cadastrar
            </button>
            <br />
            <Toaster />
            <S.ErrorSpan isError={cpfError}>Houve algum erro</S.ErrorSpan>
          </div>
        </div>
      </S.FormWrapper>
    </>
  );
}
