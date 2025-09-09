import './time.css';

const Time = (props) => {
    const css = { borderColor: props.corSecundaria }
    return (
        
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    );
}


export default Time;