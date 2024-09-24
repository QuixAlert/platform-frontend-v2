// PinInput.tsx
import styled from 'styled-components';

const PinInput: React.FC<PinInputProps> = ({ id, prevId, nextId, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
    
    if (value) {
      const nextElement = document.getElementById(nextId);
      if (nextElement) {
        nextElement.focus();
      }
    } else {
      const prevElement = document.getElementById(prevId);
      if (prevElement) {
        prevElement.focus();
      }
    }
  };

  return (
    <Input
      id={id}
      type="text"
      maxLength={1}
      onChange={handleChange}
      autoFocus
    />
  );
};

export default PinInput;

interface PinInputProps {
    id: string;
    prevId?: string;
    nextId?: string;
    onChange: (value: string) => void;
  }
  
  const Input = styled.input`
    width: 3rem;  // Adjust width as needed
    height: 3rem; // Adjust height as needed
    text-align: center;
    font-size: 1.5rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s;
  
    &:focus {
      border-color: #269996; // Change this to your desired color
      outline: none;
    }
  `;