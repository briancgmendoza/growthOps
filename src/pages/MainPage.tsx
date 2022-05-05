import Button from "../components/Button";
import Form from "../components/Form";

const MainPage = () => {
  const DUMMY_DATAS = [
    {
      date: "05/05/2022",
      yesterdayWork: "Started GrowthOps Exam Development",
      planToday: "Polishing the code",
      blocker: "none",
    },
    {
      date: "05/05/2022",
      yesterdayWork: "Started GrowthOps Exam Development",
      planToday: "Polishing the code",
      blocker: "none",
    },
  ];

  const addWorkLog = () => {
    console.log("@@@@@@@@@@");
  };

  return (
    <section>
      <h3 className="d-flex justify-content-center m-3 fw-bold">Daily Scrum</h3>
      <table className="table table-stripped text-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>What you did yesterday?</th>
            <th>Today's plan</th>
            <th>Blocker</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {DUMMY_DATAS.length > 0 ? (
            DUMMY_DATAS.map((data, index) => (
              <tr key={index}>
                <td>{data.date}</td>
                <td>{data.yesterdayWork}</td>
                <td>{data.planToday}</td>
                <td>{data.blocker}</td>
                <td>
                  <Button
                    type="button"
                    onClick={() => {}}
                    className="btn btn-light mr-1"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {}}
                    className="btn btn-light mr-1"
                  >
                    <i className="bi bi-x-square"></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <p className="d-flex justify-content-center m-3">
              Work log is Empty.
            </p>
          )}
        </tbody>
      </table>
      <Form btnText="Add work log" />
    </section>
  );
};

export default MainPage;
