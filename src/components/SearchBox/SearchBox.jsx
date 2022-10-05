import { Wrapper, Input, Icon } from 'components/SearchBox/SearchBox.module';

export default function SearchBox({ value, onChange }) {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
}
