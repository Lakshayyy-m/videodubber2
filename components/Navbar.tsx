"use client";
import { cn } from "@/lib/utils";
import { Stack, Text } from "@mantine/core";
import {} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    title: "Search",
    icon: "/icons/searchIcon.svg",
  },
  {
    title: "Settings",
    icon: "/icons/settingsIcon.svg",
  },
  {
    title: "Media",
    icon: "/icons/addIcon.svg",
  },
  {
    title: "Audio",
    icon: "/icons/musicNote.svg",
  },
  {
    title: "Subtitles",
    icon: "/icons/subtitlesIcon.svg",
  },
  {
    title: "Text",
    icon: "/icons/textIcon.svg",
  },
  {
    title: "Elements",
    icon: "/icons/elementIcon.svg",
  },
  {
    title: "Record",
    icon: "/icons/videoIcon.svg",
  },
];

const Navbar = () => {
  const [tab, setTab] = useState("Audio");

  return (
    <Stack
      w={"70px"}
      py={30}
      px={5}
      className="border-e-2 "
      h={"100vh"}
      justify="space-between"
    >
      <Stack align="center">
        <Stack
          align="center"
          mb={4}
          className="hover:bg-gray-200 p-2 rounded-2xl cursor-pointer"
        >
          <Image
            src={"/icons/hamburgerIcon.svg"}
            alt="navigation"
            width={20}
            height={20}
          />
        </Stack>
        {links.map((item) => (
          <Stack
            align="center"
            w={"100%"}
            key={item.title}
            className={cn("hover:bg-gray-200 p-2 rounded-2xl cursor-pointer transition-colors", {
              "bg-[#5966ec]": item.title === tab,
              "hover:bg-purple-400": item.title === tab,
            })}
            onClick={() => setTab(item.title)}
          >
            <Image src={item.icon} width={20} height={20} alt={item.title} />
            <Text size="xs">{item.title}</Text>
          </Stack>
        ))}
      </Stack>
      <Stack
        align="center"
        className="hover:bg-gray-200 p-2 rounded-2xl cursor-pointer"
      >
        <Image
          src={"/icons/helpIcon.svg"}
          width={25}
          height={20}
          alt={"Help"}
        />
      </Stack>
    </Stack>
  );
};

export default Navbar;
