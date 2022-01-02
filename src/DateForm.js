import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { getDifference, hours } from 'utils';

const StyledForm = styled(Form)`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LabelContainer = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  ${'' /* width: calc(50% - 1rem); */}
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1rem;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  select {
    margin-right: 1rem;
  }
`;

const DateForm = ({ today, setLocalCountdown }) => {
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

        console.log(countdownDate);

        if (getDifference(countdownDate) > 0) {
          setLocalCountdown(countdownDate);

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
            <LabelContainer>
              <Label htmlFor="date">date:</Label>

              <input
                type="date"
                id="date"
                name="date"
                defaultValue={values.date}
                min={today}
                max="2122-12-31"
                onChange={dateChangeHandler}
              ></input>
            </LabelContainer>

            <LabelContainer>
              <Label as="label" htmlFor="time">
                time:
              </Label>

              <SelectContainer>
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
              </SelectContainer>
            </LabelContainer>

            <div>
              <Button type="submit">create countdown</Button>
            </div>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
export default DateForm;
