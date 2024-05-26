"use client";
import { Box, Flex, Text, Title, rem } from "@mantine/core";
import { IconUpload, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, FileWithPath } from "@mantine/dropzone";
import { useFile } from "@/context/FileContext";

const Dropbox = (props: Partial<DropzoneProps>) => {
  const { audioFileURL, setAudioFileURL } = useFile();

  const handleUpload = (file: FileWithPath[]) => {
    setAudioFileURL(URL.createObjectURL(file[0]));
    console.log(file[0]);
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      direction="column"
      justify={"center"}
      align={"center"}
      className="bg-gray-300 justify-center items-center relative"
    >
      <Box
        w="90vw"
        maw="800px"
        className="flex justify-center bg-white flex-col items-center rounded-2xl gap-9 m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-20"
      >
        <Title order={3} className="text-xl">
          Add Audio or Video
        </Title>
        <Dropzone
          onDrop={(files) => handleUpload(files)}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={5 * 1024 ** 2}
          accept={{
            "audio/*": [],
            "video/*": [],
          }}
          {...props}
          w={"90%"}
          className="rounded-3xl flex w-full justify-center items-center"
          radius={"md"}
          mih={220}
        >
          <Flex
            justify="center"
            gap="sm"
            style={{ pointerEvents: "none" }}
            align={"center"}
            className="bg-[#5966ec] h-fit text-white py-4 px-8 rounded-xl font-semibold"
          >
            <Dropzone.Accept>
              <Flex align={"center"} gap={"sm"} className="flex">
                <IconUpload
                  style={{
                    width: rem(20),
                    height: rem(20),
                    color: "white",
                  }}
                  stroke={1.5}
                />
                <Text>Drop your files here</Text>
              </Flex>
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(20),
                  height: rem(20),
                  color: "white",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <Flex align={"center"} gap={"lg"} className="flex">
                <IconUpload
                  style={{
                    width: rem(21),
                    height: rem(20),
                    color: "white",
                  }}
                  stroke={1.5}
                />
                <Text size="sm" inline>
                  Upload a file
                </Text>
              </Flex>
            </Dropzone.Idle>
          </Flex>
        </Dropzone>
      </Box>
    </Flex>
  );
};

export default Dropbox;
