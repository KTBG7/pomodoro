import {SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import logo from 'public/logo.png'
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-purple-900 to-purple-600">
      <nav className="flex px-12 justify-between min-w-full h-32 flex-end items-center">
        <Image
          src={logo}
          alt="Kevin Ibanez Logo"
          width={250}
         />
        {user.isSignedIn ? 
            <div>
              <SignedIn>
                <UserButton appearance={{ userProfile: {
                  elements: {
                    avatarImage: "h-64",
                    userButtonAvatarImage: "h-64"
                  }
                }}} />
              </SignedIn> 
            </div>
          : null
        }
        {!user.isSignedIn ? 
          <div className="text-2xl text-white">
            <SignedOut> 
              <SignInButton />
            </SignedOut>
          </div> : null
        }
      </nav>
      </main>
    </>
  );
};

export default Home;
