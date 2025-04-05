import Form from 'react-bootstrap/Form';
import "./form.css";
import CustomButton from '../CustomButton/CustomButton';

function BasicForm() {
  return (
      <Form className="form-wrapper">
        <Form.Group className="form" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <div className="formbtn">
          <CustomButton text={"Subscribe"} />
        </div>
      </Form>
  );
}

export default BasicForm;
