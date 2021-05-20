import React, { useState } from "react";
import "fontsource-roboto";
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Timer } from "@material-ui/icons";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [list4, setList4] = useState([]);


  const currencies = [
    {
      value: 'YES',
      label: 'YES',
    },
    {
      value: 'NO',
      label: 'NO',
    },
  
  ];
const handleClick =(event)=>{
   setList([...list, text])
   setList1([...list1, task])
   setList2([...list2, date])
   setList3([...list3, time])
   setList4([...list4, status])
   console.log(list,list1,list2,list3)
}
  return (
    
    <div style={{ margin: "20px" }}>
      <br/>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="initial"
            align="center"
            style={{ margin: "8px" }}
          >
           TASK MANAGEMENT SYSTEM
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Write task name..."
            value={text}
            onChange={(event) => setText(event.target.value)}
            size="small"
            style={{ margin: "8px" }}
          />
           {/* <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                // className={classes.textField}
              
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}
                <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2021-05-21T10:30"
                onChange={(event) => setDate(event.target.value)}
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />{' '}
               <TextField
                 id="time"
                 label="Alarm clock"
                 type="time"
                 defaultValue="07:30"
                 // className={classes.textField}
                 onChange={(event) => setTime(event.target.value)}
                 InputLabelProps={{
                   shrink: true,
                 }}
                 inputProps={{
                   step: 300, // 5 min
                 }}
  />
          <TextField
            variant="outlined"
            label="Write Task..."
            value={task}
            onChange={(event) => setTask(event.target.value)}
            size="small"
            style={{ margin: "8px" }}
            required
          />
         <TextField
          id="standard-select-currency"
          select
          label="Status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          // helperText="Status ?"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <Button
            disabled={!text || list.includes(text)}
            variant="contained"
            color="primary"
            size="large"
            style={{ margin: "8px" }}
            onClick={handleClick}
          >
            Add To List
          </Button>
        </Grid>

       
      </Grid>
      <Grid container spacing={2}>
     
       <Grid item md={2}>
          <List>
            {list.map((todo) => {
              return (
                <ListItem key={todo}>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText>{todo}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        
        <Grid item md={3}>
          <List>
            {list2.map((todo) => {
              return (
                <ListItem key={todo}>
                    <ListItemIcon>
                    <Timer />
                  </ListItemIcon>
                  <ListItemText>{todo}{'AM'}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item md={2}>
          <List>
            {list3.map((todo) => {
              return (
                <ListItem key={todo}>
                    <ListItemIcon>
                    <HourglassEmptyIcon />
                  </ListItemIcon>
                  <ListItemText>{todo}{''}{'AM'}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>

        <Grid item md={3}>
          <List>
            {list1.map((todo) => {
              return (
                <ListItem key={todo}>
                    {/* <ListItemIcon> */}
                    <AssignmentIcon />{' '}
                  {/* </ListItemIcon> */}
                  <ListItemText>{todo}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item md={1}>
          <List>
            {list4.map((todo) => {
              return (
                <ListItem key={todo}>
                    <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText>{todo}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
       
      </Grid>
    </div>
  );
}

export default App;
