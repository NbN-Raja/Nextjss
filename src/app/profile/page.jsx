// page.jsx
import Layout from './layout'; // Import the Layout component
import UserDetails from './component/userdetails';
import PostDetails from './component/postsdetails';

export default function ProfilePage() {
  return (
    <Layout> {/* Wrap the ProfilePage content within the Layout component */}
      <div className="container p-2 justify-center items-center">
        <UserDetails />
        <PostDetails />
      </div>
    </Layout>
  );
}
