import type { NextPage } from "next";
import { Layout } from "layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="p-4">
        <div className="container mx-auto">
          <h1>Hello, Index!</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
