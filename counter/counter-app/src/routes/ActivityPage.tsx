import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { fetchActivityStart } from "../store/activitySlice";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "../views/Counter/styles";
import { PageContent } from "./PageStyles";

const ActivityPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const continents = useSelector(
    (state: RootState) => state.activity.activities,
  );
  const loading = useSelector((state: RootState) => state.activity.loading);
  const error = useSelector((state: RootState) => state.activity.error);
  useEffect(() => {
    dispatch(fetchActivityStart());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {loading && <PageContent>Loading...</PageContent>}{" "}
      {error && <p>Error: {error}</p>}{" "}
      <Container>
        {" "}
        {continents.length ? (
          continents.map((activity, index) => (
            <Container>
              <PageContent key={index}>
                {activity.name} has {activity.countries} countries
              </PageContent>
            </Container>
          ))
        ) : (
          <PageContent>No continents found</PageContent>
        )}
      </Container>
      <Container>
        <Button onClick={() => dispatch(fetchActivityStart())}>
          Get continents info
        </Button>
      </Container>
    </>
  );
};

export default ActivityPage;
