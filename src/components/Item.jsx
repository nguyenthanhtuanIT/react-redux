import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Item extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.closeForm();
  };
  onUpdate = () => {
    this.props.openForm();
    this.props.onUpdateTask(this.props.task);
  };
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "label label-success"
                : "label label-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "xong" : "chua xong"}
          </span>
        </td>

        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispacthToProps = (dispacth, props) => {
  return {
    onUpdateStatus: id => {
      dispacth(actions.updateStatusTask(id));
    },
    onDeleteTask: id => {
      dispacth(actions.onDeleteTask(id));
    },
    closeForm: () => {
      dispacth(actions.closeForm());
    },
    openForm: () => {
      dispacth(actions.openForm());
    },
    onUpdateTask: task => {
      dispacth(actions.onUpdateTask(task));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispacthToProps,
)(Item);
