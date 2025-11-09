import { useParams } from "react-router-dom";

export default function IndexDynamic() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Página dinâmica</h1>
      <p className="mt-2">
        slug: <code>{slug}</code>
      </p>
    </main>
  );
}
