import { FormikValues } from "formik";
import styled from "styled-components";
import { colors } from "../../../shared/colors";

export const FormikInput = (props: {
  formik: FormikValues ;
  field: string;
  type?: string;
}) => {
  
  const {formik, field, type="number"} = props

  return (
    <>
      <Wrapper>
        <label htmlFor={field}>{field}</label>
        <input
          type={type}
          id={field}
          name={field}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[field]}
        />
        {
          formik.errors[field] && formik.touched[field] ? (
            <ErrorContainer>{formik.errors[field]}</ErrorContainer>
          ) : null
        }
      </Wrapper>
    </>
  );
};

export const FormikCheckbox = (props: {
  formik: FormikValues ;
  field: string;
}) => {
  
  const {formik, field} = props

  return (
    <>
      <CheckboxWrapper>
        <label htmlFor={field}>{field}</label>
        <input
          type="checkbox"
          id={field}
          name={field}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[field]}
        />
      </CheckboxWrapper>
    </>
  );
};

const ErrorContainer = styled.div`
  overflow-wrap: break-word;
  color: ${colors.red};
`

const CheckboxWrapper = styled.div`
  display: flex;
`
const Wrapper = styled.div`
  display: grid;
  label:after{
    content: ":";
  }
`;
