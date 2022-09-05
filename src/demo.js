import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Avatar, List } from "antd";

const data = [
  {
    title: "Server 1",
    avatar:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",
    description: "A Server 1"
  },
  {
    title: "Server 2",
    avatar:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",
    description: "A Server 2"
  },
  {
    title: "Server 3",
    avatar:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",
    description: "A Server 3"
  },
  {
    title: "Server 4",
    avatar:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",
    description: "A Server 4"
  }
];

const App = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

export default App;
