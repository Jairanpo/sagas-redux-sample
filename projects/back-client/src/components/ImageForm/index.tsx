import * as Yup from "yup";
import { useFormik } from "formik";
import { ImageRequest } from "@/types/image-types";
import { FormikInput } from "../shared/inputs/formik-fields";
import styled from "styled-components";
import { colors } from "@/shared/theme";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object({
  width: Yup.number().integer().min(32).max(2048),
  height: Yup.number().integer().min(32).max(2048),
  grayscale: Yup.boolean(),
  young: Yup.boolean(),
});

export default function ImageForm() {
  const dispatch = useDispatch()

  const formik = useFormik({
    validationSchema,
    initialValues: {
      width: 300,
      height: 300,
      grayscale: false,
      young: false,
    },
    onSubmit: async (v: ImageRequest) => {
      console.log(v)
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormikInput formik={formik} field="height"/>
        <FormikInput formik={formik} field="width"/>
        <label htmlFor="grayscale">"grayscale?"</label>
        <input
          type="checkbox"
          id="grayscale"
          name="grayscale"
          onChange={formik.handleChange}
          checked={formik.values.grayscale}
        />
        {
          formik.errors.grayscale && formik.touched.width ? (
            <div>{formik.errors.grayscale}</div>
          ) : null
        }
        <label htmlFor="young">"young?"</label>
        <input
          type="checkbox"
          id="young"
          name="young"
          onChange={formik.handleChange}
          checked={formik.values.young}
        />
        {
          formik.errors.young && formik.touched.width ? (
            <div>{formik.errors.young}</div>
          ) : null
        }
        <SubmitButton type="submit">Request</SubmitButton>
      </form>
    </>
  );
}

const SubmitButton = styled.button`
  padding: 8px;
  font-size: 1.2rem;
  background: ${colors.purple};
  color: ${colors.pale};
`
