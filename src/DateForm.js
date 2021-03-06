import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { above, getDifference, hours } from 'utils';

const StyledForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  ${above.desktop`
    width: 35%;
  `}
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  ${above.desktop`
    width: 50%;
  `}

  input, select {
    background: transparent;
    border: 1px solid black;
    border-radius: 0;
    color: black;
    cursor: pointer;
  }
`;

const DateLabelContainer = styled(LabelContainer)`
  ${above.desktop`
    width: calc(50% - 1rem);
    margin-right: 1rem;
  `}

  input {
    padding: 0.75rem;
  }
`;

const TimeLabelContainer = styled(LabelContainer)`
  justify-content: space-between;
  margin-top: 1rem;

  ${above.desktop`
    margin-top: 0rem;
  `}
`;

const Button = styled.button`
  background: transparent;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 0;
  color: black;
  padding: 0.5rem;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  select {
    padding: 0.75rem;
    width: 50%;
  }

  select:first-of-type {
    width: calc(50% - rem);
    margin-right: 1rem;
  }
`;

const DateForm = ({ today, setLocalCountdown }) => (
  <Formik
    initialValues={{ date: today, time: '12:00', AMPM: 'AM' }}
    onSubmit={(values, { setSubmitting }) => {
      let time;

      const [year, month, day] = values.date.split('-');

      if (values.AMPM === 'PM') {
        const hour = Number(values.time.split(':')[0]) + 12;
        time = `${hour}:${values.time.split(':')[1]}`;
      } else {
        time = values.time;
      }

      const countdownDate = `${month}-${day}-${year} ${time}`;

      if (getDifference(countdownDate) > 0) {
        setLocalCountdown(countdownDate);

        setSubmitting(false);
      }
      if (getDifference(countdownDate) < 0) {
        toast('please select a date / time combination that is in the future');
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
          <DateLabelContainer>
            <label htmlFor="date">date:</label>

            <input
              type="date"
              id="date"
              name="date"
              defaultValue={values.date}
              min={today}
              max="2122-12-31"
              onChange={dateChangeHandler}
            />
          </DateLabelContainer>

          <TimeLabelContainer>
            <label as="label" htmlFor="time">
              time:
            </label>

            <SelectContainer>
              <Field as="select" name="time" id="time">
                {hours.map((hour) => (
                  <option value={hour} key={hour}>
                    {hour}
                  </option>
                ))}
              </Field>

              <Field as="select" name="AMPM" id="AMPM">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Field>
            </SelectContainer>
          </TimeLabelContainer>
          <div>
            <Button type="submit">create countdown</Button>
          </div>
        </StyledForm>
      );
    }}
  </Formik>
);
export default DateForm;
