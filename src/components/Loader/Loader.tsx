import { Vortex } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={[
        'Aqua',
        'Aquamarine',
        'DarkTurquoise',
        'Teal',
        'CadetBlue',
        'Cyan',
      ]}
    />
  );
};

export default Loader;