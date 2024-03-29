import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const LoginForm = () => {
  const [form] = Form.useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (values) => {
    const { username, password } = values;
    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
      message.success("Login successful!");
    } else {
      message.error("Please enter username and password.");
    }
  };

  return (
    <div className="card-wrapper">
      {!isLoggedIn ? (
        <div className="custom-div">
          <h1>Login</h1>
          <Form form={form} onFinish={handleLogin}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please enter your username" }
              ]}
              hasFeedback
            >
              <Input className="input" placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
                {
                  min: 8,
                  message: "Password must be at least 8 characters long"
                },
                {
                  pattern: /^(?=.*[!@#$%^&*])(?=.*[0-9])/,
                  message:
                    "Password must contain at least one special character and one digit (0-9)"
                }
              ]}
              hasFeedback
            >
              <Input className="input" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button className="submit" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {form.getFieldValue("username")}!</h2>
          <Button className="submit" onClick={() => setIsLoggedIn(false)}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
