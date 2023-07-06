import {BackLink, H1, Table} from "govuk-react";
import {useEffect, useState} from "react";

function DoctorDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/pms-server/all_patients.php', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json())
      .then((record) => {
        setData(record["patients"]);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <BackLink href={"/"}>Back</BackLink>
      <div style={{display: 'grid', placeItems: 'center'}}>
        <div style={{width: 800, marginTop: 'auto', marginBottom: 'auto'}}>
          <H1>Doctor Dashboard</H1>
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
            {
              data.map((patient, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>{patient["NHSNumber"]}</Table.Cell>
                    <Table.Cell>{patient["Forename"]}</Table.Cell>
                    <Table.Cell>{patient["Surname"]}</Table.Cell>
                    <Table.Cell>{patient["PersonDOB"]}</Table.Cell>
                    <Table.Cell>{patient["GenderCode"]}</Table.Cell>
                    <Table.Cell>{patient["Postcode"]}</Table.Cell>
                  </Table.Row>
                );
              })
            }
          </Table>
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;