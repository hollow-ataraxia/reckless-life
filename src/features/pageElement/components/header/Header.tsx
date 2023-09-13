import { FunctionComponent } from 'react'
import { HeaderStyle } from './Header.css.ts'

type Props = {
  textDisplay: string
}

const Header: FunctionComponent<Props> = ({ textDisplay }) => {
  return (
    <header className={HeaderStyle}>
      <div>{textDisplay}</div>
    </header>
  )
}

export default Header
