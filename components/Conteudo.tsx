export default function Conteudo() {
  return (
    <section className="flex min-w-full p-3">
      <div className="flex min-w-full min-h-[calc(100vh_-_14.5rem)] p-3">
        <div className="grid grid-cols-2 w-full gap-4">
          <div className="border-solid border-zinc-400 rounded-md overflow-hidden p-1 w-1/2">
            <table className="flex flex-col justify-center w-1/2">
              <thead className="min-w-full">
                <tr className="min-w-full">
                  <th className="min-w-full bg-slate-900 text-white font-bold justify-center">
                    CNPJ-BASE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="min-w-full">
                  <td>00000000000000</td>
                </tr>
                <tr className="min-w-full">
                  <td>1111111111111111</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table>
            <thead>
              <tr>
                <th className="px-3 py-2 text-sm font-bold text-left text-slate-800 bg-slate-200">
                  CNPJ-BASE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 text-sm text-left text-slate-800 bg-slate-200">
                  00000000000000
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-sm text-left text-slate-800 bg-slate-200">
                  1111111111111111
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
