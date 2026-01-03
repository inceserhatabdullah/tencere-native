import { Text as RNText, TextProps } from 'react-native';

type Props = TextProps;

export function Text(props: Props) {
  return (
    <RNText {...props} style={[props.style, { fontFamily: 'google-sans' }]} />
  );
}
