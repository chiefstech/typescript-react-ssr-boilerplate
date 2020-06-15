import React from 'react';
import { storiesOf } from '@storybook/react';
import { RProvider } from '@common/util/storybook-utils/react-redux';
import { StoryContainer } from '@common/util/storybook-utils/navigation.util';
import store from '@common/store/index';
const stories = storiesOf('Navigation|Navbar', module);

stories.addDecorator((story) => {
  return <RProvider store={store}>{story()}</RProvider>;
});
stories.add('test', () => (
  <StoryContainer>
    <div>TODO: add navbar storybook</div>
  </StoryContainer>
));
