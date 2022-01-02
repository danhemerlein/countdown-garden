import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { getDifference, hours } from 'utils';

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DateForm = ({ today, setLocalCountdowns, localCountdowns }) => {
  return (
    <Formik
      initialValues={{ date: today, time: '12:00', AMPM: 'AM' }}
      onSubmit={(values, { setSubmitting }) => {
        let time;

        const [year, month, day] = values.date.split('-');

        if (values.AMPM === 'PM') {
          const hour = Number(values.time.split(':')[0]) + 12;
          time = hour + ':' + values.time.split(':')[1];
        } else {
          time = values.time;
        }

        const countdownDate = `${month}-${day}-${year} ${time}`;

        if (getDifference(countdownDate) > 0) {
          localCountdowns.push(countdownDate);

          console.log(localCountdowns);

          setLocalCountdowns([...localCountdowns]);

          setSubmitting(false);
        }
        if (getDifference(countdownDate) < 0) {
          toast(
            'please select a date / time combination that is in the future'
          );
        }
      }}
    >
      {({ values, setFieldTouched, setFieldValue }) => {
        const setDateValue = (date) => {
          setFieldTouched('date', true, false);
          return setFieldValue('date', date);
        };

        const dateChangeHandler = (e) => {
          e.preventDefault();
          setDateValue(e.target.value);
        };
        return (
          <StyledForm id="calenders">
            <label htmlFor="date">date</label>

            <input
              type="date"
              id="date"
              name="date"
              defaultValue={values.date}
              min={today}
              max="2122-12-31"
              onChange={dateChangeHandler}
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
          </StyledForm>
        );
      }}
    </Formik>
  );
};
export default DateForm;
