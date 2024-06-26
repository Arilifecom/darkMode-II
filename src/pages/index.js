import { Icon2 } from "@/compornents/Icons";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AddingDarkMode</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="text-center p-3">
        <h1 className="w-[70vw] mt-12 mx-auto text-6xl font-extrabold dark:text-light">
          Dark mode to suit the user's preference
        </h1>
        <div
          className="flex flex-col items-center justify-center max-w-lg mx-auto gap-5 bg-light mt-6 py-10 px-8
        border-[4px]  border-dark rounded-lg dark:bg-dark dark:text-light dark:border-light
        "
        >
          <Icon2 className="w-[300px]" />
          <p>
            ホームページに入った時、ユーザーのデバイスがダークモード設定中ならダークモードに。切り替えボタンをクリックするとダークモード/ライトモード切り替え可能。
          </p>
        </div>
      </main>
    </>
  );
}
