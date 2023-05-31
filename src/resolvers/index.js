import { GraphQLDateTime } from 'graphql-iso-date';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

// eslint-disable-next-line max-len
export default [customScalarResolver];
