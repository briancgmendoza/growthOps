import * as React from "react";

import Modal from "../Modal";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

type Props = {
  btnText: string;
  onClose?: (e: React.SyntheticEvent) => void;
};

const Form = ({ btnText, onClose }: Props) => {
  const [submittedData, setSubmittedData] = React.useState([
    {
      date: "",
      yesterdayWork: "",
      planToday: "",
      blocker: "",
    },
  ]);

  const dailyLogCollection = collection(db, "dailyLog");
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addDoc(dailyLogCollection, {
      ...submittedData,
    });
    // For some reason my modal doesn't work, so just alert message.
    alert("Added successfully!");
    window.location.reload();
  };

  const handleFormChange = (
    index: number,
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    let data: any = [...submittedData];
    data[index][e.currentTarget.name] = e.currentTarget.value;
    setSubmittedData(data);
  };

  const renderDynamicForm = () => {
    return submittedData.map((input, index) => {
      return (
        <div key={index} className="d-flex flex-column justify-content-center">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={input.date}
            onChange={(e) => handleFormChange(index, e)}
            name="date"
            id="date"
            required
          />

          <label htmlFor="yesterdayWork">What you did yesterday?</label>
          <input
            type="text"
            value={input.yesterdayWork}
            onChange={(e) => handleFormChange(index, e)}
            name="yesterdayWork"
            id="yesterdayWork"
            required
          />

          <label htmlFor="planToday">Today's plan</label>
          <input
            type="text"
            value={input.planToday}
            onChange={(e) => handleFormChange(index, e)}
            name="planToday"
            id="planToday"
            required
          />

          <label htmlFor="blocker">Blockers</label>
          <input
            type="text"
            value={input.blocker}
            onChange={(e) => handleFormChange(index, e)}
            name="blocker"
            id="blocker"
          />
        </div>
      );
    });
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={(values) => onSubmitHandler(values)}>
        {renderDynamicForm()}
        <div>
          <button type="submit" className="btn btn-primary m-2 float-end">
            {btnText}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
