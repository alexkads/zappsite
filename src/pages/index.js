import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Meu Cartão de Visitas</div>    
      
      <br />

      <Link href="/downloads/MKT_Filippi_Arruda.pdf">
        <a>Baixar</a>
      </Link> 
    </>
  );
}
