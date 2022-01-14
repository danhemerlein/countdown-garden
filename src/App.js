import Closed from 'Closed';
import Footer from 'Footer';
import Garden from 'Garden';
import { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const now = new Date();

const hours = now.getHours();

const showGarden = hours < 21 && hours > 7;

const App = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [height]);

  return (
    <>
      {showGarden ? (
        <Garden footerHeight={height} />
      ) : (
        <Closed footerHeight={height} />
      )}

      <div ref={ref}>
        <Footer />
      </div>

      <Toaster
        toastOptions={{
          style: {
            color: '#000',
            background: '#fff',
            fontSize: '1rem',
            border: '1px solid black',
            borderRadius: '0'
          }
        }}
      />
    </>
  );
};
export default App;
