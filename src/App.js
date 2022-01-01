import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
// import { addCountdown } from 'store/actions/countdowns';
import { connect } from 'react-redux';
import styled from 'styled-components';

const hours = [
  '12:00',
  '12:30',
  '1:00',
  '1:30',
  '2:00',
  '2:30',
  '3:00',
  '3:30',
  '4:00',
  '4:30',
  '5:00',
  '5:30',
  '6:00',
  '6:30',
  '7:00',
  '7:30',
  '8:00',
  '8:30',
  '9:00',
  '9:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
];

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
          console.log(values);

          const newCountdowns = localCountdowns.push(values);
          setLocalCountdowns([...newCountdowns]);
          console.log(newCountdowns);

          setSubmitting(false);
        }}
      >
        {({ values }) => {
          console.log(values.date);
          return (
            <Form id="calenders">
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
            return <p>{countdown.date}</p>;
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
