import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapp } from './Loader.module';

export default function Loader() {
  return (
    <LoaderWrapp>
      <RotatingLines
        strokeColor="#032541"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderWrapp>
  );
}
