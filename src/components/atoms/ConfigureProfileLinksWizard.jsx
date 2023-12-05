
import React, { Fragment } from 'react'
import Button from '@atlaskit/button';
import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import { useNavigate, useParams } from 'react-router-dom';

export const ConfigureProfileLinksWizard = ({ session, supabase, handleUpdate, profileData }) => {

  let { id } = useParams();
  const navigate = useNavigate();

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
        onSubmit={async (formData) => {
          const urls = profileData.links.map(link => {
            let newLink = { ...link, url: formData[link.value] }
            return newLink
          });

          const finalForm = { urls, ...profileData };

          const { error, data } = await supabase.from("CardDetails").insert({
            full_names: finalForm.fullnames,
            dob: finalForm.DOB,
            bio: finalForm.bio,
            links: finalForm.urls,
            userid: id,
            pricing: "auth" //create with free plan by default
          });

          localStorage.setItem("plan", "auth")
          navigate(`../../profile/${id}/dashboard`)
        }}
      >
        {({ formProps }) => (
          <form {...formProps}>
            {/* {profileData?.links?.length === 0 && (<Alert severity="warning">{ "Please choose at least one link" }</Alert>)} */}
            {profileData?.links?.map(link =>
              <Field
                key={link.value}
                aria-required={true}
                name={link.value}
                label={link.label}
                isRequired
                defaultValue=" "
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
              )} 
            <FormFooter>
              <Button type="submit" appearance="primary">
                Finish
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  )
};

export default ConfigureProfileLinksWizard;