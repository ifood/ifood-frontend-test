import React from "react";
import { shallow } from "enzyme";
import Login from "../../javascript/components/Login";
import { parseHash } from "../../javascript/utils/index.js";

describe("The Login component", () => {
  let mockSetAccessToken;
  let wrapper;

  beforeEach(() => {
    mockSetAccessToken = jest.fn();
    wrapper = shallow(<Login setAccessToken={mockSetAccessToken} />);
  });

  it("should not call the setAccessToken function from props if the token is not defined on the URL", () => {
    expect(mockSetAccessToken).not.toHaveBeenCalled();
  });

  it("should render the login section if the token is not defined", () => {
    const login = wrapper.find(".login-container");
    expect(login.length).toEqual(1);
  });

  it("should not render the login section if the token is defined", () => {
    wrapper.setProps({ accessToken: "token" });
    const login = wrapper.find(".login-container");
    expect(login.length).toEqual(0);
  });

  it("should call the setAccessToken function from props if the token is defined on the URL", () => {
    delete window.location;
    window.location = { hash: "#access_token=token" };
    const mockSetAccessToken = jest.fn();
    shallow(<Login setAccessToken={mockSetAccessToken} />);
    const token = parseHash(window.location.hash).access_token;

    expect(mockSetAccessToken).toHaveBeenCalledWith(token);
  });

  it("should clear the token when it expires", () => {
    wrapper.instance().clearExpiredToken();
    expect(mockSetAccessToken).toHaveBeenCalledWith(null);
  });

  it("should set a timer to clear the token when it expires when component mounts", done => {
    window.location = { hash: "#expires_in=50" };
    shallow(<Login setAccessToken={mockSetAccessToken} />);
    setTimeout(() => {
      expect(mockSetAccessToken).toHaveBeenCalled();
      done();
    }, 50);
  });
});
