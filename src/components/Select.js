import { array, func, string } from 'prop-types'

const Select = ({ id, onChange, options, text }) => {
  return (
    <div>
      {options && options.length ? (
        <>
          <label>{text}</label>
          <select onChange={(event) => onChange(id, event.target.value)}>
            {options.map((option) => (
              <option key={option.value}>{option.name}</option>
            ))}
          </select>
        </>
      ) : null}
    </div>
  )
}

Select.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  options: array.isRequired,
  text: string.isRequired
}

export default Select
