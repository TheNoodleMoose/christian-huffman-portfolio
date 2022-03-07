import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' content='#000' />
      <meta
        name='description'
        content={`Hi! I'm a frontend engineer, deep thinker, problem solver, and lover of all things JavaScript!`}
      />
      <meta
        property='og:image'
        content={"https://www.christianhuffman.com/assets/previewimage.png"}
      />
      <meta name='author' content='Christian Huffman' />
      <meta
        name='keywords'
        content='react, react native, frontend, engineer, developer, christian'
      />
    </Head>
  );
};

export default Meta;
