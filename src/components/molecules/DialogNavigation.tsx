import React from "react";
import styled, { keyframes } from "styled-components";
import Next from "../atoms/Next";
import Previous from "../atoms/Previous";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Container = styled.div<{ hasPrevious: boolean }>`
  display: flex;
  flex-direction: ${props => (props.hasPrevious ? "row" : "row-reverse")};
  justify-content: space-between;
  transition: all 0.3s ease;
  animation: ${slideUp} 500ms ease;
`;

export interface DialogNavigationProps {
  hasNext: boolean;
  hasPrevious: boolean;
  transition: () => void;
  transitionPrevious: () => void;
  formValue: string;
  showForm: boolean;
}

const DialogNavigation: React.FC<DialogNavigationProps> = ({
  hasNext,
  hasPrevious,
  transition,
  transitionPrevious,
  formValue,
  showForm,
}) => (
  <Container hasPrevious={hasPrevious}>
    {hasPrevious && <Previous transition={transition} transitionPrevious={transitionPrevious} />}
    {hasNext && (
      <Next transition={transition} transitionPrevious={transitionPrevious} formValue={formValue} showForm={showForm} />
    )}
  </Container>
);

export default DialogNavigation;
