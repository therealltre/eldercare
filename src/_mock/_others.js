import _mock from './_mock';
import { randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _carouselsExample = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  image: _mock.image.feed(index),
  description: _mock.text.description(index),
}));

export const _carouselsMembers = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  avatar: `/assets/images/members/member-${index + 1}.jpg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  value: `panel${index + 1}`,
  heading: `Questions ${index + 1}`,
  detail: _mock.text.description(index),
}));


// ----------------------------------------------------------------------

export const _accordions = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  value: `panel${index + 1}`,
  heading: `Accordion ${index + 1}`,
  subHeading: _mock.text.title(index),
  detail: _mock.text.description(index),
}));

// ----------------------------------------------------------------------

export const _mapContact = [
  {
    latlng: [5.6037, -0.1870],
    address: _mock.address.fullAddress(1),
    phoneNumber: _mock.phoneNumber(1),
  },
  // {
  //   latlng: [-12.5, 18.5],
  //   address: _mock.address.fullAddress(2),
  //   phoneNumber: _mock.phoneNumber(2),
  // },
];
