import { FormEvent, useEffect, useState } from 'react';
import { SingleColor } from '../SingleColor';

import Values from 'values.js';

import { SingleColorType } from '../../types/color';

import {
  Container,
  FormContainer,
  Title,
  FormStyled,
  Input,
  Button,
  Colors,
} from './styles';

export function Form() {
  const [color, setColor] = useState('#DA00F0');
  const [error, setError] = useState(false);
  const [list, setList] = useState<SingleColorType[]>([]);

  useEffect(() => {
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Color Generator</Title>
        <FormStyled onSubmit={handleSubmit}>
          <Input
            type="text"
            value={color}
            placeholder="#DA00F0"
            error={error}
            onChange={(event) => setColor(event.target.value)}
          />
          <Button type="submit">submit</Button>
        </FormStyled>
      </FormContainer>

      <Colors>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              hexColor={color.hex}
              index={index}
            />
          );
        })}
      </Colors>
    </Container>
  );
}
