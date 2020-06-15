// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import MakePayment from './make-payment';
// import { TstProvider } from '@client_shared/util/react-redux';
// import store from '../../payment/store';
// import { StoryContainer } from '../../payment/stories.data/util';
// const stories = storiesOf('Post booking|Make Payment', module);

// stories.addDecorator((story) => {
//   return <TstProvider store={store}>{story()}</TstProvider>;
// });
// stories.add('loading', () => (
//   <StoryContainer
//     initialState={{
//       loading: true,
//       paymentOptions: {
//         hold: {
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Hold',
//           deposit: {
//             due: 270.5,
//             dueDate: '2020-05-03',
//             dueTime: '16:00',
//             dueTimeZone: 'EDT'
//           },
//           finalPayment: {
//             due: 2029.75,
//             dueDate: '2020-06-03',
//             dueTime: '00:00',
//             dueTimeZone: 'EDT'
//           }
//         },
//         payInFull: {
//           dueAtBooking: 246.26,
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Prepay'
//         },
//         custom: {
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Prepay'
//         }
//       }
//     }}
//   >
//     <MakePayment />
//   </StoryContainer>
// ));
// stories.add('make payment', () => (
//   <StoryContainer
//     initialState={{
//       paymentOptions: {
//         hold: {
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Hold',
//           deposit: {
//             due: 270.5,
//             dueDate: '2020-05-03',
//             dueTime: '16:00',
//             dueTimeZone: 'EDT'
//           },
//           finalPayment: {
//             due: 2029.75,
//             dueDate: '2020-06-03',
//             dueTime: '00:00',
//             dueTimeZone: 'EDT'
//           }
//         },
//         payInFull: {
//           dueAtBooking: 246.26,
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Prepay'
//         },
//         custom: {
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Prepay'
//         }
//       }
//     }}
//   >
//     <MakePayment showAgentSection={true} />
//   </StoryContainer>
// ));

// stories.add('make payment with agent section', () => (
//   <StoryContainer
//     initialState={{
//       paymentOptions: {
//         hold: {
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Hold',
//           deposit: {
//             due: 270.5,
//             dueDate: '',
//             dueTime: '',
//             dueTimeZone: ''
//           },
//           finalPayment: {
//             due: 2029.75,
//             dueDate: '2020-06-03',
//             dueTime: '00:00',
//             dueTimeZone: 'EDT'
//           }
//         },
//         payInFull: {
//           dueAtBooking: 246.26,
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Prepay'
//         },
//         custom: {
//           updateUrl:
//             '/cruise/trip/NJ3Yqdd2QhORHQLWSG4PfQ/items/tkokJ0C6T66jUF1GPeiy2g/updatePaymentOption?paymentOption=Prepay'
//         }
//       }
//     }}
//   >
//     <MakePayment showAgentSection={true} />
//   </StoryContainer>
// ));
