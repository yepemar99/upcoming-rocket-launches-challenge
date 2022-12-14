import React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
  value?: string;
}

const ItemSection: React.FC<IProps> = ({ name, value }) => {
  if (value) {
    // eslint-disable-next-line
    const regexp =/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    const linkSatus: boolean = regexp.test(value);
    return (
      <ItemSectionS>
        {!(value === null || value.length === 0) && (
          <div>
            {linkSatus ? (
              <>
                <span className="name">{name} : </span>{" "}
                <p>
                  <a href={value}>
                    <span className="responsive">
                      {value.length > 30 ? value.slice(0, 30) + "..." : value}
                    </span>
                    <span className="desk">{value}</span>
                  </a>{" "}
                </p>
              </>
            ) : (
              <>
                <span className="name">{name} : </span> <p>{value}</p>
              </>
            )}
          </div>
        )}
      </ItemSectionS>
    );
  } else {
    return null;
  }
};

export default ItemSection;

const ItemSectionS = styled.div`
  div {
    margin-bottom: 7px;

    .name {
      font-weight: bolder;
      text-transform: uppercase;
    }
    p {
      display: inline;
    }
  }
  .responsive {
    display: none;
  }
  @media (max-width: 670px) {
    .responsive {
      display: inline;
    }
    .desk {
      display: none;
    }
  }
`;
