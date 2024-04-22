/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useEffect, useRef } from "react";
import { GalleryIcon } from "../assets/svg"
import { checkFileSize } from "../utilities/common";
import { toast } from "react-toastify";
import AppConfig from "../utilities/config";

interface UploadInputProps {
    uploadType?: 'image' | 'file'
    selectedFile: any;
    centered?: any;
    setSelectedFile: (url: any) => void;
    setPreview: (url: string) => void;
    preview: string,
    uploadText?: string,
    revokeAfterUpload?: boolean
}


function UploadInput({
    preview,
    setPreview,
    selectedFile,
    setSelectedFile,
    centered = true,
    uploadText = 'Upload a profile picture',
    revokeAfterUpload = true
}: UploadInputProps) {
    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    const onSelectFile = (e: any) => {
        const files = e.target.files;
        if (!files || files.length === 0) {
            // setSelectedFile(undefined);
            return;
        }
        if (!checkFileSize(files[0])) {
            // setSelectedFile(undefined);
            toast.error(`File selected exceeded file limit size of ${AppConfig.FILE_SIZE_LIMIT}mb`)
            return
        }
        setSelectedFile(files[0]);
    };

    useEffect(() => {
        if (!selectedFile) {
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
        if (revokeAfterUpload) {
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [selectedFile]);

    return (
        <div className="border border-grey-dark rounded-[5px] p-4 cursor-pointer" onClick={() => ref.current?.click()}>
            <div className={`flex ${centered ? 'justify-center' : ''} items-center gap-2`}>
                <GalleryIcon />
                <span className="text-md">{preview ? uploadText.replace("Upload a", "Change") : uploadText}</span>
            </div>
            <input
                ref={ref}
                onChange={onSelectFile}
                multiple={false}
                hidden
                type="file"
            />
        </div>
    )
}

export default UploadInput