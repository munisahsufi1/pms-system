import {BackLink, H1, Table} from "govuk-react";
import {useLocation} from "react-router-dom";

function PatientDashboard() {
  const location = useLocation();
  const {datalist} = location.state;

  return (
    <>
      <BackLink href={"/"}>Back</BackLink>
      <div style={{display: 'grid', placeItems: 'center'}}>
        <div style={{width: 800, marginTop: 'auto', marginBottom: 'auto'}}>
          <H1>Patient Dashboard</H1>
          <Table
            head={
              <Table.Row>
                <Table.CellHeader>NHS Number</Table.CellHeader>
                <Table.CellHeader>Forename</Table.CellHeader>
                <Table.CellHeader>Surname</Table.CellHeader>
                <Table.CellHeader>Date of Birth</Table.CellHeader>
                <Table.CellHeader>Gender</Table.CellHeader>
                <Table.CellHeader>Postcode</Table.CellHeader>
              </Table.Row>
            }
          >
            <Table.Row>
              <Table.Cell>{datalist[0]["NHSNumber"]}</Table.Cell>
              <Table.Cell>{datalist[0]["Forename"]}</Table.Cell>
              <Table.Cell>{datalist[0]["Surname"]}</Table.Cell>
              <Table.Cell>{datalist[0]["PersonDOB"]}</Table.Cell>
              <Table.Cell>{datalist[0]["GenderCode"]}</Table.Cell>
              <Table.Cell>{datalist[0]["Postcode"]}</Table.Cell>
            </Table.Row>
          </Table>
        </div>
      </div>
    </>
  );
}

export default PatientDashboard;