import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class MyFooter extends Component {
  render() {
    return (
      <div className=" bg-black text-center py-3  text-light w-100 py- ">
        <h4>Contatti:</h4>

        <p>tel. 1234567890</p>
        <p>mail.contattaci@mail.com</p>
      </div>
    );
  }
}

export default MyFooter;
