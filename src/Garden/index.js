import VisuallyHidden from '@reach/visually-hidden';
import Countdown from 'Countdown';
import DateForm from 'DateForm';
import FullScreenHeight from 'FullScreenHeight';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SavedCountdown from 'SavedCountdown';
import styled from 'styled-components';
import { above, buildDay, getRandomElement, quotes } from 'utils';

const H1 = styled.h1`
  text-align: center;
`;

const Title = styled.p`
  margin-top: 0;
`;

const Quote = styled.h2`
  text-align: center;
  margin: 0 auto 0.67em auto;

  ${above.desktop`
    width: 50%;
  `}
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  flex-wrap: wrap;

  ${above.desktop`
    flex-wrap: nowrap;
  `}
`;

const LocalCountdown = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${above.desktop`
    width: 50%;
  `}
`;

const SavedCountdowns = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  padding: 1rem;

  width: 100%;

  ${above.desktop`
    width: 50%;
  `}
`;

const Garden = ({ countdowns, footerHeight }) => {
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
      <FullScreenHeight
        unsetBreakpoint="desktop"
        direction="column"
        addtlOffset={footerHeight}
      >
        <H1>⋆✩♡✩⋆ 🌹 𝒸🌸𝓊𝓃𝓉𝒹🌺𝓌𝓃 𝑔𝒶𝓇𝒹𝑒𝓃 🌹 ⋆✩♡✩⋆</H1>

        <VisuallyHidden>countdown garden</VisuallyHidden>

        <Quote>
          <em>{getRandomElement(quotes)}</em>
        </Quote>

        <DateForm
          today={today}
          setLocalCountdown={setLocalCountdown}
          localCountdowns={localCountdown}
        />

        <CountdownContainer>
          {localCountdown.length ? (
            <LocalCountdown>
              <Countdown countdowns={countdowns} date={localCountdown} />
            </LocalCountdown>
          ) : null}

          {countdowns.length ? (
            <SavedCountdowns>
              <Title>saved countdowns:</Title>

              <>
                {countdowns.map((countdown) => {
                  return (
                    <SavedCountdown
                      key={countdown}
                      title={countdown}
                      countdowns={countdowns}
                    />
                  );
                })}
              </>
            </SavedCountdowns>
          ) : null}
        </CountdownContainer>
      </FullScreenHeight>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countdowns: state.countdowns.countdowns,
  };
};

export default connect(mapStateToProps)(Garden);
