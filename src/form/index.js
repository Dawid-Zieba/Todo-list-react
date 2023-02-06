import React from "react";
import "./style.css";
const Form = (props) =>(
    <form className="form">
    <input autofocus className="form__input" name="task" placeholder="Co jest do zrobienia?"/>
    <button className="form__button">Dodaj zadanie</button>
</form>
);

export default Form;