import { useEffect, useState } from "react";
import { CourseItemType, EnterType } from "../AddCourseItemModule.types";

export const useAddCourseItemModule = () => {
  const [items, setItems] = useState<CourseItemType[]>([]);

  useEffect(() => {
    AddItem();
  }, []);

  const AddItem = () => {
    setItems([
      ...items,
      { id: Math.floor(Math.random() * 10000), title: "", translation: "" },
    ]);
  };

  const DeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const UpdateItem = (index: number, string: string, type: EnterType) => {
    const newArray = [...items];
    const newItem = { ...newArray[index] };

    newItem[type === EnterType.TITLE ? "title" : "translation"] = string;
    newArray[index] = newItem;

    setItems(newArray);
  };

  return { AddItem, DeleteItem, UpdateItem, items };
};
