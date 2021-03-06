import { gql } from "apollo-boost";

export default gql`
    type LocalUser {
        isLoggedIn: Boolean!
    }

    type Query {
        localUser: LocalUser!
    }

    type Mutation {
        localUpdateUser(isLoggedIn: Boolean!): Boolean
        signOut: Boolean
    }

    directive @client on FIELD
`;
