import type { NextPage } from "next";
import { Layout } from "layout";
import { useAuth } from "../../context/AuthContext";
import { deleteUser } from "firebase/auth";
import { useRouter } from "next/router";

const Dashboard: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <Layout>
      <main className="p-4">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-2xl text-center">Your Dashboard</h1>
          <p className="mt-4 text-lg text-center">
            ⚠️⚠️ This should be a protected route and only accessible when there
            is a user ⚠️⚠️
          </p>
          <button
            className="mt-4 py-2 px-6 text-gray-50 bg-red-600"
            onClick={async () => {
              try {
                if (user) {
                  await deleteUser(user);
                  await router.push("/login");
                }
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Delete Account
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Dashboard;
