
import { Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const schema = () => yup.object({
 name: yup.string().required('Minimum 2 characters '),
 group: yup.string().required('Group is required'),
 grade: yup.number().required('Must be a number between 0 and 100 '),

})

export const StudentCard = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', group: '', grade: ''}}
        validationSchema={schema()}
        onSubmit={value => {
          console.log(value)
          alert(JSON.stringify(value, null, 2))
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Field type="name" name="name" style={{ width: 200 }} />
              <ErrorMessage name="name" component="div" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Field type="group" name="group" style={{ width: 200 }} />
              <ErrorMessage name="group" component="div" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Field type="grade" name="grade" style={{ width: 200 }} />
              <ErrorMessage name="grade" component="div" />
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}