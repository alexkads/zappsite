import Link from "next/link";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <div>Meu Cartão de Visitas</div>     

      <br />

      <PDFViewer file="/downloads/MKT_Filippi_Arruda.pdf"/>

      <br />

      <Link href="/downloads/MKT_Filippi_Arruda.pdf">
        <a>Baixar</a>
      </Link>
    </>
  );
}
