import Link from "next/link";

interface MainBtnMenu {
  id: string;
  title: string;
  category: string;
  address: string;
}

export default async function Button() {
  const response = await fetch("http://localhost:3333/btnMainMenus");
  const data = await response.json();
  console.log(data);
  return (
    <main>
      <h1>Testando esse componente</h1>
      {data.map((btn: MainBtnMenu) => (
        <div className="btn" key={btn.id}>
          <button>
            <Link href={`/submenu/${btn.address}`}>{btn.title}</Link>
          </button>
        </div>
      ))}
    </main>
  );
}
