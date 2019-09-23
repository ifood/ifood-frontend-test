import React from "react";
import { shallow } from "enzyme";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import PlaylistCard from "../../javascript/components/PlaylistCard.jsx";

describe("the PlaylistCard component", () => {
  let wrapper;
  const mockImage = "image";
  const mockName = "name";
  const mockOwner = "owner";
  const mockLink = "link";
  const mockPlaylist = {
    images: [{ url: mockImage }],
    name: mockName,
    owner: { display_name: mockOwner },
    external_urls: { spotify: mockLink },
  };

  beforeEach(() => {
    wrapper = shallow(<PlaylistCard playlist={mockPlaylist} />);
  });

  it("should render a Card for the given playlist", () => {
    const card = wrapper.find(Card);
    expect(card.length).toEqual(1);
  });

  it("should render CardBody inside the Card for the given playlist", () => {
    const card = wrapper.find(Card);
    const cardBody = card.find(CardBody);
    expect(cardBody.length).toEqual(1);
  });

  it("should render CardImage with the image link for the given playlist", () => {
    const cardImg = wrapper.find(CardImg);
    expect(cardImg.prop("src")).toEqual(mockImage);
  });

  it("should not render anything if the playlist is missing", () => {
    wrapper.setProps({ playlist: null });
    const card = wrapper.find(Card);
    expect(card.length).toEqual(0);
  });

  it("should render a CardTitle with the playlist name", () => {
    const cardTitle = wrapper.find(CardTitle);
    expect(cardTitle.children().text()).toEqual(mockName);
  });

  it("should render a CardTitle with the playlist owner", () => {
    const cardSubtitle = wrapper.find(CardSubtitle);
    expect(cardSubtitle.children().text()).toEqual(mockOwner);
  });

  it("should render a Button that leads the user to the playlist on spotify", () => {
    const button = wrapper.find(Button);
    window.open = jest.fn();
    button.simulate("click");
    expect(window.open).toHaveBeenCalledWith(mockLink, "_blank");
  });
});
