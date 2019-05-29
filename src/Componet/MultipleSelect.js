import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const category = [
  '殺人',
  '鄭傑',
  '槍枝',
  '幫派鬥爭',
  '四海幫',
];

function MultipleSelect() {
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
  }

  function handleChangeMultiple(event) {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  }

  return (
    <FormControl>
      <InputLabel htmlFor="select-multiple-checkbox">關鍵字</InputLabel>
      <Select
        multiple
        value={personName}
        onChange={handleChange}
        input={<Input id="select-multiple-checkbox" />}
        renderValue={selected => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {category.map(c => (
          <MenuItem key={c} value={c}>
            <Checkbox checked={personName.indexOf(c) > -1} />
            <ListItemText primary={c} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultipleSelect;