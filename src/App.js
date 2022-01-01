import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
// import { addCountdown } from 'store/actions/countdowns';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { hours } from './utils';

const AppContainer = styled.div`
  padding: 2rem;
`;

const H1 = styled.h1`
  text-align: center;
`;

function App({ countdowns }) {
  const [localCountdowns, setLocalCountdowns] = useState([]);
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const today = `${year}-${month + 1}-${day}`;

  return (
    <AppContainer>
      <H1>⋆✩ 🎀 𝒸♡𝓊𝓃𝓉𝒹♡𝓌𝓃 𝑔𝒶𝓇𝒹𝑒𝓃 🎀 ✩⋆</H1>

      <Formik
        initialValues={{ date: today, time: '12:00', AMPM: 'AM' }}
        onSubmit={(values, { setSubmitting }) => {
          // console.log(values);
          // countdown('01-05-2022 19:00');

          let time;
          const [year, month, day] = values.date.split('-');
          if (values.AMPM === 'PM') {
            const hour = Number(values.time.split(':')[0]) + 12;
            time = hour + ':' + values.time.split(':')[1];
          } else {
            time = values.time;
          }

          const countdownDate = `${month}-${day}-${year} ${time}`;

          console.log(countdownDate);

          const newCountdowns = localCountdowns.push(countdownDate);
          setLocalCountdowns([...newCountdowns]);

          // console.log(newCountdowns);

          setSubmitting(false);
        }}
      >
        {({ values }) => {
          return (
            <Form id="calenders">
              <label htmlFor="date">date</label>
              <input
                type="date"
                id="date"
                name="date"
                defaultValue={values.date}
                min={today}
                max="2122-12-31"
              ></input>

              <label as="label" htmlFor="time">
                time:
              </label>

              <Field as="select" name="time" id="time">
                {hours.map((hour, key) => {
                  return (
                    <option value={hour} key={hour}>
                      {hour}
                    </option>
                  );
                })}
              </Field>

              <Field as="select" name="AMPM" id="AMPM">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Field>

              <div>
                <button type="submit">create countdown</button>
              </div>
            </Form>
          );
        }}
      </Formik>

      {localCountdowns.length ? (
        <>
          {localCountdowns.map((countdown) => {
            return <p>{countdown}</p>;
          })}
        </>
      ) : null}

      {countdowns.length ? <p>there are countdowns</p> : null}
    </AppContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    countdowns: state.countdowns,
  };
};

export default connect(mapStateToProps)(App);
