import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function PageButton() {
  return (
    // Quick and easy button component to send the user to the product page
    //doesn't really get reused
    <div>
      <h4>
        When you're ready, head over to our &nbsp;
        <LinkContainer to="/products">
          <Button className="btn btn-primary">Products Page</Button>
        </LinkContainer>
      </h4>
    </div>
  );
}
