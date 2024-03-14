// styles
import * as S from './styles'

import { PushbuttonProps } from './types'

const Pushbutton = ({
  children,
  type = 'button',
  currentRef,
  onClick,
  useWidth,
  useHeight,
  borderRadius,
  style,
  styled,
  ...props
}: PushbuttonProps) => (
  <S.Wrapper
    type={type}
    {...(currentRef ? { ref: currentRef } : {})}
    {...(typeof useWidth === 'undefined' ? {} : { width: useWidth })}
    {...(typeof useHeight === 'undefined' ? {} : { height: useHeight })}
    {...(typeof borderRadius === 'undefined' ? {} : { borderRadius })}
    {...(style ? { style } : {})}
    {...(styled ? { as: styled } : {})}
    onClick={() => onClick && onClick()}
    {...props}
  >
    {!!children && children}
  </S.Wrapper>
)

export default Pushbutton
