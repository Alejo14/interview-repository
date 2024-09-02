import React from 'react'
import TableComponent from './TableComponent'

const headers = [
  {name: "date", displayName: "Date"},
  {name: "summary", displayName: "Summary"},
  {name: "result", displayName: "Testing result"}
]
const data = [
  {date: "2024-05-01", summary: "New summary for test", result: "Success"},
  {date: "2024-06-01", summary: "Assertion failed", result: "Error"},
  {date: "2024-07-01", summary: "New test with error", result: "Error"},
  {date: "2024-08-01", summary: "Success for the following 101 tests", result: "Success"}
]
const errorMsg = "404! Feature not found";
const hasError = true;

const callBackFunction = (index) => {
  return index;
}

describe('TableComponent validate Headers', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TableComponent headers={headers} data={data} hasError={!hasError} errorMsg={errorMsg} callBackClick={callBackFunction}/>)
    cy.get(`th[id=${headers[0].name}]`).should("have.text", headers[0].displayName);
    cy.get(`th[id=${headers[1].name}]`).should("have.text", headers[1].displayName);
    cy.get(`th[id=${headers[2].name}]`).should("have.text", headers[2].displayName);
  })
})

describe('TableComponent validate Data', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TableComponent headers={headers} data={data} hasError={!hasError} errorMsg={errorMsg} callBackClick={() => callBackFunction}/>)
    cy.get(`td[id=${headers[0].name}_0]`).should("have.text", data[0].date);
    cy.get(`td[id=${headers[0].name}_1]`).should("have.text", data[1].date);
    cy.get(`td[id=${headers[0].name}_2]`).should("have.text", data[2].date);
    cy.get(`td[id=${headers[0].name}_3]`).should("have.text", data[3].date);
    cy.get(`td[id=${headers[1].name}_0]`).should("have.text", data[0].summary);
    cy.get(`td[id=${headers[1].name}_1]`).should("have.text", data[1].summary);
    cy.get(`td[id=${headers[1].name}_2]`).should("have.text", data[2].summary);
    cy.get(`td[id=${headers[1].name}_3]`).should("have.text", data[3].summary);
    cy.get(`td[id=${headers[2].name}_0]`).should("have.text", data[0].result);
    cy.get(`td[id=${headers[2].name}_1]`).should("have.text", data[1].result);
    cy.get(`td[id=${headers[2].name}_2]`).should("have.text", data[2].result);
    cy.get(`td[id=${headers[2].name}_3]`).should("have.text", data[3].result);
  })
})

describe('Table Component with Error', () => {
  it('rendersError', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TableComponent headers={[]} data={[]} hasError={hasError} errorMsg={errorMsg} callBackClick={callBackFunction}/>)
    cy.get("td").should("have.text", errorMsg);
  })
})