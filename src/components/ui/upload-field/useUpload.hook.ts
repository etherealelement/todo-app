import { useState, ChangeEvent,useCallback, useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface UploadResponse {
  url: string;
  name: string;
  mimetype: string;
}

async function upload(data: FormData, folder?: string) {
  const {data :returnedData} = await axios.post<UploadResponse>("http://localhost:5000/api/file-upload", data, {
    params: {
      folder,
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return returnedData;
}

type TypeUpload = (
  onChange: (...event: any) => void,
  folder?: string
) => {
  uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  isLoading: boolean;
};

export const useUpload: TypeUpload = (onChange, folder) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mutateAsync } = useMutation(
    ["upload-file-mutation"],
    (data: FormData) => upload(data, folder),
    {
      onSuccess(data) {
        onChange(data.url);
      },
      onError(error: unknown) {
        console.log(error);
      },
    }
  );

  const uploadFile = useCallback(
    async (e:ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true)
      const files = e.target.files;
      if(files?.length) {
        const formData = new FormData()
        formData.append('file', files[0])
        await mutateAsync(formData)

        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setIsLoading(false);
      }
    }, [mutateAsync]
  )

  return useMemo(() => ({ uploadFile, isLoading }), [uploadFile, isLoading]);

};
