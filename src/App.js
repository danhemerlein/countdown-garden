import DateForm from 'DateForm';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { buildDay } from 'utils';
import Countdown from './Countdown';

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
  width: 50%;
`;

function App({ countdowns }) {
  const [localCountdowns, setLocalCountdowns] = useState([]);
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();

  day = buildDay(day);

  month = month + 1;
  month = buildDay(month);

  const today = `${year}-${month}-${day}`;

  return (
    <AppContainer>
      <H1>⋆✩ 🎀 𝒸♡𝓊𝓃𝓉𝒹♡𝓌𝓃 𝑔𝒶𝓇𝒹𝑒𝓃 🎀 ✩⋆</H1>
      <DateForm
        today={today}
        setLocalCountdowns={setLocalCountdowns}
        localCountdowns={localCountdowns}
      />

      <CountdownContainer>
        {localCountdowns.length ? (
          <>
            {localCountdowns.map((countdown) => {
              return (
                <Countdown
                  localCountdowns={localCountdowns}
                  countdowns={countdowns}
                  date={countdown}
                />
              );
            })}
          </>
        ) : null}

        {countdowns.length ? (
          <SavedCountdowns>
            <p>saved countdowns:</p>

            <div>
              {countdowns.map((countdown) => {
                return <p>{countdown}</p>;
              })}
            </div>
          </SavedCountdowns>
        ) : null}
      </CountdownContainer>

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
