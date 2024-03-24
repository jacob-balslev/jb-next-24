import React from 'react';

const IconBlock = (props) => {
  return <a display="block" p="3" color="inherit" className="icon icon32" href="#">
            <div display="flex" className="">
{props.icon}
              </div>
              <span className="icon-span">
              {props.title}
              </span>
              </a>;
};

export default IconBlock;
