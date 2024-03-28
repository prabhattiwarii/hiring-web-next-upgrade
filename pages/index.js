import React from "react";
import Head from "next/head";
import common from "@/Helpers/common";
import Layout from "@/Components/layout/Layout";
import Banner from "@/Components/home.js/banner";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>{common.APP_NAME}</title>
      </Head>
      <Layout>
        <Banner/>
      </Layout>
    </React.Fragment>
  );
};

export default Home;