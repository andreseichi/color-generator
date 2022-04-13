import { useState } from 'react';
import { Article, Text, Alert } from './styles';

interface SingleColorProps {
  rgb: number[];
  weight: number;
  hexColor: string;
  index: number;
}

export function SingleColor({
  rgb,
  weight,
  hexColor,
  index,
}: SingleColorProps) {
  const [alert, setAlert] = useState(false);
  const background = rgb.join(',');
  const hexValue = `#${hexColor}`;

  return (
    <Article
      backgroundColor={background}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <Text index={index}>{weight}%</Text>
      <Text index={index}>{hexValue}</Text>
      {alert && <Alert>copied to clipboard</Alert>}
    </Article>
  );
}
