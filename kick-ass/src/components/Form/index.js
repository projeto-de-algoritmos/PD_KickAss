import { useState } from 'react';
import Input from '../Input';
import './styles.css';

export default function Form({ onSubmit }) {
  const [item, setItem] = useState({});

  return(
    <form onSubmit={ (e) => {
      e.preventDefault();
      onSubmit(item);
      setItem({
        call: '',
        distance: '',
        urgency: ''
      });
    } }>
      <Input input={ item.call } label='Chamado' placeholder='Identificação do chamado' onChange={ (value) => setItem({ ...item, call:value }) } />
      <Input type='number' input={ item.distance } label='Distância' placeholder='Distância do QG' onChange={ (value) => setItem({ ...item, distance:value }) } />
      <Input type='number' max='10' input={ item.urgency } label='Urgência' placeholder='Nível de urgência' onChange={ (value) => setItem({ ...item, urgency:value }) } />
      <button type='submit' >Adicionar chamado</button>
    </form>
  );
}