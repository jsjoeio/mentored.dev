import React from 'react'
import InputText from '../atoms/InputText'
import InputRadio from '../atoms/InputRadio'

const Form = ({ state, input, handleOnChange, value, transition }) => {
  return (
    <form
      style={{ marginBottom: '0' }}
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      {input['TYPE'] === 'text' && (
        <InputText
          input={input}
          value={value}
          onChange={handleOnChange}
          transition={transition}
        />
      )}
      {input['TYPE'] === 'radio' && (
        <InputRadio
          currentValue={state[input['KEY']]}
          input={input}
          value={value}
          onChange={handleOnChange}
          transition={transition}
        />
      )}
    </form>
  )
}
export default Form
