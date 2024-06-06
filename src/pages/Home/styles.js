import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
`

export const Content = styled.div`
  padding: 0 123px;
  overflow-y: auto;
`


