// componente de cabeçalho (classe)
class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="navbar--left">
            <li className="navbar__item"><a href="#" className="navbar__link">Home</a></li>
            <li className="navbar__item"><a href="./pages/eventos.html" className="navbar__link">Eventos</a></li>
            <li className="navbar__item"><a href="./pages/contato.html" className="navbar__link">Contato</a></li>
            <div className="dropdown">
              <button className="dropbtn"><a className="navbar__link">Cursos</a>
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="./cursos/ads.html">Análise e Desenvolvimento de Sistemas</a>
                <a href="./cursos/engenharia.html">Engenharia de Produção</a>
                <a href="./cursos/gestao_ti.html">Gestão em Tecnologia da Informação</a>
                <a href="./cursos/letras.html">Letras</a>
                <a href="./cursos/gestao_publica.html">Gestão Pública</a>
              </div>
            </div>
            <li className="navbar__item"><a href="./pages/login.html" className="navbar__link">Entrar</a></li>
          </div>
          <div className="navbar---right">
            <li className="navbar__item"><a href="./pages/Sobre.html" className="navbar__link">Sobre</a></li>
          </div>
        </nav>
        <section className="intro">

          <figure className="logo">

            <img src="../assets/img/Logo.jpg" alt="Logo do IFSP" />
          </figure>
        </section>
      </header>
    );
  }
}
// componente de texto (função: poderia usar react hooks se houvesse necessidade)
function Text(props) {
  return (
    <>
    <br />
  <p>{props.children}</p>
    <br />
    </>
);
}
function Bold(props) {
  return (<strong>{props.children}</strong>);
}

class MainContent extends React.Component {
  render() {
    return (
      <>
      <Text>O <Bold>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</Bold> - é uma autarquia federal de ensino.</Text>
      <Text>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.</Text>
      <Text>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.</Text>
      <Text>Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação. </Text>
      <Text>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a Distância (EaD).</Text>
      <Text>O IFSP é organizado em diversos campus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo Estado de São Paulo. </Text>
      <Text>Localizado em <Bold>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010</Bold></Text>
      </>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
    <div>
      <br />
      <br />
      <a href="https://www.facebook.com/ifsppirituba" target="_blank">
        <img src="../assets/img/facebook.png" alt="Facebook do IFSP Pirituba" className="img--link" />
    </a>
    <footer>
        <p>IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP: 05110-000 - São Paulo/SP - Contato:
            (011) 2504-0100</p>
    </footer>
    </div>)
  }
}
// app principal, chamando todos os componentes
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainContent />
        <Footer />
      </>
    );
  }
}

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);