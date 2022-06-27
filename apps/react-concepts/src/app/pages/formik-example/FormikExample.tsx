import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

const FormGroupContainer = styled.div`
  --label-spacing: 15px;

  padding: 0.5rem 0 1rem;

  label {
    display: inline-block;
    margin-bottom: 5px;
  }

  input:not([type=checkbox]):not([type=radio]),
  select,
  textarea {
    display: block;
    width: 30ch;
  }

  input[type=checkbox],
  input[type=radio] {
    display: inline-block;
    margin-left: 0;
  }

  input[type=checkbox] + label,
  input[type=radio] + label {
    margin-left: var(--label-spacing);
  }

  label ~ input[type=checkbox],
  label ~ input[type=radio] {
    margin-left: 10px;
  }

  .error {
    padding-top: 0.5rem;
    color: #c00;
  }
`;

const Button = styled.button`
  padding: 0.5em 1.5em;
  border: 1px solid var(--theme-color);
  border-radius: 2px;
  background: var(--theme-color);
  color: white;

  &.disabled {
    background: grey;
    border: 1px solid grey;
  }
`;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FormSchema = Yup.object().shape({
  name: Yup.string().trim().required(),
  username: Yup.string().trim(),
  email: Yup.string().email().required('Email is required'),
  telephone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Telephone is required'),
  gender: Yup.string().required(),
  password: Yup.string().required().min(4, 'Password should be 4 characters minimum'),
  confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

interface CodeProps {
  obj: any,
  testid: string | null
}

function CodeBlock({obj, testid}: CodeProps) {
  return (
    <code>
      <pre data-testid={testid}>
        {JSON.stringify(obj, null, 2)}
      </pre>
    </code>
  );
}


export function FormikExample() {
  return (
    <>
      <h1>Formik Example</h1>
      <FormikForm />
    </>
  );
}

function FormikForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return <Formik
    initialValues={{
      name: '',
      username: '',
      email: '',
      telephone: '',
      gender: '',
      password: '',
      confirmPassword: '',
    }}
    validationSchema={FormSchema}
    onSubmit={(values) => {
      setFormSubmitted(true);
      console.log('onSubmit', values);
    }}
  >
    {(formik) => {
      const {
        values,
        errors,
        touched,
        isValid,
        dirty
      } = formik;

      return (
        <Form>
          { formSubmitted && <div data-testid="formConfirmation">Submitted</div>}

          <FormGroupContainer>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage data-testid="nameError" component="div" className="error" name="name" />
          </FormGroupContainer>

          <FormGroupContainer>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" type="text" />
            <ErrorMessage data-testid="usernameError" component="div" className="error" name="username" />
          </FormGroupContainer>

          <FormGroupContainer>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
            <ErrorMessage data-testid="emailError" component="div" className="error" name="email" />
          </FormGroupContainer>

          <FormGroupContainer>
            <label htmlFor="telephone">Telephone</label>
            <Field id="telephone" name="telephone" type="tel" />
            <ErrorMessage data-testid="telephoneError" component="div" className="error" name="telephone" />
          </FormGroupContainer>

          <FormGroupContainer>
            <div role="group" aria-labelledby="my-radio-group">
              <label htmlFor="male">Male</label>
              <Field type="radio" id="male" name="gender" value="male" />
              <label htmlFor="female">Female</label>
              <Field type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Not specified</label>
              <Field type="radio" id="na" name="gender" value="na" />
            </div>
            <ErrorMessage component="div" className="error" name="gender" />
          </FormGroupContainer>

          <FormGroupContainer>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage component="div" className="error" name="password" />
          </FormGroupContainer>

          <FormGroupContainer>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field id="confirmPassword" name="confirmPassword" type="password" />
            <ErrorMessage component="div" className="error" name="confirmPassword" />
          </FormGroupContainer>

          <FormGroupContainer>
            <label htmlFor="options">Options</label>
            <Field as="select" id="options" name="options">
              <option>Select</option>
              <option value="opt1">Option 1</option>
              <option value="opt1">Option 2</option>
            </Field>
          </FormGroupContainer>

          <FormGroupContainer>
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments" />
          </FormGroupContainer>

          <FormGroupContainer>
            <Field type="checkbox" id="newsletterOptIn" name="newsletterOptIn" value="yes" />
            <label htmlFor="newsletterOptIn">Subscribe to newsletter</label>
          </FormGroupContainer>

          <FormGroupContainer>
            <Field type="checkbox" id="acceptTerms" name="acceptTerms" value="yes" />
            <label htmlFor="acceptTerms">Accept terms and service</label>
          </FormGroupContainer>

          <FormGroupContainer>
            {/* <Button
              type="submit"
              className={dirty && isValid ? "" : "disabled"}
              disabled={!(dirty && isValid)}
            >
              Submit
            </Button> */}
            <Button
              type="submit"
            >
              Submit
            </Button>
          </FormGroupContainer>

          <hr />
          isValid:
          <CodeBlock obj={isValid} testid="formIsValid"></CodeBlock>

          errors:
          <CodeBlock obj={errors} testid=""></CodeBlock>

          touched:
          <CodeBlock obj={touched} testid="touched"></CodeBlock>

          dirty:
          <CodeBlock obj={dirty} testid="dirty"></CodeBlock>

          values:
          <CodeBlock obj={values} testid="values"></CodeBlock>
        </Form>
      );
    }}
  </Formik>;
}
