const { gql } = require("apollo-server");

exports.PersonSchema = gql`
  type Query {
    getPerson(id: String): Person
  }

  type Person {
    id: String
    basicInfo: BasicInfo
    contactInfo: ContactInfo
    bioInfo: BioInfo
    hobbies: [Hobby]
    features(quality: Quality): [Feature]
  }

  type ContactInfo {
    phone: Int
    email: String
  }

  type BasicInfo {
    fullName: String
    alias: String
    firstName: String
    lastName: String
    age: Unit
  }

  type Unit {
    unit: String
    quantity: Int
  }

  type BioInfo {
    height: Unit
    weight: Unit
    RH: String
  }

  type Hobby {
    activity: String
    aptitude: String
    frequency: String
  }

  type Feature {
    name: String
    quality: Quality
  }

  enum Quality {
    Defecto
    Rasgo
    Cualidad
  }
`;
