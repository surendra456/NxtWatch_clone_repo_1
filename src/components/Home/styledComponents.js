import styled from 'styled-components'

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`
export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const MainContainerHome = styled.div`
   ;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 745vh;
  background-color: ${props => props.backgroundColor};
`
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.backgroundColor};
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: #616e7c;
  border-width: 2px;
  border-style: solid;
  width: 32%;
`
export const SearchInput = styled.input`
  border-width: 0px;
  padding: 2px;
  width: -webkit-fill-available;
  background-color: ${props => props.backgroundColor};
`

export const SearchButton = styled.button`
  border-width: 0px;
  background-color: ${props => props.colorButton};
`
export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const VidoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  height: 80vh;
`

export const ImageTag = styled.img`
  width: 40%;
`
export const FailureHead = styled.h1`
  color: #000000;
  font-family: 'roboto';
`
export const FailurePara = styled.p`
  color: #000000;
  font-family: 'roboto';
`
export const FailureButton = styled.button`
  color: #ffffff;
  font-family: 'roboto';
  background-color: #4f46e5;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 8px;
  border-width: 0px;
  padding-top: 8px;
  border-radius: 8px;
`
export const SearchNotConatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
export const SearchNotImg = styled.img`
  width: 350px;
`

export const SearchNotHead = styled.h1`
  color: #000000;
  font-family: 'roboto';
`
export const SearchNotPara = styled.p`
  color: #000000;
  font-family: 'roboto';
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-wrap: wrap;
`
