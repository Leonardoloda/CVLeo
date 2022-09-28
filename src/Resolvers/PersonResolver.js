exports.PersonResolver = {
  Query: {
    getPerson: (_, { id }, ctx) => {
      return ctx.dataSources.personApi.fetchPersonById(id);
    },
  },
  Person: {
    features: (person, { quality }) => {
      return person.features.filter((feature) => feature.quality == quality);
    },
  },
};
