import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from '../Search';
import FetchExampleTasksButton from './FetchExampleTasksButton';

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleTasksButton />} 
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
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

export default TasksPage;