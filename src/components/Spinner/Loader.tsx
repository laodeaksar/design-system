import Flex from '../Flex';
import { LoaderProps } from './loaders/types';

export function Loader(props: LoaderProps) {
  const { size, ...rest } = props;

  return <Flex gap={2}>Test</Flex>;
}
