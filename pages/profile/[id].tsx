import type { NextPage } from 'next'
import type { IUserProfile } from '../../types/user'
import { GetServerSideProps } from 'next'
import { initializeApollo } from '../../lib/apolloClient'
import { USER } from '../../apollo/queries/user'
import { MainLayout, UserProfile } from '../../modules'

interface IProps {
  data: {
    loading: boolean
    data: {
      user: IUserProfile
    }
  }
}

const Profile: NextPage<IProps> = ({ data: { loading, data } }) => {
  return <MainLayout>{data && <UserProfile user={data.user} />}</MainLayout>
}

console.log('render: pages/profile/[id]/Profile')

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const data = await apolloClient.query({
    query: USER,
    variables: { userID: params?.id },
  })

  return {
    props: { data },
  }
}

export default Profile
