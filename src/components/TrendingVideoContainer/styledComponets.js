import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 30px;
`

export const ThumbnailI = styled.img`
  width: 250px;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  height: 139px;
  justify-content: space-around;
`
export const TrendingHead = styled.p`
  font-family: 'roboto';
  color: #000000;
  font-size: 15px;
  margin: 0px;
  color: ${props => props.color};
`

export const TrendingChannel = styled.p`
  font-family: 'roboto';
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => props.paraColor};
`

export const ViwesYears = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Viwe = styled.p`
  font-family: 'roboto';
  font-size: 15px;
  margin-right: 20px;
  color: ${props => props.paraColor};
`

export const Time = styled.p`
  font-family: 'roboto';
  color: ${props => props.paraColor};
`
