import React from "react";
import Input from "../Input";
import { useLocation, useHistory } from "react-router-dom";
import { StyledForm } from "./styled";
import searchQueryParamName from "../TasksPage/searchQueryParamName";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <StyledForm>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledForm>
    );
};