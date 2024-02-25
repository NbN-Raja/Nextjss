// page.jsx
import Layout from './layout'; // Import the Layout component

import UserPosts from './component/userpost';
import UserProfile from "./[username]/page"

export default function ProfilePage() {
  return (
    <Layout> {/* Wrap the ProfilePage content within the Layout component */}
      <div className="container p-2 justify-center items-center">
        <UserPosts />
        <UserProfile />
      </div>
    </Layout>
  );
}
