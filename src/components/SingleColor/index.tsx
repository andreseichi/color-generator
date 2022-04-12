import { Article, Text } from './styles';

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
  const background = rgb.join(',');
  const hexValue = `#${hexColor}`;

  return (
    <Article backgroundColor={background}>
      <Text index={index}>{weight}%</Text>
      <Text index={index}>{hexValue}</Text>
    </Article>
  );
}
