import './styles.css';
import kickass from '../../assets/kick-ass-full.png';
import hitgirl from '../../assets/hit-girl.png';
import Input from '../../components/Input';
import Form from '../../components/Form';
import { useState } from 'react';
import Modal from 'react-modal';
import { getResult } from '../../utils/getResult';

export default function Result() {
  const [hours, setHours] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [missions, setMissions] = useState([]);
  const [result, setResult] = useState([]);

  function handleResult() {
    const res = getResult(missions, hours);
    console.log(res);
    setResult(res);
    setModalOpen(true);
  }

  return (
    <div className='result'>
      <p>Adicione uma lista de chamados da Polícia de Nova Iorque,
        acompanhados de seu nível de urgência numa escala de 1 a 10 e distância em km a partir do QG,
        além da quantidade total de horas que serão gastas na patrulha de hoje.
      </p>
      <img src={kickass} className='kick-ass' />
      <img src={hitgirl} className='hit-girl' />
      <Input customStyles={{
        marginTop: '1.5rem',
      }} type='number' label='Tempo da missão' input={hours} placeholder='Total de horas' onChange={(value) => setHours(value)} />
      <button onClick={() => handleResult()}>Ver resultado</button>
      <Form onSubmit={(mission) => {
        setMissions([mission, ...missions])
        const lastMission = document.querySelector('#last-item')
        lastMission?.scrollIntoView({ behavior: 'smooth' })
      }} />
      <h2>Lista de chamados:</h2>
      {
        missions.map((mission, index) => {
          return (
            <div className='call-container' id={index === missions.length - 1 ? 'last-item' : ''} >
              <p>Chamado: {mission.call}</p>
              <p>Distância: {mission.distance}</p>
              <p>Urgência: {mission.urgency}</p>
            </div>
          );
        })
      }
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <div className='result-modal-content'>
          <p>Estão listadas abaixo as missões que devem ser priorizadas para defender melhor a cidade
            considerando a urgência dos chamados. Foi considerada a velocidade de 80km/h. </p>
          <div className='missions-list'>
            {missions.map((mission, index) => {
                if(!result.some((item) => item === index)) return null
                return (
                  <div>
                    <p>Chamado: {mission.call}</p>
                    <p>Urgência: {mission.urgency}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </Modal>
    </div>
  )
}
