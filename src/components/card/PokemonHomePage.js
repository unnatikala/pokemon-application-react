import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cardActions from "../../redux/card/cardActions";
import PokemonCard from "./PokemonCard";
import Header from "../header";
import Search from "../search";
import PageLimit from "../pageLimit";
import { StyledDivHome, StyledDivAlign } from "./styles";

const PokemonHomePage = (props) => {
  const {
    dispatchGetListAction,
    getList,
    searchResult,
    searchValuevar,
    limit,
  } = props;
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
  }, [getList, dispatchGetListAction]);

  useEffect(() => {
    dispatchGetListAction();
  }, [dispatchGetListAction]);

  return (
    <>
      <Header />
      <StyledDivAlign>
        <Search />
        <PageLimit />
      </StyledDivAlign>
      <StyledDivHome>
        <PokemonCard
          details={details}
          searchResult={searchResult}
          searchValuevar={searchValuevar}
          limit={limit}
        />
      </StyledDivHome>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getList: state.card.data,
    searchResult: state.card.searchValue,
    searchValuevar: state.card.searchValuevar,
    limit: state.card.limit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetListAction: () => dispatch(cardActions.dispatchGetListAction()),
  };
};

PokemonHomePage.propTypes = {
  dispatchGetListAction: PropTypes.func.isRequired,
  getList: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number.isRequired,
  searchValuevar: PropTypes.bool.isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHomePage);
