import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const EditButton = () => (
  <div>
    <Button animated='vertical'>
      <Button.Content hidden>Edit</Button.Content>
      <Button.Content visible>
        <Icon color='green' name='edit' />
      </Button.Content>
    </Button>
  </div>
);

export default EditButton;
