import { Component } from "react";

class AddComment extends Component {
  state = {
    obj: {
      comment: "",
      rate: "",
      author: "",
      elementId: this.props.idLibro
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      obj: {
        ...this.state.obj,
        [name]: value
      }
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTY2NzhhZDEyOTAwMTU4NzZiZTEiLCJpYXQiOjE3MzI4MDI4MzEsImV4cCI6MTczNDAxMjQzMX0.4Wo_n0XxH834Cma8Z6xwatgoMVzlxcp54ZMQwtcKZ9M"
        },
        body: JSON.stringify(this.state.obj)
      });

      if (response.ok) {
        alert("Commento aggiunto con successo!");
        this.setState({ obj: { comment: "", rate: "", author: "" } });
      } else {
        console.log(response);
        console.log(this.state.obj);
        alert("Errore nell'invio del commento." + response.statusText);
      }
    } catch (error) {
      console.log("Errore nella richiesta POST:", error);
    }
  };

  render() {
    return (
      <div>
        <h3>Aggiungi un Commento</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Commento:</label>
            <textarea
              name="comment"
              value={this.state.obj.comment}
              onChange={this.handleChange}
              rows="3"
              required
            />
          </div>
          <div>
            <label>Voto (1-5):</label>
            <input
              type="number"
              name="rate"
              value={this.state.obj.rate}
              onChange={this.handleChange}
              min="1"
              max="5"
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="author"
              value={this.state.obj.author}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Invia Commento</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
