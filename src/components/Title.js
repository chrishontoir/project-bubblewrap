import styled from 'styled-components';


const StyledTitle = styled.h1`
  margin: 0;
  text-align: left;
  font-size: 70px;
  padding: 0;
  line-height: 60px;
  user-select: none;

  & span {
    &.primary {
      color: var(--primaryBackgroundColor);
    }

    &.secondary {
      color: var(--secondaryBackgroundColor);
    }

    &.error {
      color: var(--errorFontColor);
    }
  }
`;

const Title = ({ children = '', ...props }) => {
  const title = children.split('');
  const first = title.shift();
  const last = title.pop();

  const theme = (props.primary && 'primary') || (props.secondary && 'secondary') || (props.error && 'error') || '';
  return (
    <StyledTitle {...props} aria-label='title'><span className={theme}>{first}</span>{title}<span className={theme}>{last}</span></StyledTitle>
  );
};

export default Title;
