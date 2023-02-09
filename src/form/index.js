import React from "react";
import "./style.css";
const Form = () =>(
    <form className="form">
    <input className="form__input" name="task" placeholder="Co jest do zrobienia?"/>
    <button className="form__button">Dodaj zadanie</button>
</form>
);

export default Form;