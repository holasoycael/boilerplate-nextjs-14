import * as Styled from 'styled-components'

export type PushbuttonProps = {
  children?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
  currentRef?: React.RefObject<HTMLButtonElement>
  style?: React.CSSProperties
  styled?: Styled.StyledComponent<
    'button',
    Styled.DefaultTheme,
    // eslint-disable-next-line @typescript-eslint/ban-types
    {},
    never
  >
  role?: string
  useWidth?: string | number
  useHeight?: string | number
  borderRadius?: string | number
}
