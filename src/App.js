import DateForm from 'DateForm';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { buildDay } from 'utils';
import Countdown from './Countdown';
import SavedCountdown from './SavedCountdown';

const AppContainer = styled.div`
  padding: 2rem;
`;

const H1 = styled.h1`
  text-align: center;
`;

const CountdownContainer = styled.div`
  display: flex;
`;

const SavedCountdowns = styled.div`
  margin-top: 1rem;
  width: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
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

  console.log('local countdown', localCountdown);

  return (
    <AppContainer>
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
                  <>
                    <SavedCountdown
                      title={countdown}
                      countdowns={countdowns}
                      date={localCountdown}
                    />
                  </>
                );
              })}
            </div>
          </SavedCountdowns>
        ) : null}
      </CountdownContainer>

      <footer>
        <p>
          a website by&nbsp;
          <a
            href="http://www.youngandnauseo.us"
            target="_blank"
            rel="noopener noreferrer"
          >
            young and nauseous
          </a>
          &nbsp;
          <a
            href="https://github.com/danhemerlein/countdown-garden"
            target="_blank"
            rel="noopener noreferrer"
          >
            view on GitHub
          </a>
        </p>
      </footer>

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
    </AppContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    countdowns: state.countdowns.countdowns,
  };
};

export default connect(mapStateToProps)(App);
