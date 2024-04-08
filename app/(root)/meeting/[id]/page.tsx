import React from "react";

// arguments from here
//https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Room: #{params.id}</div>;
};

export default Meeting;
