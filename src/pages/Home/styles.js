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

  display: flex;
  justify-content: space-between;
`

export const Brand = styled.div`
  h1 {
    font-size: 24px;
    color: ${({ theme}) => theme.COLORS.PINK};
  }
`

export const Search = styled.div`
  width: 600px;
`

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`

export const Head = styled.div`
  height: 123px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 0 123px;
`
