import styled from 'styled-components'

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.backgroundColor};
`
export const LoaderContainer = styled.div`
  height: 80vh;
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
export const GamingContainerR = styled.div`
  display: flex;
  flex-direction: column;
`

export const Head = styled.h1`
  font-family: 'roboto';
  margin-left: 20px;
  color: ${props => props.color};
`

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.back};
`
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`
