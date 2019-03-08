import React from 'react'
import InputText from '../atoms/InputText'

const Form = ({ name, handleOnChange, value }) => {
  return (
    <form>
      <InputText name={name} value={value} onChange={handleOnChange} />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  )
}
export default Form
