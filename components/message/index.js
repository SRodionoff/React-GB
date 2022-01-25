import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';

const useStyles = makeStyles({
   listWrap: {
      display: "grid",
      gridTemplateColums: "200px 1fr",
   }
});


export const MessageList = () => {
   const [messageList, setMessageList] = useState([]);
   const [value, setValue] = useState(" ");
   const ChatList = [
      {
         name: "Person 1",
         id: "1"
      },
      {
         name: "Person 2",
         id: "2"
      },
      {
         name: "Person 3",
         id: "3"
      },
      {
         name: "Person 4",
         id: "4"
      }
   ];
   const classes = useStyles();

   const sendMessage = (author, text) => {
      const newMessage = {
         author,
         text
      };
      setMessageList((prevState) => [...prevState, newMessage]);
      setValue("");
   };

   const resetForm = () => {
      setValue("");
   }
   const onSubmitMessage = (event) => {
      event.preventDefault();
      sendMessage("user", value);
      resetForm();
   };
   const onChangeMessageInput = (event) => {
      setValue(event.target.value);
   };
   useEffect(() => {
      if (messageList.length === 0) {
         return;
      }
      const tail = messageList[messageList.length - 1];
      if (tail.author === "bot") {
         return;
      }
      sendMessage("bot", "Hto tut");
   }, [messageList]);

   return (
      <div className="App-forma">
         <form onSubmit={onSubmitMessage}>
            <TextField
               onChange={onChangeMessageInput}
               placeholder="Text me"
               value={value}
               type="text"
               autoFocus={true}
            />
            <div>
               <Button type="submit">Send</Button>
            </div>
         </form >
         <ul>
            {
               messageList.map((item, index) => (
                  <li key={index}>
                     {item.author}: {item.text}
                  </li>
               ))
            }
         </ul>
         <div className='listWrap'>
            {ChatList.map((item, index) => {
               return <ListItem key={index}>{item.name}</ListItem>
            })}
         </div>
      </div >
   );
};