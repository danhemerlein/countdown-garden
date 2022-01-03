import DateForm from 'DateForm';
import Footer from 'Footer';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { buildDay } from 'utils';
import Countdown from './Countdown';
import FullScreenHeight from './FullScreenHeight';
import SavedCountdown from './SavedCountdown';

const H1 = styled.h1`
  text-align: center;
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
`;

const SavedCountdowns = styled.div`
  margin-top: 1rem;
  width: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;

  overflow: scroll;
`;

function App({ countdowns }) {
  const [localCountdown, setLocalCountdown] = useState('');
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();

  day = buildDay(day);

  month = month + 1;
  month = buildDay(month);

  const today = `${year}-${month}-${day}`;

  useEffect(() => {
    const query = window.location.href
      .replace(window.location.origin, '')
      .replace('/', '');

    const regex = /d\d\d-\d\d-\d\d\d\dt\d\d:\d\d/;

    if (query.length && query.match(regex)) {
      const split = query.split('t');
      let [date, time] = split;

      setLocalCountdown(`${date.replace('d', '')} ${time}`);
    }
  }, []);

  return (
    <>
      <FullScreenHeight unsetBreakpoint="desktop" direction="column">
        <H1>⋆✩ 🎀 𝒸♡𝓊𝓃𝓉𝒹♡𝓌𝓃 𝑔𝒶𝓇𝒹𝑒𝓃 🎀 ✩⋆</H1>
        <DateForm
          today={today}
          setLocalCountdown={setLocalCountdown}
          localCountdowns={localCountdown}
        />

        <CountdownContainer>
          {localCountdown.length ? (
            <Countdown countdowns={countdowns} date={localCountdown} />
          ) : null}

          {countdowns.length ? (
            <SavedCountdowns>
              <p>saved countdowns:</p>

              <div>
                {countdowns.map((countdown) => {
                  return (
                    <SavedCountdown title={countdown} countdowns={countdowns} />
                  );
                })}
              </div>
            </SavedCountdowns>
          ) : null}
        </CountdownContainer>
      </FullScreenHeight>

      <Footer />

      <Toaster
        toastOptions={{
          style: {
            color: '#000',
            background: '#fff',
            fontSize: '1rem',
            border: '1px solid black',
            borderRadius: '0',
          },
        }}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    countdowns: state.countdowns.countdowns,
  };
};

export default connect(mapStateToProps)(App);
