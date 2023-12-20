import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";

export default function Root() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}