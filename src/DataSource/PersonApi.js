const { RESTDataSource } = require("apollo-datasource-rest");
const Leo = require("../API/Leo.json");

class PersonApi extends RESTDataSource {
  constructor() {
    super();
  }

  fetchPersonById(id) {
    return id === Leo.id ? Leo : null;
  }
}

exports.PersonApi = PersonApi;
