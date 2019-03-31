import React, { useRef, useEffect } from "react";

const Enter: React.FC<{ onClick: () => void}> = ({ onClick }) => {
  const enterText = useRef<null | HTMLButtonElement>(null);
  useEffect(() => {
    if (enterText.current) {
      enterText.current.focus();
    }
  }, [enterText]);
  return (
    <button ref={enterText} tabIndex={1} onClick={onClick}>
      Enter
    </button>
  );
};

export default Enter;
