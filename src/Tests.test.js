import React from 'react';
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import Detail from './Detail';
import { AppContext } from './context';
import { MemoryRouter, Route, Routes,  } from 'react-router-dom';
import List from './List';


test("Detail", () => {
    const schoolDbn = "02M260";
    const schools = [{dbn: "02M260", school_name: "Clinton School Writers & Artists, M.S. 260", overview_paragraph: "Students who are prepared for college must have an education that encourages them to take risks as they produce and perform. Our college preparatory curriculum develops writers and has built a tight-knit community. Our school develops students who can think analytically and write creatively. Our arts programming builds on our 25 years of experience in visual, performing arts and music on a middle school level. We partner with New Audience and the Whitney Museum as cultural partners. We are a International Baccalaureate (IB) candidate school that offers opportunities to take college courses at neighboring universities."}]
    const route = `/${schoolDbn}`;
    const {getByText} = render(
        <AppContext.Provider value={{schools, setSchools: () => {}}}>
            <MemoryRouter initialEntries={[route]}>
                <Routes> 
                    <Route path='/:schoolDbn/' element={<Detail />} />
                </Routes>
            </MemoryRouter>
        </AppContext.Provider>);
    expect(getByText("Clinton School Writers & Artists, M.S. 260")).toBeInTheDocument();
    cleanup();
})

test("List", () => {
    const schools = [{dbn: "02M260", school_name: "Clinton School Writers & Artists, M.S. 260", overview_paragraph: "Students who are prepared for college must have an education that encourages them to take risks as they produce and perform. Our college preparatory curriculum develops writers and has built a tight-knit community. Our school develops students who can think analytically and write creatively. Our arts programming builds on our 25 years of experience in visual, performing arts and music on a middle school level. We partner with New Audience and the Whitney Museum as cultural partners. We are a International Baccalaureate (IB) candidate school that offers opportunities to take college courses at neighboring universities."}]
    const route = `/`;
    const {getByText} = render(
        <AppContext.Provider value={{schools, setSchools: () => {}}}>
            <MemoryRouter initialEntries={[route]}>
                <Routes> 
                    <Route path='/' element={<List />} />
                </Routes>
            </MemoryRouter>
        </AppContext.Provider>);
    expect(getByText("02M260")).toBeInTheDocument();
    cleanup();
})