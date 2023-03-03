import Accordion from "../components/accordion/accordion";

function AccordionPage() {

  const items = [
    {
      id: "0",
      label: "some label",
      content: "some content"
    },
    {
      id: "1",
      label: "some label2",
      content: "some content2"
    },
    {
      id: "2",
      label: "some label3",
      content: "some content3"
    },
  ];


  return (
    <div>
      <Accordion items={items}>Click here</Accordion>
    </div>
  );
}

export default AccordionPage;

