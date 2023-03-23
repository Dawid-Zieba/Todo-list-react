import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";




function TaskApp() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body=
        {<Tasks />
        }
        extraHeaderContent=
        {<Buttons />
        }
      />
    </Container>
  );
}

export default TaskApp;