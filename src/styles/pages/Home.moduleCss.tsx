import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media(max-width: 700px) {
    section {
      display: flex;
      flex-wrap: wrap ;
      justify-content: center;
      margin: 0 4rem;
    }
  }
`