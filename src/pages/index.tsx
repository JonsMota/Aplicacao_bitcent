import Finances from "@/components/finances"
import Landing from "@/components/landing"
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext"
import { useContext } from "react"

export default function Home() {
  const { usuario } = useContext(AutenticacaoContext)

  return usuario ? <Finances /> : <Landing />
}
