import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  max-width: 1100px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 36px;

    color: ${({ theme }) => theme.COLORS.PINK};

    .buttonHeader {
      color: ${({ theme }) => theme.COLORS.PINK};
      background: none;
      border: none;
    }

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
      gap: 10px;
    }
  }

  #movies {
    margin: 40px 0;

    display: flex;
    justify-content: space-between;
    gap: 56px;
  }

  .tags {
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
    border-radius: 8px;

    display: flex;
    justify-content: flex-start;
    gap: 24px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
`
