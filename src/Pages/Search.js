// external imports
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

// internal imports
import SingleProject from "../Components/Main/SingleProject";
import formatDate from "../Components/Helpers/FormatDate";

// initialization
const cookies = new Cookies();

export default function Search() {
  // initial state
  const [searchResult, setSearchResult] = useState([]);
  // get search input from browser cookie
  const data = cookies.get("SEARCH-INPUT");

  // make API call here
  useEffect((data) => {
    const url = "https://ideas-app-api.herokuapp.com/projects/search",
      method = "get";

    // get projects
    axios({ url, method, data })
      .then((result) => {
        setSearchResult(result.data);
      })
      .catch((error) => {
        console.log(error);
        error = new Error();
      });
  }, []);

  // seperate the search result
  const projectTitleResult = searchResult.projectNameResult,
    otherDetailsResult = searchResult.otherDetailsResult;

  return (
    <main className="wrapper" id="search_page">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 className="headings">Search Result for:</h4>
          <h1 className="text-center">{data.search.toUpperCase()}</h1>
        </Col>
      </Row>

      {/* search result for project title */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 className="search_result">Results from Project Title:</h4>
        </Col>
      </Row>

      <Row>
        {projectTitleResult &&
          projectTitleResult.length > 0 &&
          projectTitleResult.map((project) => (
            <SingleProject
              projectTitle={project.projectName}
              userName={project.userName}
              createdAt={formatDate(project.createdAt)}
              updatedAt={formatDate(project.updatedAt)}
              // this is for the see more button
              instructionURL={project.instructionURL}
              otherDetails={project.otherDetails}
              sampleURL={project.sampleURL}
              seniority={project.seniority}
            />
          ))}
      </Row>

      {/* search result for Other Details */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 className="search_result">Results from Other Details:</h4>
        </Col>
      </Row>

      <Row>
        {otherDetailsResult &&
          otherDetailsResult.length > 0 &&
          otherDetailsResult.map((project) => (
            <SingleProject
              projectTitle={project.projectName}
              userName={project.userName}
              createdAt={formatDate(project.createdAt)}
              updatedAt={formatDate(project.updatedAt)}
              // this is for the see more button
              instructionURL={project.instructionURL}
              otherDetails={project.otherDetails}
              sampleURL={project.sampleURL}
              seniority={project.seniority}
            />
          ))}
      </Row>
    </main>
  );
}
