import './styles.css';
import logo from '../../assets/kick-ass.png';
import bigdaddy from '../../assets/big-daddy.webp';

export default function Home() {
  return(
    <div className='home' >
      <img src={ logo } />
      <p>Numa noite em Nova Iorque Big Daddy intercepta vários chamados da polícia 
        e se prepara para sair em missão com Kick-Ass e Hit-Girl. 
        <br/> Antes de tudo, Big Daddy utilizará um sistema para ajudá-lo a descobrir para onde ir primeiro
        baseado no nível de urgência do chamado e distância de onde estão. </p>
        <img className='big-daddy' src={ bigdaddy } />
        <a href='/result'>Continuar</a>
    </div>
  )
}
