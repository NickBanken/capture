import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <FaqTitle layout>{title}</FaqTitle>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

const FaqTitle = styled(motion.h4)`
  background-color: #1b1b1b;
`;

export default Toggle;
