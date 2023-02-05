import './styles.css';
import kickass from '../../assets/kick-ass-full.png';
import hitgirl from '../../assets/hit-girl.png';
import Input from '../../components/Input';
import Form from '../../components/Form';
import { useState } from 'react';

export default function Result() {
  const [hours, setHours] = useState(null);
  const [missions, setMissions] = useState([]);

  return(
    <div className='result'>
      <p>Adicione uma lista de chamados da Polícia de Nova Iorque, 
        acompanhados de seu nível de urgência numa escala de 1 a 10 e distância em km a partir do QG, 
        além da quantidade total de horas que serão gastas na patrulha de hoje.
      </p>
      <img src={ kickass } className='kick-ass' />
      <img src={ hitgirl } className='hit-girl' />
      <Input customStyles={ {
        marginTop: '1.5rem',
      } } type='number' label='Tempo da missão' input={ hours } placeholder='Total de horas' onChange={ (value) => setHours(value) } />
      <button>Ver resultado</button>
      <Form  onSubmit={ (mission) => {
        setMissions([mission, ...missions])
        const lastMission = document.querySelector('#last-item')
        lastMission?.scrollIntoView({ behavior: 'smooth' })
      } }/>
      <h2>Lista de chamados:</h2>
      {
        missions.map((mission, index) => {
          return(
            <div className='call-container' id={ index === missions.length-1 ? 'last-item' : '' } >
              <p>Chamado: { mission.call }</p>
              <p>Distância: { mission.distance }</p>
              <p>Urgência: { mission.urgency }</p>
            </div>
          );
        })
      }
    </div>
  )
}
