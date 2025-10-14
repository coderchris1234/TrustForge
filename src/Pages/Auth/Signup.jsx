import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Checkbox,
  message,
  Typography,
} from "antd";
import { FormContainer, FormTitle, AlreadyAccount } from "./SignupStyle";

const { Option } = Select;
const { Text, Link } = Typography;

const SignupForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Account created successfully!");
  };

  return (
    <FormContainer>
      <FormTitle>Create Account</FormTitle>

      <Form
        form={form}
        name="signup"
        layout="vertical"
        onFinish={onFinish}
        scrollToFirstError
      >
        {/* Firstname */}
        <Form.Item
          name="Firstname"
          label="First Name"
          rules={[{ required: true, message: "Please enter your first name!" }]}
        >
          <Input placeholder="Enter first name" />
        </Form.Item>

        {/* Lastname */}
        <Form.Item
          name="Lastname"
          label="Last Name"
          rules={[{ required: true, message: "Please enter your last name!" }]}
        >
          <Input placeholder="Enter last name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="Email Address"
          label="Email Address"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Enter a valid email!" },
          ]}
        >
          <Input placeholder="example@mail.com" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter your password!" },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
              message:
                "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol.",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        {/* Confirm Password */}
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
              message:
                "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>

        {/* Role Dropdown */}
        <Form.Item
          name="role"
          label="Select Role"
          rules={[{ required: true, message: "Please select your role!" }]}
        >
          <Select placeholder="Choose your role">
            <Option value="creator">Creator</Option>
            <Option value="investor">Investor</Option>
          </Select>
        </Form.Item>

        {/* Phone */}
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number!" },
            {
              pattern: /^[0-9]+$/,
              message: "Phone number must be digits only!",
            },
          ]}
        >
          <Input
            placeholder="Enter phone number"
            maxLength={11} // optional: limits to 11 digits (Nigeria format)
            onKeyPress={(e) => {
              // Prevent typing non-numeric characters
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </Form.Item>

        {/* Country */}
        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: "Please enter your country!" }]}
        >
          <Input placeholder="Enter your country" />
        </Form.Item>

        {/* Agree to Terms */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You must agree to the terms")),
            },
          ]}
        >
          <Checkbox>
            I agree to the <a href="#">Terms & Conditions</a>
          </Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Create Account
          </Button>
        </Form.Item>

        {/* Already have an account */}
        <AlreadyAccount>
          <Text>
            Already have an account?{" "}
            <Link href="/login" style={{ fontWeight: 500 }}>
              Log in
            </Link>
          </Text>
        </AlreadyAccount>
      </Form>
    </FormContainer>
  );
};

export default SignupForm;
