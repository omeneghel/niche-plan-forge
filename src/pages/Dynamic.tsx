import { useParams } from 'react-router-dom'

export default function Dynamic() {
  const { slug } = useParams()
  return <main className="p-6 max-w-3xl mx-auto text-xl">Página: {slug}</main>
}
