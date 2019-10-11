import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Sort extends Component {
  onSort = (bySort, valueSort) => {
    this.props.sortTask({
      by: bySort,
      value: valueSort,
    });
  };
  render() {
    console.log(this.props.sort);

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onSort("name", 1)}>
              <a>
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </a>
            </li>
            <li onClick={() => this.onSort("name", -1)}>
              <a>
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={() => this.onSort("status", 1)}>
              <a>Trạng Thái xong</a>
            </li>
            <li onClick={() => this.onSort("status", 1)}>
              <a>Trạng Thái chua xong</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sort: state.sortTask,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    sortTask: sort => {
      dispatch(actions.sortTask(sort));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort);
