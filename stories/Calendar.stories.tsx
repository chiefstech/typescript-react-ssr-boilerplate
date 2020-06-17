import React from 'react';
import { storiesOf } from '@storybook/react';
import { RProvider } from '@common/util/storybook-utils/react-redux';
import { StoryContainer } from '@common/util/storybook-utils/calendar.util';
import store from '@common/store/index';
import Month from '@common/components/Month';

const stories = storiesOf('Calendar|Month', module);

stories.addDecorator((story) => {
  return <RProvider store={store}>{story()}</RProvider>;
});
stories.add('Calendar with users', () => (
  <StoryContainer>
    <Month />
  </StoryContainer>
));
