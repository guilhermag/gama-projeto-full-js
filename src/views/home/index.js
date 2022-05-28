import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Bulba from '../../img/bulba.png'

let Home = {
  render: async () => {
    let view = `
      ${Nav}
      <div class="container">
        <h1>Home page</h1>
        
        <div class="card">
          <p class="title">Este é o meu CARD</p>
          <img src=${Bulba} alt="pokemon bulba" class="image">
          <button class="button _danger">Clique aqui que nada acontece</button>
        </div>
      </div>
      ${Footer}
    `
    return view
  },
  after_render: async () => {}
};

export default Home;