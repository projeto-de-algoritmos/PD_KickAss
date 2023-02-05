import './styles.css';
import kickass from '../../assets/kick-ass-full.png';
import hitgirl from '../../assets/hit-girl.png';
import Input from '../../components/Input';
import Form from '../../components/Form';
import { useState } from 'react';
import Modal from 'react-modal';
import { getResult } from '../../utils/getResult';

export default function Result() {
  const [distance, setDistance] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [missions, setMissions] = useState([]);
  const [result, setResult] = useState([]);

  function handleResult() {
    const res = getResult([{}, ...missions], distance);
    console.log(res);
    setResult(res);
    setModalOpen(true);
  }

  return (
    <div className='result'>
      <p>Adicione uma lista de chamados da Polícia de Nova Iorque,
        acompanhados de seu nível de urgência numa escala de 0 a 10 e distância em km a partir do QG,
        além da distância máxima que poderá ser percorrida na patrulha de hoje.
      </p>
      <img alt='img' src={kickass} className='kick-ass' />
      <img alt='img' src={hitgirl} className='hit-girl' />
      <Input customStyles={{
        marginTop: '1.5rem',
      }} type='number' label='Distância máxima em km' input={distance} placeholder='Distância total' onChange={(value) => setDistance(value)} />
      <button onClick={() => handleResult()}>Ver resultado</button>
      <Form onSubmit={(mission) => {
        setMissions([mission, ...missions])
        window.scrollTo(0, document.body.scrollHeight*4)
      }} />
      <h2>Lista de chamados:</h2>
      {
        missions.map((mission) => {
          if(!mission.call) return null
          return (
            <div key={ mission.call } className='call-container' >
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
            considerando a urgência dos chamados. </p>
          <div className='missions-list'>
            {result.map((mission) => {
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
