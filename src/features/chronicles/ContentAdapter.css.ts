import { globalStyle, style } from '@vanilla-extract/css'

export const ContentWrapperStyled = style({})

export const ContentStyled = style({
  maxWidth: '48em',
  padding: '.8em',
  margin: 'auto'
})

globalStyle(`${ContentStyled} h1`, {
  fontSize: '2em',
  padding: '.7em 0',
  fontWeight: 'normal'
})

globalStyle(`${ContentStyled} a`, {
  textDecoration: 'none',
  color: 'red'
})

globalStyle(`${ContentStyled} a:hover`, {
  textDecoration: 'wavy underline'
})
