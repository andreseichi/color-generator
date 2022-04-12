import styled from 'styled-components';

interface InputProps {
  error: boolean;
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;

export const FormContainer = styled.main`
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: 2rem;
`;

export const Title = styled.h2`
  margin-bottom: 0;
  margin-right: 2rem;
`;

export const FormStyled = styled.form``;

export const Input = styled.input<InputProps>`
  border-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;

  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;

  border: ${({ error }) => (error ? '2px solid var(--clr-red-dark)' : '')};
`;

export const Button = styled.button`
  background: var(--clr-primary-5);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-color: transparent;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  text-transform: capitalize;
  color: var(--clr-white);
  cursor: pointer;
`;

export const Colors = styled.section`
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));

  width: 100%;
`;
