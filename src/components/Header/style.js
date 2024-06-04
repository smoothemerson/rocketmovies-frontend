import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  height: 123px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 9px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300}
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
`
