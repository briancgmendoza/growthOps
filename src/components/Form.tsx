import React from "react";

type Props = {
  btnText: string;
  onSubmit: (e: React.SyntheticEvent) => void | any;
};

const Form = ({ btnText, onSubmit }: Props) => {
  return (
    <form onSubmit={(values) => onSubmit(values)}>
      <button type="submit">{btnText}</button>
    </form>
  );
};

export default Form;
