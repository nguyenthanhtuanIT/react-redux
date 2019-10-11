import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onAddTask(this.state);
    this.onClear();
    this.onClose();
  };
  onClose = () => {
    this.props.closeForm();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };

  UNSAFE_componentWillMount() {
    if (this.props.updateTask) {
      this.setState({
        id: this.props.updateTask.id,
        name: this.props.updateTask.name,
        status: this.props.updateTask.status,
      });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.updateTask) {
      this.setState({
        id: nextProps.updateTask.id,
        name: nextProps.updateTask.name,
        status: nextProps.updateTask.status,
      });
    } else if (!nextProps.updateTask) {
      this.setState({
        name: "",
        status: false,
      });
    }
  }

  render() {
    if (!this.props.isDisplayForm) return "";
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onClose}
            ></span>
            {this.state.id === "" ? "Them cong viec" : "cap nhat cong viec"}
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Xong</option>
              <option value={false}>Chua xong</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5"></span>Lưu Lại
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                <span className="fa fa-close mr-5"></span>Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    updateTask: state.updateTask,
  };
};

const mapStateToDispatch = (dispatch, props) => {
  return {
    onAddTask: task => {
      dispatch(actions.addTask(task));
    },
    closeForm: () => {
      dispatch(actions.closeForm());
    },
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(AddForm);
