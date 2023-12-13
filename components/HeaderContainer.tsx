import Papa from "papaparse";
import { FormEvent, useState } from "react";

interface Idados {
  id: string;
  cnpj: string;
}

export default function HeaderContainer() {
  const [cnpBase, setCnpjBase] = useState<Idados[]>([]);
  const [inputToken, setInputToken] = useState("");
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

  function onEnviarToken(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (inputToken.trim() === "") return;
    console.log(inputToken);
  }
  function getInputToken(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    if (inputToken.trim() === "") return;
    console.log(inputToken);
  }

  return (
    <section className="flex min-w-full px-3">
      <div className="flex min-w-full min-h-full bg-slate-100 rounded-md">
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
            className={`flex p-2.5 w-full text-sm text-gray-900 bg-gray-50
  rounded-lg`}
            placeholder="Insira o Token..."
            value={strtoken}
            onChange={(e) => setInputToken(e.target.value)}
          ></textarea>
          <button
            onClick={(e) => onEnviarToken}
            className="botao botao-elevated ml-3 h-full"
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
