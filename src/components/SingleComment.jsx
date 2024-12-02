import { Component } from "react";

class SingleComment extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props.comment);
  }
  render() {
    return (
      <li className="mb-3">
        <p className="mb-1">{this.props.comment}</p>
        <small>
          Voto: {this.props.rate}- autore: {this.props.author}
        </small>
      </li>
    );
  }
}

export default SingleComment;
