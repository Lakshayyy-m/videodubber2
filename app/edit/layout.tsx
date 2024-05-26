import type { Metadata } from "next";

import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import { Flex, Group, Stack } from "@mantine/core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Edit audio",
  description: "Edit audio page",
};

function EditPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction={"row"}>
      <Navbar />
      <Stack justify="space-between">
        {children}
        <Footer />
      </Stack>
    </Flex>
  );
}

export default EditPageLayout;
