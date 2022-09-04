import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  width: 300px;
`

export const ThumbnailImg = styled.img`
  width: 300px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 16px;
  margin-right: 8px;
`

export const VideoData = styled.div``

export const Title = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 15px;
  margin: 0px;
  margin-top: 16px;
  color: ${props => props.color};
`
export const TitleName = styled.p`
  margin-top: 5px;
  color: #7e858e;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const TimeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  margin-top: 5px;
`
export const View = styled.p`
  margin: 0px;
  margin-top: 5px;
  color: #7e858e;
  margin-right: 10px;
`

export const Time = styled.p`
  margin: 0px;
  margin-top: 5px;
  color: #7e858e;
`
