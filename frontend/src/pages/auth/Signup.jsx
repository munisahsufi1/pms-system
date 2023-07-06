import {useState} from 'react';
import {
  BackLink,
  Button,
  Fieldset,
  GridCol,
  GridRow,
  H1,
  Label,
  LabelText,
  Select
} from "govuk-react";
import Input from "../../components/Input.jsx";
import {useNavigate} from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [nhsNumber, setNhsNumber] = useState("");
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [postcode, setPostcode] = useState("");
  const [date, setDate] = useState("");

  const onNhsNumberChange = (e) => setNhsNumber(e.target.value)
  const onForenameChange = (e) => setForename(e.target.value)
  const onSurnameChange = (e) => setSurname(e.target.value)
  const onPostcodeChange = (e) => setPostcode(e.target.value)
  const onDateChange = (e) => setDate(e.target.value)

  const onGenderChange = (e) => setGender(e.target.value)

  const submitForm = async () => {
    const data = {
      'nhs_number': nhsNumber,
      'forename': forename,
      'surname': surname,
      'date_of_birth': date,
      'gender': gender,
      'post_code': postcode
    }

    console.log(data)

    await fetch('http://localhost/pms-server/signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then(() => navigate('/login'))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <BackLink href={"/"}>Back</BackLink>
      <div
        // style={{display: 'grid', placeItems: 'center'}}
        style={{padding: "20px"}}
      >
        <Fieldset
          // style={{width: 400, marginTop: 'auto', marginBottom: 'auto'}}
        >
          <Fieldset.Legend size={"LARGE"}>Signup Form</Fieldset.Legend>
          <H1>Patient Information</H1>
          <GridRow>
            <GridCol setWidth={"one-third"}>
              <Input
                hint={"Enter NHS number"}
                type={"number"} text={"NHS number"} group={"group1"}
                onChange={onNhsNumberChange}
                value={nhsNumber}
              />
            </GridCol>
            <GridCol setWidth={"one-third"}>
              <Input
                hint={"Enter Forename"}
                type={"text"} text={"Forename"} group={"group1"}
                onChange={onForenameChange}
                value={forename}
              />
            </GridCol>
            <GridCol setWidth={"one-third"}>
              <Input
                hint={"Enter Surname"}
                type={"text"} text={"Surname"} group={"group1"}
                onChange={onSurnameChange}
                value={surname}
              />
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol setWidth={"one-third"}>
              {/*<DateInputField day={day} month={month} year={year} onChange={onDateChange}/>*/}
              <Input
                hint={"Enter date"}
                type={"date"} text={"Date"} group={"group1"}
                onChange={onDateChange}
                value={date}
              />
            </GridCol>
            <GridCol setWidth={"one-third"}>
              <Label>
                <LabelText>
                  Gender:
                  <Select
                    input={{
                      name: 'group1',
                      onChange: onGenderChange,
                      defaultValue: "other",
                      value: gender
                    }}
                    hint={<>Enter Gender</>}
                  >
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                    <option value="2">Other</option>
                  </Select>
                </LabelText>
              </Label>
            </GridCol>
            <GridCol setWidth={"one-third"}>
              <Input
                hint={"Enter Postcode"}
                type={"text"} text={"Postcode"} group={"group1"}
                onChange={onPostcodeChange}
                value={postcode}
              />
            </GridCol>
          </GridRow>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Button
              style={{marginTop: 10}}
              type={"submit"}
              buttonColour={"#005EA5"}
              buttonHoverColour={"#003078"}
              buttonBorderColour={"#005EA5"}
              buttonHoverBorderColour={"#003078"}
              onClick={submitForm}
            >
              Signup
            </Button>
          </div>
        </Fieldset>
      </div>
    </>
  );
}

export default Signup;