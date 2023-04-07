import React from "react";
import Input from "../Input";
import { StyledForm } from "./styled";
import searchQueryParamName from "../TasksPage/searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter, } from "../TasksPage/queryParameters";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !=="" ? target.value : undefined,
        })
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

export default Search;