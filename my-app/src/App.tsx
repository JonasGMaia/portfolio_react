
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import { Conntainer } from './styles'
import EstiloGlobal from './styles'

function App() {


  return(
    <>
      <EstiloGlobal/>

      <Conntainer>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Conntainer>

    </>


)



}

export default App
