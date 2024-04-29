import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function PageButton() {
  return (
    <div>
      When you're ready, head over to our &nbsp;
      <LinkContainer to="/products">
        <Button className="btn btn-primary">Products Page</Button>
      </LinkContainer>
    </div>
  );
}
