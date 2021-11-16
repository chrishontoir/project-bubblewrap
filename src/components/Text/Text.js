import { StyledText } from './style';

const Text = ({ bold, hideOn, children, color, error }) => {
  const textColor = (error && 'var(--errorFontColor)') || color || 'var(--primaryFontColor)';
  return (
    <StyledText bold={bold} className={hideOn && 'hidden'} textColor={textColor}>{children}</StyledText>
  )
}

export default Text;
