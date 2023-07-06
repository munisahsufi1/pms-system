import {useState} from 'react';
import {
  BackLink,
  Button,
  Fieldset,
  InputField
} from "govuk-react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

Login.propTypes = {
  setAuth: PropTypes.func
}

function Login({setAuth}) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const onInputChange = (e) => setInput(e.target.value);

  const submitForm = async () => {
    if (input === "admin") {
      setAuth(true);
      navigate('/ddashboard');
    } else {
      const data = {
        'nhs_number': input
      }
      await fetch('http://localhost/pms-server/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
        .then((res) => {
          const datalist = res['patient'];
          setAuth(true)
          navigate(`/pdashboard`, {state: {datalist}});
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <BackLink href={"/"}>Back</BackLink>
      <div style={{display: 'grid', placeItems: 'center'}}>
        <Fieldset style={{width: 400, marginTop: 'auto', marginBottom: 'auto'}}>
          <Fieldset.Legend size={"LARGE"}>
            Login Form
          </Fieldset.Legend>
          <InputField
            value={input}
            onChange={onInputChange}
            hint={<>Enter NHS number for patient or Doctor username</>}
            input={{
              name: 'group1',
              type: "text",
              autoComplete: "true"
            }}

          >
            Enter NHS number or username
          </InputField>
          <Button style={{marginTop: 10}} onClick={submitForm} type={"submit"}>Login</Button>
        </Fieldset>
      </div>
    </>
  );
}

export default Login;