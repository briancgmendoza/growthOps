import * as React from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";
import Form from "../components/Form";
import { db } from "../firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const MainPage = () => {
  const [datas, setDatas] = React.useState([]);
  const dailyLogCollection = collection(db, "dailyLog");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  let magicNumber = 0;

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

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

  // if (typeof datas === "object") {
  //   const convertObj = Object.values(datas);
  //   console.log(convertObj);
  // } else {
  //   console.log("false");
  // }

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
          <h3 className="text-center fw-bold">Daily Scrum</h3>
          <div className="my-0 mx-auto">
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  {width > 500 && <th scope="col">Date</th>}
                  <th scope="col">What you did yesterday?</th>
                  <th scope="col">Today's plan</th>
                  <th scope="col">Blocker</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>

              <tbody>
                {datas.length > 0 ? (
                  datas.map((data: any, index: any) => (
                    <tr key={index}>
                      {width > 500 && <td>{data[magicNumber].date}</td>}
                      <td>{data[magicNumber].yesterdayWork}</td>
                      <td>{data[magicNumber].planToday}</td>
                      <td>{data[magicNumber].blocker}</td>
                      <td>
                        {/* 
                          * Decided not to add edit function
                        <Button
                          type="button"
                          onClick={() => {}}
                          className={`btn btn-light ${width <= 1192 && "mb-1"}`}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Button> */}
                        <Button
                          type="button"
                          onClick={() => removeWorkLogHandler(data.id)}
                          // className={`btn btn-light ${width >= 1193 && "mx-1"}`}
                          className="btn btn-light"
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
          </div>
          <Button
            type="button"
            onClick={() => setShowModal(!showModal)}
            className="btn btn-primary float-end"
          >
            Add Work Log
          </Button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <Form
                btnText="Submit"
                btnSecText="Close"
                onClose={() => setShowModal(false)}
              />
            </Modal>
          )}
        </section>
      )}
    </>
  );
};

export default MainPage;
