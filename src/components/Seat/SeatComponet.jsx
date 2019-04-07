import React, { Component } from "react";
import PropTypes from "prop-types";
import "../Seat/SeatComponet.css";
export default class SeatComponet extends Component {
  constructor(props) {
    super(props);
    this.seat = React.createRef();
  }
  seatClick = e => {
    if (this.seat.current.classList.contains("selected")) {
      this.seat.current.classList.remove("selected");
      this.props.onSeatSelect(this.seat.current.textContent);
    } else {
      this.seat.current.classList.add("selected");
      this.props.onSeatSelect(this.seat.current.textContent);
    }
  };
  renderSwitch(param) {
    if (param.length === 0) {
      return <div className="emptycell" />;
    } else if (param === "lavatory-icon") {
      return <div className="lavetryicon" />;
    } else if (param === "galley-icon") {
      return <div className="galleyicon" />;
    } else if (param === "exiticon-right") {
      return <div className="exiticon-right" />;
    } else if (param === "exiticon-left") {
      return <div className="exiticon-left" />;
    } else if (param === "NA") {
      return <div className="seatna" />;
    } else if ((param !== "NA" && param.length === 2) || param.length === 3) {
      return (
        <div ref={this.seat} onClick={this.seatClick} className="seatavailble">
          {param}
        </div>
      );
    } else {
      return <div className="seatlabel">{param.replace("label", "")}</div>;
    }
  }
  render() {
    let { data } = this.props;
    return (
      <React.Fragment>
        <div>{this.renderSwitch(data)}</div>
      </React.Fragment>
    );
  }
}
SeatComponet.propTypes = {
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
