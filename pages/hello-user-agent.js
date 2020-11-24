import Head from "next/head";

export default function HelloUserAgent({ userAgent = "NoBody" }) {
  return (
    <>
      <Head>
        <title>Hello User Agernt!</title>
      </Head>
      <p>
        {" "}
        Hi <em>{userAgent}</em> !{" "}
      </p>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      userAgent: req.headers["user-agent"],
    },
  };
};
