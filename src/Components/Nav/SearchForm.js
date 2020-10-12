import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function SearchForm(props) {
  // set initial states
  const [search, setSearch] = useState("");
  // const [isSearching, setIsSearching] = useState(false);

  // yup schema for validation
  const schema = yup.object().shape({
    search: yup.string().required().trim(),
  });

  // get what we need from useform()
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // execute here when form is submitted
  const onSubmit = (data) => {
    // create cookie with the data passed
    //   this will make it available in the whole app do the search component can recieve it
    cookies.set("SEARCH-INPUT", data, { path: "/search" });
    // redirect user to the feeds page
    window.location.href = "/search";
  };

  return (
    <>
      <Form inline onSubmit={handleSubmit(onSubmit)}>
        {/* search input */}
        <FormControl
          type="text"
          name="search"
          value={search}
          ref={register}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="mr-sm-2 shadow-none"
        />

        <Button type="submit">
          <FaSearch />
        </Button>
      </Form>
    </>
  );
}
