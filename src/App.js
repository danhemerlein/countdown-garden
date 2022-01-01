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

  console.log(countdowns);

  return (
    <AppContainer>
      <H1>⋆✩ 🎀 𝒸♡𝓊𝓃𝓉𝒹♡𝓌𝓃 𝑔𝒶𝓇𝒹𝑒𝓃 🎀 ✩⋆</H1>
      <DateForm
        today={today}
        setLocalCountdowns={setLocalCountdowns}
        localCountdowns={localCountdowns}
      />

      {localCountdowns.length ? (
        <>
          {localCountdowns.map((countdown) => {
            return <Countdown date={countdown} />;
          })}
        </>
      ) : null}

      {countdowns.length ? <p>there are countdowns</p> : null}

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
    countdowns: state.countdowns,
  };
};

export default connect(mapStateToProps)(App);
