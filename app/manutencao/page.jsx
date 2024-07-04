"use client";
import { useState } from "react";
import InnerHTML from '@/app/components/inject/InnerHTML';

export default function Manutencao() {
    const [texto, setTexto] = useState('Selecione a quantidade');
    const [classe, setClasse] = useState('bg-blue-500 hover:bg-blue-700');
    const [aperta, setAperta] = useState('');
    
    const geradorLorem = (qtd) => {
        const muitos = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus necessitatibus commodi eos maxime excepturi, dolore eaque quibusdam. Quam, iste fugit. Repellat, aut! Facilis quisquam beatae laboriosam numquam iste voluptatibus? </p>`;
        let lorem = [];

        for (let i = 0; i < qtd; i++) {
            lorem.push(muitos);
        }

        if (qtd === 0) {
            setTexto("Selecione a quantidade");
        } else {
            setTexto(lorem);
        }
    };

    return (
        <div>
            <h2>Manutenção</h2>
            <br />
            {aperta}
            <br />
            <div className="flex list-none justify-between w-1/2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => geradorLorem(0)}>0</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => geradorLorem(5)}>5</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => geradorLorem(10)}>10</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => geradorLorem(15)}>15</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => geradorLorem(100)}>100</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setClasse("bg-blue-200")}>Claro</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setClasse("bg-blue-500")}>Escuro</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setClasse("")}>Remove</button>
                <button  className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded" onClick={() => setAperta("Apertou OK")}>OK</button>
            </div>
            <br />
            <div className={`${classe} p-2 text-justify`}>
                {Array.isArray(texto) ? (
                    <InnerHTML htmlContent={texto} />
                ) : (
                    <p>{texto}</p>
                )}
            </div>
        </div>
    );
};
