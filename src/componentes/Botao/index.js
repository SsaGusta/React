import 'Botao.css';

const Botao = (props) => {
    return (
        <button className="GERAR CARD">
            {props.texto}
        </button>
    )
}

export default Botao;