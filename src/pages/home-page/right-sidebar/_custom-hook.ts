import { useEffect, useState } from "react";
import { OnlineUserTyp, Page } from "./_types";
import { mockOnlineUsers, mockPages } from "./_mock-data";

const usePages = () => {
  const [pages, setPages] = useState<Page[] | null>(null);
  useEffect(() => {
    setPages(mockPages);
  }, []);
  return [pages, setPages];
};

const useOnlineUsers = () => {
  const [users, setUsers] = useState<OnlineUserTyp[] | null>(null);
  useEffect(() => {
    setUsers(mockOnlineUsers);
  }, []);
  return [users, setUsers];
};

export { usePages, useOnlineUsers };
