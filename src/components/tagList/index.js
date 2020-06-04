import React from "react";
import { Tag } from "antd";
import { Link } from "react-router-dom";

// Demo data : it will be returned from the API
const tags = [
  {
    tagName: "React",
    link: "/tag/react"
  },
  {
    tagName: "Relay",
    link: "/tag/relay"
  },
  {
    tagName: "Jest",
    link: "/tag/jest"
  },
  {
    tagName: "react-json-schema",
    link: "/tag/reactJsonSchema"
  }
];

function TagLists() {
  return (
    <div className="flex flex-col flex flex-col border border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal mt-2 rounded-t lg:rounded-t-none lg:rounded-l ">
      <div class="text-gray-700 px-4 mx-2 text-xl pt-2">
        <h2>All Tags</h2>
      </div>
      <div class="text-gray-700  px-4 py-2 m-2">
        {tags.map(({ tagName, link }) => (
          <Tag>
            <Link href={link}>{tagName}</Link>
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default TagLists;

/**
 * 
 *  <List
          itemLayout="horizontal"
          dataSource={tags}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta title={<a href="/">{item.tag}</a>} />
            </List.Item>
          )}
        />
 * 
 */
