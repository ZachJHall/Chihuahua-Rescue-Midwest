import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

const { Option } = Select;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Interested in">
          {getFieldDecorator("interest", {
            rules: [
              {
                required: true,
                message: "Interested in"
              }
            ]
          })(<Input placeholder="Please put what dog you're interested in" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Interested in">
          {getFieldDecorator("test", {
            rules: [
              {
                required: true,
                message: "no"
              }
            ]
          })(<Input placeholder="Please put what dog you're interested in" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Interested in">
          {getFieldDecorator("interest", {
            rules: [
              {
                required: true,
                message: "Interested in"
              }
            ]
          })(<Input placeholder="Please put what dog you're interested in" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Interested in">
          {getFieldDecorator("interest", {
            rules: [
              {
                required: true,
                message: "Interested in"
              }
            ]
          })(<Input placeholder="Please put what dog you're interested in" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Interested in">
          {getFieldDecorator("interest", {
            rules: [
              {
                required: true,
                message: "Interested in"
              }
            ]
          })(<Input placeholder="Please put what dog you're interested in" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Interested in">
          {getFieldDecorator("interest", {
            rules: [
              {
                required: true,
                message: "Interested in"
              }
            ]
          })(<Input placeholder="Please put what dog you're interested in" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Interested in">
          {getFieldDecorator("interest", {
            rules: [
              {
                required: true,
                message: "Interested in "
              }
            ]
          })(<Input placeholder="Please put what dog you're interested in" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Interested in">
          {getFieldDecorator("interest", {
            rules: [
              {
                required: true,
                message: "Interested in "
              }
            ]
          })(<Input placeholder="Please put what dog you're interested in" />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const Adopt = Form.create({ name: "register" })(RegistrationForm);

export default Adopt;
