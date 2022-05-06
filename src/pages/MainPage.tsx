import * as React from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import { db } from "../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const MainPage = () => {
  const [datas, setDatas] = React.useState([]);
  const dailyLogCollection = collection(db, "dailyLog");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  let magicNumber = 0;

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getDocs(dailyLogCollection);
        setDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  if (typeof datas === "object") {
    // const convertObj = Object.values(datas);
    // console.log(convertObj);
  } else {
    console.log("false");
  }

  const removeWorkLogHandler = async (id: any) => {
    const scrumDoc = doc(db, "dailyLog", id);
    await deleteDoc(scrumDoc);
    alert("Deleted successfully!");
    window.location.reload();
  };

  return (
    <>
      {isLoading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        <section>
          <h3 className="d-flex justify-content-center m-3 fw-bold">
            Daily Scrum
          </h3>
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
              {datas.length > 0 ? (
                datas.map((data: any, index: any) => (
                  <tr key={index}>
                    <td>{data[magicNumber].date}</td>
                    <td>{data[magicNumber].yesterdayWork}</td>
                    <td>{data[magicNumber].planToday}</td>
                    <td>{data[magicNumber].blocker}</td>
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
                        onClick={() => removeWorkLogHandler(data.id)}
                        className="btn btn-light mr-1"
                      >
                        <i className="bi bi-x-square"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td className="fw-bold">Work log is Empty.</td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
          <Button
            type="button"
            onClick={() => setShowModal(!showModal)}
            className="btn btn-primary float-end"
          >
            {showModal ? "Close Form" : "Add work log"}
          </Button>
          {showModal && (
            <Form btnText="Submit" onClose={() => setShowModal(false)} />
          )}
        </section>
      )}
    </>
  );
};

export default MainPage;
