import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "layout";

const Register: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmation, setConfirmation] = useState<string>("");

  const router = useRouter();

  return (
    <Layout>
      <main className="p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center">Register Your Account</h1>
          <form
            className="w-1/2 mt-4 mx-auto"
            onSubmit={async (e) => {
              e.preventDefault();

              console.log("Submitting form...");

              await router.push("/dashboard");
            }}
          >
            <div className="mb-4">
              <label htmlFor="email" />
              <input
                className="w-full p-2 border-2 border-gray-900"
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" />
              <input
                className="w-full p-2 border-2 border-gray-900"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmation" />
              <input
                className="w-full p-2 border-2 border-gray-900"
                name="confirmation"
                type="password"
                placeholder="Password Confirmation"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                className="w-full py-2 px-6 text-gray-50 bg-gray-900"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Register;
