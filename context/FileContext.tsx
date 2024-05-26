"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface FileContextType {
  audioFileURL: string;
  setAudioFileURL: (mode: string) => void;
}

const FileContext = createContext<FileContextType>({
  audioFileURL: "",
  setAudioFileURL: () => {},
});

const FileContextProvider = ({ children }: { children: ReactNode }) => {
  const [audioFileURL, setAudioFileURL] = useState("");

  // useEffect(() => {
  //   setFileURL("");
  // }, [fileURL]);

  return (
    <FileContext.Provider value={{ audioFileURL, setAudioFileURL }}>
      {children}
    </FileContext.Provider>
  );
};

export function useFile() {
  const context = useContext(FileContext);

  return context;
}

export { FileContext, FileContextProvider };
