// external imports
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

// internal imports
import ProjectTitleResult from "../Components/Search/ProjectTitleResult";
import OtherDetailsResult from "../Components/Search/OtherDetailsResult";

// initialization
const cookies = new Cookies();

export default function Search() {
  // initial state
  const [searchResult, setSearchResult] = useState([]);
  // get search input from browser cookie
  const searchInput = cookies.get("SEARCH-INPUT");

  // make API call here
  useEffect(() => {
    // get search input from browser cookie
    const data = cookies.get("SEARCH-INPUT"),
      url = "https://ideas-app-api.herokuapp.com/projects/search",
      method = "post";

    // get projects
    axios({ url, method, data })
      .then((result) => {
        setSearchResult(result.data);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  // seperate the search result
  const projectTitleResult = searchResult.projectNameResult,
    otherDetailsResult = searchResult.otherDetailsResult;

  // get number of search result
  let projectTitleTotal;
  let otherDetailsTotal;

  for (projectTitleTotal in projectTitleResult) {
    projectTitleTotal++;
  }

  for (otherDetailsTotal in otherDetailsResult) {
    otherDetailsTotal++;
  }

  return (
    <main className="wrapper" id="search_page">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 className="headings">Search Result for:</h4>

          {/* if there is a search word, display it */}
          {searchInput ? (
            <h1 className="text-center">{searchInput.search.toUpperCase()}</h1>
          ) : (
            <h1 className="text-center text-danger">
              You haven't Entered any search word
            </h1>
          )}
        </Col>
      </Row>

      {/* show search result or a pending message */}
      {searchInput ? (
        <>
          <ProjectTitleResult
            projectTitleResult={projectTitleResult}
            total={projectTitleTotal}
          />

          <OtherDetailsResult
            otherDetailsResult={otherDetailsResult}
            total={otherDetailsTotal}
          />
        </>
      ) : (
        <h3 className="text-center text-danger">
          Your Search Result will Appear here...
        </h3>
      )}
    </main>
  );
}
