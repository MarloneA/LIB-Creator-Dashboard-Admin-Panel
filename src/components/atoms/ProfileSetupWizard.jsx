import { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { Box } from '@atlaskit/primitives';
import { N20, N200 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import AddUserProfileWizard from "./AddUserProfileWizard";
import ConfigureProfileLinksWizard from "./ConfigureProfileLinksWizard";

const panelStyles = css({
  display: 'flex',
  marginTop: token('space.200', '16px'),
  marginBottom: token('space.100', '8px'),
  padding: token('space.400', '32px'),
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexGrow: 1,
  backgroundColor: token('color.background.neutral', N20),
  borderRadius: token('border.radius', '3px'),
  color: token('color.text.subtlest', N200),
  fontSize: '4em',
  fontWeight: 500,
});

export const Panel = ({ children, testId }) => (
  // Removed type annotation for ReactNode and testId
  <div css={panelStyles} data-testid={testId}>
    {children}
  </div>
);

function ProfileSetupWizard({session, supabase}) {
  const [selected, setSelected] = useState(0);
  const [profileData, setProfileData] = useState({})

  const handleUpdate = useCallback(
    (index) => setSelected(index),
    [setSelected],
  );

  return (
    <Box>
      <Tabs onChange={handleUpdate} selected={selected} id="controlled">
        <TabList>
          <Tab>Setup Profile</Tab>
          <Tab>Configure Links</Tab>
        </TabList>
        <TabPanel>
          <Panel>
            <AddUserProfileWizard
              supabase={supabase}
              setProfileData={setProfileData}
              handleUpdate={handleUpdate} />
          </Panel>
        </TabPanel>
        <TabPanel>
          <Panel>
            <ConfigureProfileLinksWizard
              session={session}
              supabase={supabase}
              profileData={profileData}
              setProfileData={setProfileData}
              handleUpdate={handleUpdate} />
          </Panel>
        </TabPanel>
      </Tabs>
    </Box>
  );
}

export default ProfileSetupWizard;
