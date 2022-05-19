import Nav from "../../components/nav";
import Footer from "../../components/footer";

let Contato = {
  render: async () => {
    let view = `
    ${Nav}
    <div>
      <h1>Contato</h1>
      <form id="contact">
        <input type="text" id="name" placeholder="Seu Nome">
        <input type="text" id="phone" placeholder="Seu Telefone">
        <input type="submit" value="Enviar">
      </form>
    </div>
    ${Footer}
    `;

    return view;
  },
  after_render: async () => {
    let form = document.getElementById("contact");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let userName = document.getElementById('name').value,
        userPhone = document.getElementById('phone').value

      alert('Enviado!');
    })
  }
};

export default Contato;