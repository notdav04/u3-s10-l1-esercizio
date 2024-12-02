import { Component } from "react";
import { Card, Col, Container, Row, Badge, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";

class AllTheBooks extends Component {
  state = {
    genre: null
  };
  render() {
    return (
      <div style={{ minHeight: "calc(100vh - 279px)" }}>
        <div className="d-flex justify-content-center mb-4">
          <div>
            <h2>Scegli il tuo genere preferito:</h2>
            <div className="d-flex justify-content-around">
              <Button onClick={() => this.setState({ genre: fantasy })}>
                Fantasy
              </Button>
              <Button onClick={() => this.setState({ genre: horror })}>
                Horror
              </Button>
              <Button onClick={() => this.setState({ genre: romance })}>
                Romance
              </Button>
            </div>
          </div>
        </div>
        {this.state.genre && (
          <div>
            <Container>
              <Row>
                {this.state.genre.map((book) => {
                  return (
                    <Col md={3} key={book.asin}>
                      <Card className="mb-3">
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          <Card.Text>{book.price}</Card.Text>
                          <Badge>{book.category}</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default AllTheBooks;
