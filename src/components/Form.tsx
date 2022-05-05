import * as React from "react";

type Props = {
  btnText: string;
};

const Form = ({ btnText }: Props) => {
  const [enteredDate, setEnteredDate] = React.useState("");
  const [enteredYesterdayWork, setEnteredYesterdayWork] = React.useState("");
  const [enteredPlanToday, setEnteredPlanToday] = React.useState("");
  const [enteredBlocker, setEnteredBlocker] = React.useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("enteredDate", enteredDate);
    console.log("enteredYesterdayWork", enteredYesterdayWork);
    console.log("enteredPlanToday", enteredPlanToday);
    console.log("enteredBlocker", enteredBlocker);

    setEnteredDate("");
    setEnteredYesterdayWork("");
    setEnteredPlanToday("");
    setEnteredBlocker("");
  };

  const dateOnChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setEnteredDate(e.currentTarget.value);
  };

  const yesterdayWorkOnChangeHandler = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setEnteredYesterdayWork(e.currentTarget.value);
  };
  const planTodayOnChangeHandler = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setEnteredPlanToday(e.currentTarget.value);
  };

  const blockerOnChangeHandler = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setEnteredBlocker(e.currentTarget.value);
  };

  return (
    <form
      onSubmit={(values) => onSubmitHandler(values)}
      className="d-flex flex-column justify-content-center col-md-12"
    >
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={dateOnChangeHandler}
        value={enteredDate}
      />

      <label htmlFor="yesterdayWork">What you did yesterday?</label>
      <input
        type="text"
        name="yesterdayWork"
        id="yesterdayWork"
        onChange={yesterdayWorkOnChangeHandler}
        value={enteredYesterdayWork}
      />

      <label htmlFor="planToday">Today's plan</label>
      <input
        type="text"
        name="planToday"
        id="planToday"
        onChange={planTodayOnChangeHandler}
        value={enteredPlanToday}
      />

      <label htmlFor="blocker">Blocker?</label>
      <input
        type="text"
        name="blocker"
        id="blocker"
        onChange={blockerOnChangeHandler}
        value={enteredBlocker}
      />

      <div>
        <button type="submit" className="btn btn-primary m-2 float-end">
          {btnText}
        </button>
      </div>
    </form>
  );
};

export default Form;
