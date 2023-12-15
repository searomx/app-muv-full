"use client";
import Papa from "papaparse";
import { FormEvent, useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ValidaCnpj from "@/lib/utils/validacnpj";

interface Idados {
  id: string;
  cnpj: string;
}

export default function HeaderContainer() {
  const [cnpBase, setCnpjBase] = useState<Idados[]>([]);
  const [inputCnpjUnico, setCnpjUnico] = useState<string>("");
  const [inputToken, setInputToken] = useState<string>("");
  const toastId = React.useRef(null);
  const strtoken =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6IndvcmxkIiwibWVzc2FnZSI6IlRoYW5rcyBmb3IgdmlzaXRpbmcgbm96emxlZ2Vhci5jb20hIiwiaXNzdWVkIjoxNTU3MjU4ODc3NTI2fQ.NXd7lC3rFLiNHXwefUu3OQ-R203pGfB87-dIrk2S-vqfaygIWFwZKzmGHr6pzYkl2a0HkY0fdwa38yLWu8Zdhg";

  const readDataFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = e.target.files?.[0];
    if (reader) {
      Papa.parse(reader, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          const parsedData = results.data as Idados[];
          setCnpjBase(parsedData);
        },
      });
    }
  };

  async function onEnviarToken() {
    if (inputToken.trim() === "") {
      return;
    }
    const response = await api.post("/api/cnpj", {
      token: inputToken,
    });
  }

  function getInputToken(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    if (inputToken.trim() === "") return;
    console.log(inputToken);
  }

  async function enviarCnpjUnico() {
    if (inputCnpjUnico.trim() === "") {
      return;
    }
    const cnpj_validado = ValidaCnpj(inputCnpjUnico);
    const formata_cnpj = ("00000000000000" + cnpj_validado).slice(-14);
    const response = await api.post("/api/unique", { cnpj: formata_cnpj });
    notify();
  }
  const notify = () => toast("CNPJ Enviado com sucesso!");

  return (
    <section className="flex min-w-full px-3">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="flex min-w-full min-h-full bg-slate-100 rounded-md justify-around items-center">
        <div className="flex p-3">
          <label htmlFor="token" className="sr-only">
            Token
          </label>
          <textarea
            id="token"
            name="token"
            style={{ resize: "none" }}
            cols={80}
            rows={5}
            className={`flex p-2 w-full text-sm text-gray-900 bg-gray-50
  rounded-lg`}
            placeholder="Insira o Token..."
            value={inputToken}
            onChange={(e) => setInputToken(e.target.value)}
          ></textarea>
          <button onClick={onEnviarToken} className="botao botao-elevated ml-3">
            Enviar
          </button>
        </div>
        <div className={`flex mt-4 gap-4`}>
          <input
            accept=".csv"
            id="upload"
            type="file"
            onChange={readDataFile}
          />
        </div>

        <div className={`flex`}>
          <input
            type="text"
            onChange={(e) => setCnpjUnico(e.target.value)}
            value={inputCnpjUnico}
            className={`flex w-full p-2 text-sm text-gray-900 bg-gray-50
												rounded-lg`}
            placeholder="Digite o Cnpj..."
          />
          <div className={`flex ml-1`}>
            <button
              id="btn-enviar-individual"
              onClick={enviarCnpjUnico}
              className="btn btn-blue"
            >
              Enviar Cnpj
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
