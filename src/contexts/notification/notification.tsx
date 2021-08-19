import { ReactNode, useState } from "react";

export type Notification = {
  children?: ReactNode;
  message?: string;
  detail: string;
};

export function useNotification(defaultNotification?: Notification) {
  const [notification, setNotification] = useState(defaultNotification);
  return { notification, setNotification };
}
