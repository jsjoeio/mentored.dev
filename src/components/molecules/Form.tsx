import React from 'react'
import InputText from '../atoms/InputText'
import InputRadio from '../atoms/InputRadio'

const Form = ({ state, input, handleOnChange, value }) => {
  return (
    <form>
      {input['TYPE'] === 'text' && (
        <InputText
          questionKey={input['KEY']}
          value={value}
          onChange={handleOnChange}
        />
      )}
      {input['TYPE'] === 'radio' && (
        <InputRadio
          currentValue={state[input['KEY']]}
          options={input['OPTIONS']}
          questionKey={input['KEY']}
          value={value}
          onChange={handleOnChange}
        />
      )}
    </form>
  )
}
export default Form
