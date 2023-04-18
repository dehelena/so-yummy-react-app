import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchQuery } from "redux/search/searchSlice";
import { Button, Form, HelperText, Input } from "./Search.styled";
import { useState } from "react";

export const Search = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSearchFormSubmit = e => {
        e.preventDefault();
        const query = e.target.search.value.trim();
        if (!query) {
            setErrorMessage('Please, type something');
            return;
        };
        dispatch(updateSearchQuery(query));
        navigate(`/search/?query=${query}`);
  };
    
    return <>
        <Form onSubmit={onSearchFormSubmit}>
            <Input
                name="search"
                type="text"
                placeholder="Enter the text"
            />
            <Button type="submit">Search</Button>
            <HelperText>{errorMessage}</HelperText>
        </Form>
    </>
};