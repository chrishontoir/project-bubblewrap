import { forwardRef } from 'react';

import { StyledTextboxContainer, StyledLabel, StyledTextbox } from './style';

const Textbox = forwardRef(({ label, password, onChange, disabled, error }, ref) => {
  return (
    <StyledTextboxContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextbox 
        ref={ref} 
        type={password ? 'password' : 'text'} 
        onChange={onChange} 
        disabled={disabled} 
        error={error}
      />
    </StyledTextboxContainer>
  )
});

export default Textbox;
