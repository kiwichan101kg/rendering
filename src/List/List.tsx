export const List = () => {
  return (
    <>
      <ul>
        <Item itemName="にんじん" isPacked={true} />
        <Item itemName="トマト" isPacked={false} />
        <Item itemName="大根" isPacked={true} />
      </ul>
    </>
  );
};

const Item = ({
  itemName,
  isPacked,
}: {
  itemName: string;
  isPacked: boolean;
}) => {
  return (
    <>
      <li>{isPacked ? itemName + " ✅ " : itemName}</li>
    </>
  );
};
