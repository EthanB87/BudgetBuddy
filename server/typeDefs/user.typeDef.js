const userTypeDef = `#graphql
    type User {
        id: ID!
        username: String!
        name: String!
        password: String!
        pfp: String!
        gender: String!
    }

    type Query {
        users: [User!]
        authUser: User
        user(userId:ID!): User
    }

    type Mutation {
        signUp(input: Signup!): User
        login(input: Login!): User
        logout(input: Logout!): User
    }


    input Signup {
        username: String!
        name: String!
        password: String!
        gender: String!
    }

    input Login {
        username: String!
        password: String!
    }

    input Logout {
        message: String!
    }
`;

export default userTypeDef