import * as React from "react";

import Button from "../Button";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

type Props = {
  btnText?: string;
  btnSecText?: string;
  onClose?: (e: React.SyntheticEvent) => void;
};

const Form = ({ btnText, btnSecText, onClose }: Props) => {
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
        <div key={index}>
          <div className="form-floating mb-3">
            <input
              type="date"
              value={input.date}
              onChange={(e) => handleFormChange(index, e)}
              name="date"
              id="date"
              required
              className="form-control"
              placeholder=""
            />
            <label htmlFor="date">Date</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              value={input.yesterdayWork}
              onChange={(e) => handleFormChange(index, e)}
              name="yesterdayWork"
              id="yesterdayWork"
              required
              className="form-control"
              placeholder=""
            />
            <label htmlFor="yesterdayWork">What you did yesterday?</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              value={input.planToday}
              onChange={(e) => handleFormChange(index, e)}
              name="planToday"
              id="planToday"
              required
              className="form-control"
              placeholder=""
            />
            <label htmlFor="planToday">Today's plan</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              value={input.blocker}
              onChange={(e) => handleFormChange(index, e)}
              name="blocker"
              id="blocker"
              className="form-control"
              placeholder=""
            />
            <label htmlFor="blocker">Blockers</label>
          </div>
        </div>
      );
    });
  };

  return (
    <form onSubmit={(values) => onSubmitHandler(values)} className="gy-2 gx-3">
      {renderDynamicForm()}
      <div className="float-end">
        <Button type="submit" className="btn btn-success m-2">
          {btnText}
        </Button>
        <Button type="button" className="btn btn-danger m-2" onClick={onClose}>
          {btnSecText}
        </Button>
      </div>
    </form>
  );
};

export default Form;
