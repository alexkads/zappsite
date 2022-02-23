import Link from "next/link";
import PDFViewer from "pdf-viewer-reactjs";

export default function Home() {
  return (
    <>
      <div>Meu Cartão de Visitas</div>
      
      <br />

      <PDFViewer
        document={{
          url: "/downloads/MKT_Filippi_Arruda.pdf",
        }}
      />

      <br />

      <Link href="/downloads/MKT_Filippi_Arruda.pdf">
        <a>Baixar</a>
      </Link> 
    </>
  );
}
