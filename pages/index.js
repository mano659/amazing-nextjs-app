import Head from "next/head";

export default function Home({
  title = "Mano's Amazing Weather App",
  metaContent = "This site is awesome.",
  pageContent = "This app is created using Next.js",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={metaContent} />
      </Head>
      <div>
        <h1>{title}</h1>
        <p>{pageContent}</p>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      title: "Mano's Amazing Weather App",
      metaContent: "This site is really awesome.",
      pageContent: "This awesome app doesn't do anything for now :(",
    },
  };
};
