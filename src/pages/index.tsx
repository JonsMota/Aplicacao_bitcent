import Finances from "@/components/finances"
import Landing from "@/components/landing"
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext"
import { useContext } from "react"
import Loading from "@/components/templates/Loading"

export default function Home() {
  const { usuario, carregando } = useContext(AutenticacaoContext)

  if(carregando) return <Loading />

  return usuario ? <Finances /> : <Landing />
}
