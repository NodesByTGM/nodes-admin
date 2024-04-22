/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import AppConfig from "./config";
import { AxiosError } from "axios";
import { AxiosData, IPayWithPaystack } from "../interfaces";
import moment from "moment";

declare const PaystackPop: any;

export const handleAxiosError = (e: AxiosError<AxiosData>) => {
  console.log(e.response?.status, e.response?.data);
  const message = e?.response?.data.message;
  if (message) {
    toast.error(message);
  } else {
    toast.error(AppConfig.ERROR_MESSAGES.ServerError);
  }
};

// File
export const checkFileSize = (file: File) => {
  const fsize = file.size;
  const size = Math.round(fsize / 1024 / 1024);
  if (size > AppConfig.FILE_SIZE_LIMIT) {
    return false;
  }
  return true;
};



export const getNameInitials = (name: string): string => {
  // Split the name into words
  const words = name.split(' ');

  // Initialize an empty string to store initials
  let initials = '';

  // Iterate over each word
  words.forEach((word, ) => {
    // If the initials are less than 2 and there's a character in the current word, add it to initials
    if (initials.length < 2 && word.length > 0) {
      // Add the first character of the word to initials
      initials += word[0].toUpperCase();
    }
  });

  return initials;
};

export const getExtension = (fileName: string) => {
  return fileName.substring(fileName.lastIndexOf(".") + 1);
};

export const getTypefromExtension = (fileName: string) => {
  const ext = fileName.substring(fileName.lastIndexOf(".") + 1);
  const allowedExtensionsObj: any = AppConfig.SUPPORTED_EXTENTIONS;
  return allowedExtensionsObj[ext];
};

export const convertToBase64 = async (file: File) => {
  /*
        Coverts file to base64
        params description :
            file : a file to be uploaded      
    */
  console.log(file, null, 2);
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

// Date & Time
// export const objectToQueryString = (obj: StringMap) => {
//     const keyValuePairs = [];

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
//         }
//     }

//     return keyValuePairs.join('&');
// }

export function returnMaxDate (){
  const currentDate = new Date();
  const maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    const formattedMaxDate = maxDate.toISOString().split('T')[0];

    return formattedMaxDate
}
export function capitalizeWords(str) {
  return str.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
}

export const checkIfCurrentPlan = (user, plan) => {
  if(user?.subscription?.plan?.tolowerCase() === plan?.type?.toLowerCase()){
    return true
  }
  return false
}

export const formatDate = (date: string) => {
  return moment(date).calendar({
    sameDay: "[Today]",
    lastDay: "[Yesterday]",
    lastWeek: "MMM DD, YYYY",
    sameElse: "MMM DD, YYYY",
  });
};

export const convertSecondsToTime = (durationInSeconds: number) => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  // Format the result as "m:ss"
  const formattedTime = `${minutes}:${String(seconds).padStart(2, "0")}`;

  return formattedTime;
};

// Text checks and manipulations
export const getLimitedText = (text = "", description = false) => {
  if (text.length > 0) {
    return text.split("").slice(0, 50).join("");
  }
  if (description) return "No description.";
  return "";
};

export const getInitials = (fullName = "") => {
  if (fullName.length === 0) {
    return "";
  }
  // Split the name into words
  const words = fullName.split(" ");

  // Extract the first letter of each word
  const initials = words.map((word) => word.charAt(0));

  // Concatenate the initials to form the result
  return initials.join("").toUpperCase();
};

export const containsSpecialCharacters = (inputString: string) => {
  const specialCharacters = /[^a-zA-Z0-9\s]/;
  return specialCharacters.test(inputString);
};

export const containsNumber = (inputString: string) => {
  const hasNumber = /\d/;
  return hasNumber.test(inputString);
};

export const isEmail = (str: string) => {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
};

// Form
export const validateObjectValues = (dataObject: any) => {
  for (const key in dataObject) {
    const value = dataObject[key];
    if (!value) {
      return false; // If any key does not have a value, return false
    }
  }
  return true; // All keys have corresponding values
};

export const validateFormData = (formData: FormData) => {
  for (const [_, value] of formData.entries()) {
    if (!value) {
      console.log(_);
      return false; // If any key does not have a value, return false
    }
  }
  return true; // All keys have corresponding values
};

export const payWithPaystack = ({
  email,
  amount,
  plan,
  onSuccess,
  onClose,
}: IPayWithPaystack) => {
  const handler = PaystackPop.setup({
    key: `${import.meta.env.VITE_APP_PAYSTACK_API_PUBLIC_KEY}`,
    email,
    amount: amount * 100,
    plan,
    onSuccess,
    onClose,
  });
  handler.openIframe();
};
