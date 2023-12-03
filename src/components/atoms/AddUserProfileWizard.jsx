
import React, { Fragment } from 'react'
import { DatePicker } from '@atlaskit/datetime-picker';
import Button from '@atlaskit/button';
import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form';
import Select from '@atlaskit/select';
import TextArea from '@atlaskit/textarea';
import TextField from '@atlaskit/textfield';


const links = [
  { label: 'Website', value: 'website' },
  { label: 'Whatsapp', value: 'whatsapp' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'x (Twitter)', value: 'x(twitter)' },
  { label: 'Linkedin', value: 'linkedin' },
  { label: 'Telegram', value: 'telegram' },
  { label: 'Calendly', value: 'calendly' },
  { label: 'SnapChat', value: 'snapchat' },
  { label: 'Tiktok', value: 'tiktok' },
  { label: 'Youtube', value: 'youtube' },
  { label: 'Pinterest', value: 'pinterest' },
  { label: 'Spotify', value: 'spotify' },
  { label: 'Apple Music', value: 'apple music' },
  { label: 'Resume', value: 'resume' },
  { label: 'Bank Details', value: 'bankdetails' },
  { label: 'Discord', value: 'discord' },
  { label: 'Reviews', value: 'reviews' },
  { label: 'Custom Link', value: 'customlink' },
  { label: 'Google Business Profile', value: 'googlebusinessprofile' },
];


const flavorValidation = (data, errors) => {
  if (data.icecream && data.icecream.length >= 3) {
    return {
      ...errors,
      icecream: `${data.icecream.length} is too many flavors, please select a maximum of 2 flavors.`,
    };
  }

  return errors;
};

const validateOnSubmit = (data) => {
  let errors;
  errors = flavorValidation(data, errors);
  return errors;
};

/**
 * NOT: this is not declared inline with the Select
 * If you declare inline you'll have issues with refs
 */
const CustomValueOption = ({
  children,
  ...props
}) => (
  // eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
  <components.SingleValue {...props}>
    <ColorBox color={children} /> {children}
  </components.SingleValue>
);

export const AddUserProfileWizard = ({ handleUpdate, setProfileData }) => {

  return (
    <div
      style={{
        display: 'flex',
        width: '400px',
        margin: '0 auto',
        flexDirection: 'column',
      }}
    >
      <Form
        onSubmit={(data) => {

          setProfileData(data)

          handleUpdate(1);

          return Promise.resolve(validateOnSubmit(data));
        }}
      >
        {({ formProps }) => (
          <form {...formProps}>
            <Field
              aria-required={true}
              name="fullnames"
              label="Full Names"
              isRequired
              defaultValue="e.g John Doe"
            >
              {({ fieldProps, error }) => (
                <Fragment>
                  <TextField autoComplete="off" {...fieldProps} />
                  {error && (
                    <ErrorMessage>
                      This username is already in use, try another one.
                    </ErrorMessage>
                  )}
                </Fragment>
              )}
            </Field>
            <Field name="DOB" label="Date of Birth" defaultValue="" isRequired>
              {({ fieldProps: { id, ...rest }, error }) => (
                <Fragment>
                  <DatePicker selectProps={{ inputId: id }} {...rest} />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </Fragment>
              )}
            </Field>
            <Field
              label="Bio"
              isRequired
              name="bio"
              // validate={validate}
              defaultValue=""
            >
              {({ fieldProps, error, meta: { valid } }) => (
                <Fragment>
                  <TextArea {...fieldProps} />
                </Fragment>
              )}
            </Field>
            <Field
              name="links"
              label="Select links to add to card"
              defaultValue={[]}
            >
              {({ fieldProps: { id, ...rest }, error }) => (
                <Fragment>
                  <Select inputId={id} {...rest} options={links} isMulti />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </Fragment>
              )}
            </Field>
            <FormFooter>
              <Button type="submit" appearance="primary">
                Next
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  )
};

export default AddUserProfileWizard;