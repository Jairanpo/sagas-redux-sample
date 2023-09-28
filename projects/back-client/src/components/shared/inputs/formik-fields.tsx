import { FormikValues } from "formik";
import styled from "styled-components";

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
            <div>{formik.errors[field]}</div>
          ) : null
        }
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  label:after{
    content: ":";
  }
`;
