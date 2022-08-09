import * as React from "react";
import axios from "axios";
import CustomPaginationActionsTable from "../components/users-table";

export default function Users({ users }: any) {
  console.log(users);
  return <CustomPaginationActionsTable />;
}

Users.getInitialProps = async (ctx: any) => {
  const res = await axios.get("http://localhost:3001/users");
  const json = await res.data.data;
  return { users: json };
};
