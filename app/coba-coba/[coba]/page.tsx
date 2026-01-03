import { datafoto } from "@/app/data/datafoto";
import Isianalbum from "./coba";

export function generateStaticParams() {
  return Object.keys(datafoto).map((isi) => ({
    coba: isi,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ coba: string }>;
}) {
  const { coba } = await params;

  return <Isianalbum fotooo={coba} />;
}
