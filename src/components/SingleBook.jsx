import { Col, Card, Badge } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false
  };
  handleClick = () => {
    {
      this.state.selected
        ? this.setState({ selected: false })
        : this.setState({ selected: true });
    }
    this.props.changeStateTitle(this.props.book.asin);
  };

  render() {
    return (
      <Col md={4}>
        {/* {!this.state.selected && (
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={this.props.book.img}
              style={{ height: "400px" }}
            />
            <Card.Body style={{ height: "200px" }}>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.price}</Card.Text>
              <Badge>{this.props.book.category}</Badge>
            </Card.Body>
          </Card>
        )}
        {this.state.selected && (
          <Card className="mb-4 border border-1 border-primary bg-primary-subtle">
            <Card.Img
              variant="top"
              src={this.props.book.img}
              style={{ height: "400px" }}
            />
            <Card.Body style={{ height: "200px" }}>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.price}</Card.Text>
              <Badge>{this.props.book.category}</Badge>
            </Card.Body>
          </Card>
        )} */}

        <Card
          className="mb-4 "
          onClick={this.handleClick}
          {...(this.state.selected && {
            style: {
              border: "2px solid blue",
              backgroundColor: "rgba(124, 155, 234, 0.625"
            }
          })}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ height: "400px" }}
          />
          <Card.Body style={{ height: "200px" }}>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.price}</Card.Text>
            <Badge>{this.props.book.category}</Badge>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
