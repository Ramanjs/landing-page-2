import client from '@sanity/client'
const sanityClient = client({
    projectId: 'jqjakyhg',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25'
  
})

export default sanityClient
