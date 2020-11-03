import React, { useState } from "react";
import { Card, OptionType, Search } from "./components";
import { Color, Icon, Typography } from "./foundation";

export function App() {
  const [selectedEntry, setSelectedEntry] = useState<OptionType>({
    value: null,
    label: "",
  });

  return (
    <div style={{ margin: "10px" }}>
      <Search onChange={setSelectedEntry} options={mockOptions} />
      <div>Selected: {selectedEntry?.label}</div>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px" color={Color.royalBlue}>
          {"<Icon.Search />"}
        </Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
      <Card textAlign="center" width="10rem">
        <Icon.Search height="1.3rem" />
        <Typography marginBottom="0px">{"<Icon.Search />"}</Typography>
      </Card>
    </div>
  );
}

const mockOptions = [
  { value: "entry1", label: "First Entry" },
  { value: "entry2", label: "Second Entry" },
  { value: "entry3", label: "Third Entry" },
  { value: "entry4", label: "Fourth Entry" },
  { value: "entry5", label: "Fifth Entry" },
];
