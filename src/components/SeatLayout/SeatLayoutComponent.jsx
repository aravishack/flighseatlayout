import React, { Component } from "react";
import data from "../../data/data";
import cockpit from "../../assets/images/cockpit.png";
import tail from "../../assets/images/tail.png";
import "../SeatLayout/SeatLayoutComponent.css";
import SeatComponent from "../Seat/SeatComponet";
export default class SeatLayoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seatData: [],
      selectedSeat: []
    };
  }
  componentDidMount() {
    this.setState({ seatData: data[0].seats }, () => {});
  }
  seatPreview = seat => {
    if (this.state.selectedSeat.indexOf(seat) === -1) {
      this.setState({
        selectedSeat: [...this.state.selectedSeat, seat]
      });
    } else {
      let dumpArray = [...this.state.selectedSeat];
      let itemIndex = dumpArray.indexOf(seat);
      dumpArray.splice(itemIndex, 1);
      this.setState({
        selectedSeat: dumpArray
      });
    }
  };
  render() {
    let { selectedSeat } = this.state;
    let seatArray = [];
    let chunksSeatArray = [];
    let chunkSize = 9;
    this.state.seatData.map(item => {
      Object.keys(item).map(seat => {
        Object.keys(item[seat]).map(data => {
          seatArray.push(
            <SeatComponent
              data={item[seat][data]}
              key={data}
              onSeatSelect={this.seatPreview}
            />
          );
        });
      });
    });
    chunksSeatArray = seatArray
      .map(function(e, i) {
        return i % chunkSize === 0 ? seatArray.slice(i, i + chunkSize) : null;
      })
      .filter(function(e) {
        return e;
      });
    return (
      <section className="seatwrapper">
        <header className="header">
          <div className="header-title">Flight Seat Layout</div>
          <div>Selected Seat : {selectedSeat}</div>
        </header>
        <section className="seatlayout">
          <div className="seatlayout-header">
            <img src={cockpit} alt="cockpit" />
          </div>
          <div className="seatlayout-content">
            {chunksSeatArray.map(item => {
              return (
                <div>
                  {item.map(data => {
                    {
                      return data;
                    }
                  })}
                </div>
              );
            })}
          </div>
          <div className="seatlayout-footer">
            <img src={tail} alt="cockpit" />
          </div>
        </section>
      </section>
    );
  }
}
