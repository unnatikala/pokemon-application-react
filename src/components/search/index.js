import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cardActions from "../../redux/card/cardActions";
import { ButtonComponent, InputComponent, Wrapper } from "./styles";

const SearchBar = (props) => {
  const { getList } = props;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    function getDetails() {
      getList.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        const data = await res.json();
        setDetails((curr) => [...curr, data]);
      });
    }
    getDetails();
  }, [getList]);

  const [search, updateSearch] = useState();
  const onSearchChange = (value) => {
    const searchResults = [];
    details.map((item) => {
      const searchByAbilities = item.abilities
        .map((value) => value.ability.name)
        .find((val) => val)
        .includes(value);
      if (item.name.includes(value) || searchByAbilities) {
        return searchResults.push(item);
      }
      return null;
    });
    props.searchRecord(searchResults);
  };

  return (
    <Formik
      initialValues={{ search }}
      onSubmit={(values) => {
        updateSearch(values.search);
        onSearchChange(values.search);
      }}
    >
      {(formik) => {
        const { values, handleChange, handleSubmit } = formik;
        return (
          <Form className="search">
            <Wrapper>
              <InputComponent
                onChange={(e) => {
                  handleChange(e);
                  handleSubmit();
                }}
                value={values.search}
                name="search"
                type="text"
                placeholder="Search..."
                autoComplete="search"
              />
              <ButtonComponent className="search-btn" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </ButtonComponent>
            </Wrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    getList: state.card.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchRecord: (searchResults) =>
      dispatch(cardActions.searchRecord(searchResults)),
  };
};

SearchBar.propTypes = {
  getList: PropTypes.func.isRequired,
  searchRecord: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
