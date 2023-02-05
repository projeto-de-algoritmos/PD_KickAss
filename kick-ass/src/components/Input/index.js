import './styles.css';

export default function Input({ type, label, input, placeholder, onChange, customStyles, max }) {
  return(
    <div className='input-container' style={ customStyles }>
      <label>{ label }</label>
      <input min='0' max={ max } required type={ type || 'text' } value={ input } placeholder={ placeholder } onChange={ (e) => onChange(e.target.value) } />
    </div>
  );
}