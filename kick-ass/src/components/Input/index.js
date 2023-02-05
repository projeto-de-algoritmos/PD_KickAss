import './styles.css';

export default function Input({ type, label, input, placeholder, onChange, customStyles }) {
  return(
    <div className='input-container' style={ customStyles }>
      <label>{ label }</label>
      <input min='1' type={ type || 'text' } value={ input } placeholder={ placeholder } onChange={ (e) => onChange(e.target.value) } />
    </div>
  );
}