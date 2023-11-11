import React from 'react';
import Accordion from '../components/Accordion';

export default function AccordionPage() {
  const items = [
    {
      id : 'qe123e1',
      label : 'Can I use React on a project?',
      content : 'You can use React anywhere you want.'
    },
    {
      id : 'qe323e1',
      label : 'Can I use JavaScript on a project?',
      content : 'You can use JavaScript anywhere you want.'
    },
    {
      id : 'qe023e1',
      label : 'Can I use Css on a project?',
      content : 'You can use Css anywhere you want.'
    }
  ]
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}
