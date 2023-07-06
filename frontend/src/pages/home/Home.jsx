import {Button, H1, H3} from "govuk-react";
import {useNavigate} from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{placeItems: "center", display: "grid"}}>
      <H1>Welcome to the Patient Management System</H1>
      <H3>Click Start to continue.</H3>
      <Button
        buttonColour={"#005EA5"}
        buttonHoverColour={"#003078"}
        buttonBorderColour={"#005EA5"}
        buttonHoverBorderColour={"#003078"}
        onClick={() => {
          navigate("/login")
        }}
      >
        Start now</Button>
    </div>
  )
}
