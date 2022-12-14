// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql} from "graphql-request";


/**
 * Any file inside the folder pages/api is mapped to /api/* and will be treated
 * as an API endpoint instead of a page 
 */
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(req:any,res:any){
  const {name, email, slug, comment} = req.body; 

  const graphQLClient = new GraphQLClient(graphqlAPI!,{
    headers:{
      authorization:`Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  }) 

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data:{name: $name, email: $email, comment: $comment, post:{connect:{slug:$slug} } }){ id }
    }
  `

  const result = await graphQLClient.request(query,req.body)

  return res.status(200).send(result);

}