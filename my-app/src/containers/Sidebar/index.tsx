import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Jonas Maia</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>JonasGMaia</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Desenvolvedor Full-stack</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
