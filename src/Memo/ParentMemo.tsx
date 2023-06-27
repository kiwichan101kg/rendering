import React, {
  ChangeEvent,
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";

export const ParentMemo = () => {
  const [value, setValue] = useState("");
  console.log("Parentレンダリング");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const todayDate = useMemo(() => {
    console.log("Date");
    const dateObj = new Date();
    console.log(dateObj.getMonth());

    const dateString = `${dateObj.getFullYear()}年${
      dateObj.getMonth() + 1
    }月${dateObj.getDate()}日`; // YYYY年MM月DD日
    return <p>日付：{dateString}</p>;
  }, []);

  return (
    <>
      <Child handleChange={handleChange} />
      {todayDate}
    </>
  );
};
const Child = memo(
  ({
    handleChange,
    value,
  }: {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
  }) => {
    console.log("Childレンダリング");

    return (
      <div>
        Child
        <input type="text" onChange={handleChange} />
      </div>
    );
  }
);
