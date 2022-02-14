import styled from 'styled-components'

export const Button = styled.div`
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`
