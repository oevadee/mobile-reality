import React from 'react';
import './BasicTextPanel.scss';

import { Button } from '../';

const BasicTextPanel = () => {
  return (
    <div className='basicTextPanel'>
      <h2>Kilka słów o nas</h2>
      <h4>Lorem ipsum dolor sit amet.</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        praesentium nostrum accusantium aut fugiat mollitia saepe vel pariatur
        quisquam porro corrupti laudantium facilis deleniti quidem totam
        blanditiis debitis error consequatur, sed a. Inventore aliquam sapiente
        doloribus pariatur eveniet assumenda exercitationem corporis facere,
        illum consequatur laborum facilis beatae nisi amet non.
      </p>
      <p className='bottomParagraph'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
        temporibus iusto doloribus fugit odit doloremque omnis. Minus maiores
        illo ratione expedita dolorum dolore, vitae autem reiciendis? Ratione,
        dolores natus ut quia provident magnam deleniti saepe beatae aspernatur
        magni soluta voluptas quo. Nisi neque exercitationem eius dolor
        consectetur, minus eveniet iste.
      </p>
      <Button to='/houses'>Zobacz więcej</Button>
    </div>
  );
};

export default BasicTextPanel;
