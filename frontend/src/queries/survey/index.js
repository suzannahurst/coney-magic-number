import gql from "graphql-tag";

const SURVEY_QUERY = gql`
  query Survey($slug: String!) {
    # query Surveys {
    surveys(filters: { slug: { eq: $slug } }) {
      # surveys {
      data {
        id
        attributes {
          name
          slug
          questions {
            data {
              id
              attributes {
                question
                a
                b
                c
              }
            }
          }
        }
      }
    }
  }
`;

export default SURVEY_QUERY;
