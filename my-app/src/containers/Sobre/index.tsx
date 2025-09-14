import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde quia quae blanditiis expedita reiciendis incidunt tenetur deserunt, voluptas quis illo laboriosam aliquam dicta quaerat? Deserunt accusamus placeat hic maiores.</Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=JonasGMaia&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JonasGMaia&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
