import Link from "next/link"
export default function MenuTop(params) {
    const menus = [
        {
            nome: "Inicial",
            link: "/"
        },
        {
            nome: "Manutenção",
            link: "/manutencao"
        },
        {
            nome: "Serviços",
            link: "/servicos"
        }
    ]
    return (
        <div>
            <nav className="flex list-none justify-between	w-1/4">
                {menus.map((e) =>(
                    <Link className=" p-2 hover:bg-black hover:text-neutral-200	" key={e.nome} href={e.link}>
                        <li >{e.nome}</li>
                    </Link>
                ))}

            </nav>
        </div>
    )
};
