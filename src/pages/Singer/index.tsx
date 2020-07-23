import React, { useState, FC } from "react";
import singer from "../../mocks/Singer";

interface PropTypes {
  match: {
    params: {
      id: string;
    };
  };
}

const Singer: FC<PropTypes> = (props) => {
  const { match } = props;
  const [data, setData] = useState(() => {
    const findSinger = (id: any) => {
      return singer.find((item) => {
        if (item.id === parseInt(id)) {
          return item;
        }
        return null;
      });
    };
    return findSinger(match.params.id);
  });

  const showSinger = () => {
    if (data) {
      return (
        <div>
          <p>{data.singer}</p>
          <p>{data.info}</p>
        </div>
      );
    } else {
      return <p>Chưa có thông tin về ca sĩ này</p>;
    }
  };

  return <div>{showSinger()}</div>;
};

export default Singer;
