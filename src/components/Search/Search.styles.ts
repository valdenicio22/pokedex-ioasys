import { width } from '@mui/system'
import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.containers.mobile};
    margin: 0 auto;
  `}

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BtnFavorites = styled.button`
  background-color: transparent;
  border: none;
`
