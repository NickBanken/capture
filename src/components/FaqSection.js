import React, { useState } from "react";
import styled from "styled-components";
import { About, Hide } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";
import { fade, scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Hide>
      <Faq
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title={"How Do I Start?"}>
            <motion.div
              variants={fade}
              animate="show"
              initial="hidden"
              className="awnser"
              layout
            >
              <p>Lorem ipsum dolor, sit amet consectetur</p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum temporibus dicta reiciendis hic nisi libero facere nam
                recusandae ducimus, eaque eum incidunt eos aperiam veniam amet
                architecto. Ut, debitis qui. Quia deleniti facere provident in
                adipisci nulla velit numquam, voluptates atque impedit officia
                voluptatem, est illum totam repellat quidem nihil! Aliquam iusto
                doloribus autem, explicabo velit deleniti ipsam praesentium
                nesciunt!
              </p>
            </motion.div>
          </Toggle>
          <Toggle title={"Daily Schedule"}>
            <motion.div
              variants={fade}
              animate="show"
              initial="hidden"
              exit="hidden"
              layout
              className="awnser"
            >
              <p>Lorem ipsum dolor, sit amet consectetur</p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum temporibus dicta reiciendis hic nisi libero facere nam
                recusandae ducimus, eaque eum incidunt eos aperiam veniam amet
                architecto. Ut, debitis qui. Quia deleniti facere provident in
                adipisci nulla velit numquam, voluptates atque impedit officia
                voluptatem, est illum totam repellat quidem nihil! Aliquam iusto
                doloribus autem, explicabo velit deleniti ipsam praesentium
                nesciunt!
              </p>
            </motion.div>
          </Toggle>

          <Toggle title={"Different Payment Methods"}>
            <motion.div
              variants={fade}
              animate="show"
              initial="hidden"
              className="awnser"
              layout
            >
              <p>Lorem ipsum dolor, sit amet consectetur</p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum temporibus dicta reiciendis hic nisi libero facere nam
                recusandae ducimus, eaque eum incidunt eos aperiam veniam amet
                architecto. Ut, debitis qui. Quia deleniti facere provident in
                adipisci nulla velit numquam, voluptates atque impedit officia
                voluptatem, est illum totam repellat quidem nihil! Aliquam iusto
                doloribus autem, explicabo velit deleniti ipsam praesentium
                nesciunt!
              </p>
            </motion.div>
          </Toggle>

          <Toggle title={"What Products Do You Offer?"}>
            <motion.div
              variants={fade}
              animate="show"
              initial="hidden"
              className="awnser"
              layout
            >
              <p>Lorem ipsum dolor, sit amet consectetur</p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum temporibus dicta reiciendis hic nisi libero facere nam
                recusandae ducimus, eaque eum incidunt eos aperiam veniam amet
                architecto. Ut, debitis qui. Quia deleniti facere provident in
                adipisci nulla velit numquam, voluptates atque impedit officia
                voluptatem, est illum totam repellat quidem nihil! Aliquam iusto
                doloribus autem, explicabo velit deleniti ipsam praesentium
                nesciunt!
              </p>
            </motion.div>
          </Toggle>
        </AnimateSharedLayout>
      </Faq>
    </Hide>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    overflow: hidden;
  }

  .anwser {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
