"use client";
import { useFile } from "@/context/FileContext";
import { Box, Flex } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Dropbox from "./Dropbox";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { audioFileURL } = useFile();
  const [isUploaded, setIsUploaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (audioFileURL.startsWith("blob:")) {
      setIsUploaded(true);
      router.push("/edit");
    }
  }, [audioFileURL, router]);
  return (
    <Flex justify={"center"} align={"center"}>
      {!isUploaded && <Dropbox />}
    </Flex>
  );
};

export default HomePage;
