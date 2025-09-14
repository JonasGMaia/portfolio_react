import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { Card, LinkBotao } from './styles'



//quando for escrever o estilo do componente junto com o componente ele deve ficar antes do código que retornará esse componente ou em outro arquivo

const Projeto = () => (
  <Card>
    <Titulo>
      Projeto Lista de Tarefas
    </Titulo>
    <Paragrafo tipo="secundario">
      Lista de Tarefas feita com VueJS
    </Paragrafo>
    <LinkBotao>
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
