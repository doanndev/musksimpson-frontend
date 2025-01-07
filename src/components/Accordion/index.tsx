'use client';
import React, { useState } from 'react';
import './Accordion.css';
import ArrowUpIcon from '@/assets/svgs/ArrowUpIcon.svg';
import ArrowDownIcon from '@/assets/svgs/ArrowDownIcon.svg';

interface AccordionItemProps {
  index: number;
  title: string;
  content: string;
  openIndex: number;
  setOpenIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ index, title, content, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  const toggleOpen = () => {
    // Nếu item đang mở thì đóng, nếu không thì mở và đóng các item còn lại
    setOpenIndex(isOpen ? -1 : index);
  };

  return (
    <div className="accordionItem">
      <div className="accordionHeader" onClick={toggleOpen}>
        <h3>{title}</h3>
        <span>{isOpen ? <ArrowUpIcon color="#fff" /> : <ArrowDownIcon color="#fff" />}</span>
      </div>
      <div className={`accordionContent ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1); // -1 có nghĩa là không có item nào mở

  return (
    <div className="accordion">
      <AccordionItem
        index={0}
        title="What is Musk Simpson?"
        content="Musk Simpson is a blockchain-based gaming ecosystem where players can own virtual land, stake NFTs to earn daily rewards, and engage in battles with Pika character NFTs."
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
      <AccordionItem
        index={1}
        title="How do I participate in the $MSS staking?"
        content="You can take part in the $PIKA staking on Binance Smart Chain. All you need to do is connect your Trust Wallet or other wallet to the staking widget above and use BNB to reserve $PIKA tokens."
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
      <AccordionItem
        index={2}
        title="When do I receive my staking tokens?"
        content="Once you’ve completed your staking, after lock duration, you’ll be able to use the same wallet to unstake your tokens."
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
      <AccordionItem
        index={3}
        title="What is staking?"
        content="Staking is the action of sending your tokens to a smart contract and locking them for a defined period of time. This will earn you more tokens over time at a dynamic rate."
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
      <AccordionItem
        index={4}
        title="Is there a way to contact support?"
        content="We’re here to help! Kindly join our Telegram channel to find prompt support from a Pika moderator. "
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
    </div>
  );
};

export default Accordion;
