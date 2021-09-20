import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import 
{ ButtonComponent,
  StyledDivList,
StyledH3,
StyledOrderedList} from "./styles";
import Header from "../header";

const PokemonCardDetails = (props) => {
  const history = useHistory();
  console.log('props', props);
  const details = props.location.state;
  return (
    <>
      <Header />
      <h1>Pokemon Details</h1>
      <ButtonComponent onClick={(e) => history.push("/")}>Go Back</ButtonComponent>
      <div>
        <img
          src={details.sprites.other.dream_world.front_default}
          alt={details.sprites.other.dream_world.front_default}
          height="100px"
        />
        <StyledDivList>
          <StyledH3>Name:</StyledH3>
          {details.name}
        </StyledDivList>
        <StyledDivList>
          <StyledH3>Height:</StyledH3>
          {details.height}
        </StyledDivList>
        <StyledDivList>
          <StyledH3>Weight:</StyledH3>
          {details.weight}
        </StyledDivList>
        <StyledDivList>
          <StyledH3>Base Experience:</StyledH3>
          {details.base_experience}
        </StyledDivList>
        <StyledDivList>
          <StyledH3>Order:</StyledH3>
          {details.order}
        </StyledDivList>
        <StyledDivList>
          <StyledH3>List of abilities:</StyledH3>
        </StyledDivList>
        <StyledOrderedList>
          {details.abilities.map((ability) => (
            <li>{ability.ability.name}</li>
          ))}
        </StyledOrderedList>
      </div>
    </>
  );
};

PokemonCardDetails.propTypes = {
  location: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PokemonCardDetails;
