import { Component } from "react";
import CommentList from "./CommentList";

import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    lista_commenti: []
  };
  fetchCommenti = async () => {
    const url =
      "https://striveschool-api.herokuapp.com/api/comments/" +
      this.props.idLibro;
    console.log(url);
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTY2NzhhZDEyOTAwMTU4NzZiZTEiLCJpYXQiOjE3MzI4MDI4MzEsImV4cCI6MTczNDAxMjQzMX0.4Wo_n0XxH834Cma8Z6xwatgoMVzlxcp54ZMQwtcKZ9M"
        }
      });
      if (response.ok) {
        const responseObj = await response.json();
        // console.log("responseObj: ", responseObj);
        this.setState({ lista_commenti: responseObj }, () => {});
        // console.log("state lista commenti: ", this.state.lista_commenti);
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    // this.fetchCommenti();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.idLibro !== this.props.idLibro) {
      console.log("id:", this.props.idLibro);
      this.fetchCommenti();
    }
  }
  render() {
    return (
      <div>
        <h3>Commenti</h3>
        {this.state.lista_commenti.length > 0 && (
          <CommentList listaCommenti={this.state.lista_commenti} />
        )}
        <AddComment idLibro={this.props.idLibro} />
      </div>
    );
  }
}

export default CommentArea;
