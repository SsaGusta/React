import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {

    return (<div classname='colaborador'>
        <div classname='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div classname='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador