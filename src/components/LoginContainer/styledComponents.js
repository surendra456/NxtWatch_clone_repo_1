import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const LogoElement = styled.img`
  width: 150px;
  height: 33px;
  margin-bottom: 25px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Label = styled.label`
  color: #475569;
  font-family: 'roboto';
  font-weight: 500;
  font-size: 13px;
  margin-top: 6px;
  margin-bottom: 6px;
`

export const InputElement = styled.input`
  color: #475569;
  font-family: 'roboto';
  margin-bottom: 7px;
  border-width: 1px;
  padding: 4px;
  border-color: #f1f1f1;
  min-width: 230px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 18px;
`
export const CheckBox = styled.input`
  margin-right: 25px;
`

export const LabelCheckBox = styled.label`
  color: #000000;
  font-family: 'roboto';
`
export const ButtonElement = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'roboto ';
  border-width: 0px;
  padding: 4px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'roboto';
  margin: 0px;
  margin-bottom: 10px;
  font-size: 12px;
`
