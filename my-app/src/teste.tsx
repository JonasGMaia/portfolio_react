import styled from "styled-components";

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

// estamos usando propriedades customizadas então precisa declarar qual a tipagem deles
//a ? acima indica que  a propriedade é opcional caso nao tenha nada a prop será obrigatoria

const Botao = styled.button<BotaoProps>
  `
  background-color: ${props => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'}
  `
// "?" indica um if true nesse caso e ":" indica else e || indica valor padrão caso a propriedade não seja especificada (fallback)

const BotaoPerigo = styled(Botao)
`
  background-color: red;
  color: #fff;

  span{
    text-decoration: line-through;
  }
`

function Teste(){
  return(
  <>
    <Botao fontSize="18px" principal>Aprovar</Botao>
    <Botao principal={false}>Cancelar</Botao>
    <BotaoPerigo as="a" principal>
      <span>Cuidado. Não clique</span>
    </BotaoPerigo>
  </>
  )
}
 //principal é obrigatorio mas as configurações atribuidas de forma mais específica tem preferencia sobre as menos especificas então o botao vai aprarecer vermelho
 // o "as" indica o papel do elemento com uma tag; no caso 'as = "a"' indica que está funcionando como um link
export default Teste
