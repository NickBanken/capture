import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  const [faqToggle, setFaqToggle] = useState(false);
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div onClick={() => setFaqToggle(!faqToggle)} className="question">
        <h4>How Do I Start?</h4>
        <div className="awnser">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            temporibus dicta reiciendis hic nisi libero facere nam recusandae
            ducimus, eaque eum incidunt eos aperiam veniam amet architecto. Ut,
            debitis qui. Quia deleniti facere provident in adipisci nulla velit
            numquam, voluptates atque impedit officia voluptatem, est illum
            totam repellat quidem nihil! Aliquam iusto doloribus autem,
            explicabo velit deleniti ipsam praesentium nesciunt!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="awnser">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            temporibus dicta reiciendis hic nisi libero facere nam recusandae
            ducimus, eaque eum incidunt eos aperiam veniam amet architecto. Ut,
            debitis qui. Quia deleniti facere provident in adipisci nulla velit
            numquam, voluptates atque impedit officia voluptatem, est illum
            totam repellat quidem nihil! Aliquam iusto doloribus autem,
            explicabo velit deleniti ipsam praesentium nesciunt!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="awnser">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            temporibus dicta reiciendis hic nisi libero facere nam recusandae
            ducimus, eaque eum incidunt eos aperiam veniam amet architecto. Ut,
            debitis qui. Quia deleniti facere provident in adipisci nulla velit
            numquam, voluptates atque impedit officia voluptatem, est illum
            totam repellat quidem nihil! Aliquam iusto doloribus autem,
            explicabo velit deleniti ipsam praesentium nesciunt!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What Products Do You Offer?</h4>
        <div className="awnser">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            temporibus dicta reiciendis hic nisi libero facere nam recusandae
            ducimus, eaque eum incidunt eos aperiam veniam amet architecto. Ut,
            debitis qui. Quia deleniti facere provident in adipisci nulla velit
            numquam, voluptates atque impedit officia voluptatem, est illum
            totam repellat quidem nihil! Aliquam iusto doloribus autem,
            explicabo velit deleniti ipsam praesentium nesciunt!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
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
  }

  .anwser {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
