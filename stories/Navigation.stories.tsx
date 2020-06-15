import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { RProvider } from '@common/util/storybook-utils/react-redux';
import { StoryContainer } from '@common/util/storybook-utils';
import store from '@common/store/index';
const stories = storiesOf('Navigation|Navbar', module);

stories.addDecorator((story) => {
  return <RProvider store={store}>{story()}</RProvider>;
});
stories.add('test', () => (
  <StoryContainer initialState={{}}>
    <Button>TODO: add navbar storybook</Button>
  </StoryContainer>
));
