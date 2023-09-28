import * as Yup from "yup";
import { useFormik } from "formik";
import { FormikInput, FormikCheckbox } from "../shared/inputs/formik-fields";
import { ImageRequest } from "../../types/graphql-input-types";
import { useDispatch } from "react-redux";
import { getImage } from "../../redux/reducer";
import * as styles from "./styles";

const validationSchema = Yup.object({
  width: Yup.number().integer().min(32).max(2048),
  height: Yup.number().integer().min(32).max(2048),
  grayscale: Yup.boolean(),
  young: Yup.boolean(),
});

export default function ImageForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema,
    initialValues: {
      width: 300,
      height: 300,
      grayscale: false,
      young: false,
    },
    onSubmit: (v: ImageRequest) => {
      dispatch(
        getImage({
          width: v.width,
          height: v.height,
          grayscale: v?.grayscale || false,
          young: v?.young || false,
        })
      );
    },
  });

  return (
    <styles.Layout>
      <form onSubmit={formik.handleSubmit}>
        <styles.FormLayout>
          <FormikInput formik={formik} field="height" />
          <FormikInput formik={formik} field="width" />
          <FormikCheckbox formik={formik} field="grayscale" />
          <FormikCheckbox formik={formik} field="young" />
          <button type="submit">Request</button>
        </styles.FormLayout>
      </form>
    </styles.Layout>
  );
}
