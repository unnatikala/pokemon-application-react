import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {
  CardWrapper,
  StyledH3,
  StyledDiv,
  StyledDivList,
  StyledParagraph,
} from "./styles";

const PokemonCard = (props) => {
  const { details, searchResult, searchValuevar, limit } = props;

  const history = useHistory();
  const viewSinglePokemonRecord = (index, id) => {
    return history.push({
      pathname: `/viewSinglePokemonRecord/${id}`,
      state: details.find((value) => value.id === id),
    });
  };

  const items = details.slice(0, limit);
  const displaySearch =  searchResult.slice(0, limit);
  return (
    <>
      {searchValuevar === ""
        ? items?.map((pokemon, index) => (
            <CardWrapper onClick={() => viewSinglePokemonRecord(index, pokemon.id)}>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.sprites.other.dream_world.front_default}
                height="100px"
              />
              <StyledDiv>
                <StyledH3>Name:</StyledH3>
                {pokemon.name}
              </StyledDiv>
              <StyledDiv>
                <StyledH3>Height:</StyledH3>
                {pokemon.height}
              </StyledDiv>
              <StyledDiv>
                <StyledH3>Weight:</StyledH3>
                {pokemon.weight}
              </StyledDiv>
              <StyledDiv>
                <StyledH3>List of abilities:</StyledH3>
              </StyledDiv>
              <StyledDivList>
                {pokemon.abilities.map((ability) => (
                  <StyledParagraph>{ability.ability.name}</StyledParagraph>
                ))}
              </StyledDivList>
            </CardWrapper>
          ))
        : displaySearch?.map((pokemon, index) => (
            <CardWrapper onClick={(e) => {viewSinglePokemonRecord(index, pokemon.id)}}>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.sprites.other.dream_world.front_default}
                height="100px"
              />
              <StyledDiv>
                <StyledH3>Name:</StyledH3>
                {pokemon.name}
              </StyledDiv>
              <StyledDiv>
                <StyledH3>Height:</StyledH3>
                {pokemon.height}
              </StyledDiv>
              <StyledDiv>
                <StyledH3>Weight:</StyledH3>
                {pokemon.weight}
              </StyledDiv>
              <StyledDiv>
                <StyledH3>List of abilities:</StyledH3>
              </StyledDiv>
              <StyledDivList>
                {pokemon.abilities.map((ability) => (
                  <StyledParagraph>{ability.ability.name}</StyledParagraph>
                ))}
              </StyledDivList>
            </CardWrapper>
          ))}
    </>
  );
};

PokemonCard.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number.isRequired,
  searchValuevar: PropTypes.bool.isRequired,
};

export default PokemonCard;
