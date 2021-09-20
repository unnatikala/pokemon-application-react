import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import cardActions from "../../redux/card/cardActions";
import { Wrapper, Select } from "./styles";

const PageLimit = (props) => {
  const [pokemonCardDisplayLimit, updatepokemonCardDisplayLimit] = useState();
  const onLimitChange = (value) => {
    props.pageLimitRecord(value);
  };

  return (
    <Formik
      initialValues={{ pokemonCardDisplayLimit }}
      onSubmit={(value) => {
        updatepokemonCardDisplayLimit(value.pokemonCardDisplayLimit);
        onLimitChange(value.pokemonCardDisplayLimit);
      }}
    >
      {(formik) => {
        const { values, handleChange, handleSubmit } = formik;
        return (
          <Form className="search">
            <Wrapper>
              <Select
                onChange={(e) => {
                  handleChange(e);
                  handleSubmit();
                }}
                value={values.pokemonCardDisplayLimit}
                name="pokemonCardDisplayLimit"
                id="pokemonCardDisplayLimit"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </Select>
            </Wrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    pageLimitRecord: (pageLimitValue) =>
      dispatch(cardActions.pageLimitRecord(pageLimitValue)),
  };
};

PageLimit.propTypes = {
  pageLimitRecord: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PageLimit);
