import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
    this.props.filterTask({
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    });
  };
  render() {
    let { tasks, filter, search, sort } = this.props;
    if (filter.name) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(filter.name) !== -1;
      });
    }
    tasks = tasks.filter(task => {
      if (filter.status !== -1) {
        return task.status === (filter.status === 1 ? true : false);
      }
      return tasks;
    });

    if (search.keyword) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(search) !== -1;
      });
    }

    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.staus) return sort.value;
        else if (a.status < b.status) return -sort.value;
        else return 0;
      });
    }
    let task = tasks.map((value, index) => {
      return <Item key={index} task={value} index={index} />;
    });

    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={filter.name}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filter.status}
                onChange={this.onChange}
              >
                <option value={-1}>tat ca</option>
                <option value={1}>xong</option>
                <option value={0}>chua xong</option>
              </select>
            </td>
            <td></td>
          </tr>
          {task}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filter: state.filterTask,
    search: state.searchTask,
    sort: state.sortTask,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    filterTask: filter => {
      dispatch(actions.filterTask(filter));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
